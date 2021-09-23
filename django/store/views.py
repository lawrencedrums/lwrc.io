import stripe
import json
from rest_framework import viewsets
from rest_framework.response import Response
from django.conf import settings
from django.http import JsonResponse, HttpResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from .models import Product, Order
from .serializers import ProductSerializer, OrderSerializer

stripe.api_key = settings.STRIPE_TEST_SECRET_KEY
endpoint_secret = settings.ENDPOINT_SECRET

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
        YOUR_DOMAIN = "http://localhost:3000"
        order = json.loads(request.body)    # Convert json to a python object
        checkout_session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[
                {
                    'price_data': {
                        'currency': 'usd',
                        'unit_amount': calculate_total_price(order['id']),
                        'product_data': {
                            'name': get_order_items(order['id']),
                            'images': get_item_image_url(order['id']),
                        },
                    },
                    'quantity': 1,
                },
            ],
            mode='payment',
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

    # Passed signature verification
    return HttpResponse(status=200)