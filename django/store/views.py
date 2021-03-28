import stripe
import json
from rest_framework import viewsets
from rest_framework.response import Response
from django.conf import settings
from django.http import JsonResponse
from django.views import View
from .models import Product, Order
from .serializers import ProductSerializer, OrderSerializer

stripe.api_key = settings.STRIPE_TEST_SECRET_KEY

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
        checkout_detail = json.loads(request.body)
        YOUR_DOMAIN = "http://localhost:3000/"
        checkout_session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[
                {
                    'price_data': {
                        'currency': 'usd',
                        'unit_amount': int(checkout_detail['price']*100),
                        'product_data': {
                            'name': checkout_detail['title'],
                            'images': ['https://i.imgur.com/EHyR2nP.png'],
                        },
                    },
                    'quantity': 1,
                },
            ],
            mode='payment',
            success_url=YOUR_DOMAIN + '/success/',
            cancel_url=YOUR_DOMAIN + '/canceled/',
        )
        return JsonResponse({
            'id': checkout_session.id
        })
