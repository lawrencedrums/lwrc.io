import stripe
import json
from rest_framework import viewsets
from rest_framework.response import Response
from django.conf import settings
from django.core.mail import EmailMessage
from django.http import JsonResponse, HttpResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from .models import Product, Order
from .serializers import ProductSerializer, OrderSerializer

stripe.api_key = settings.STRIPE_SECRET_KEY
endpoint_secret = settings.ENDPOINT_SECRET
YOUR_DOMAIN = settings.YOUR_DOMAIN

id_in_current_order = []

def set_id_in_current_order(item_id):
    global id_in_current_order
    id_in_current_order = item_id

def calculate_total_price(product_id_list):
    # Calculate total price in an order
    total_price = 0
    for product_id in product_id_list:  # for every id in the order
        current_product = Product.objects.get(id=product_id) # fetch the details of the item
        total_price += current_product.price*100    # get the item's price, add it to total
    return int(total_price)

def get_order_items(product_id_list):
    # Get a string of all items in an order
    order_items = ""
    for idx, product_id in enumerate(product_id_list):
        current_product = Product.objects.get(id=product_id)
        order_items += current_product.title
        if idx + 1 != len(product_id_list):
            order_items += ", "
        else:
            order_items += "."
    return order_items

def get_item_image_url(product_id_list):
    # Get the image_url of the first item in an order
    first_item = Product.objects.get(id=product_id_list[0])
    return [first_item.image_url]

class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def retrieve(self, request, *args, **kwargs):
        # If a param is given, search the database for a match in the title
        product = Product.objects.filter(title__icontains=kwargs['pk'])
        serializer = ProductSerializer(product, many=True)
        return Response(serializer.data)

class OrderViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class CheckoutSessionView(View):
    def post(self, request, *args, **kwargs):
        order = json.loads(request.body)    # Convert json to a python object
        items_id_in_order = order['id']
        set_id_in_current_order(items_id_in_order)
        checkout_session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[
                {
                    'price_data': {
                        'currency': 'usd',
                        'unit_amount': calculate_total_price(items_id_in_order),
                        'product_data': {
                            'name': get_order_items(items_id_in_order),
                            'images': get_item_image_url(items_id_in_order),
                        },
                    },
                    'quantity': 1,
                },
            ],
            mode='payment',
            metadata={ "id": items_id_in_order[0] },
            success_url=YOUR_DOMAIN + '/success/',
            cancel_url=YOUR_DOMAIN + '/store/',
        )
        return JsonResponse({
            'id': checkout_session.id
        })

@csrf_exempt
def stripe_webhook(request):
    payload = request.body
    sig_header = request.META['HTTP_STRIPE_SIGNATURE']
    event = None

    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, endpoint_secret
        )
    except ValueError as e:
        # Invalid payload
        return HttpResponse(status=400)
    except stripe.error.SignatureVerificationError as e:
        # Invalid signature
        return HttpResponse(status=400)

    # Handle the checkout.session.completed event
    if event['type'] == 'checkout.session.completed':
        session = event['data']['object']

        # Fulfill the order
        fulfill_order(session)

    # Passed signature verification
    return HttpResponse(status=200)

def fulfill_order(session):
    itemID = session['metadata']['id']
    customer_email = session['customer_details']['email']

    send_email_to_customer(itemID, customer_email)
    # create_fulfilled_order(itemID, customer_email)

def send_email_to_customer(itemID, customer_email):
    item_details = Product.objects.get(id=itemID)

    # hacky way to stop duplicated checkout.session.completed to send more email
    if id_in_current_order[0] == int(itemID):
        email_title = 'Lwrc.io - Thank you for your purchase!'
        email_msg = "Dear fellow drummer,<p>Thank you for your support, you've made my day!<p/>Link to your purchases <a href=%s>here<a/>. <p>Lawrence Wong<p/>" % item_details.file_link

        email = EmailMessage(email_title, email_msg, settings.EMAIL_HOST_USER, [customer_email])
        email.content_subtype = "html"
        email.send()


def create_fulfilled_order(itemID, customer_email):
    new_order = Order(email=customer_email, ordered_items_id=itemID)
    new_order.save()