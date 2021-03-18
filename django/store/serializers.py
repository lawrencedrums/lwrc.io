from rest_framework import serializers
from .models import Product, Order

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'catagory', 'title', 'artist', 'song', 'album', 'image_url', 'release_date', 'price']

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['order_id', 'date', 'first_name', 'last_name', 'email', 'ordered_items_id']