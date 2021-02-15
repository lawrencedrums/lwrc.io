from rest_framework import viewsets
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer

class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def retrieve(self, request, *args, **kwargs):
        # If a param is given, search the database for a match in the title
        product = Product.objects.filter(title__icontains=kwargs['pk'])
        serializer = ProductSerializer(product, many=True)
        return Response(serializer.data)
