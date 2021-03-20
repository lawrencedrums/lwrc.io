from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from project_api.views import ProjectViewSet
from store.views import ProductViewSet, OrderViewSet, CheckoutSessionView

router = routers.DefaultRouter()
router.register('projects', ProjectViewSet)
router.register('storeproducts', ProductViewSet)
router.register('orders', OrderViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('create-checkout-session/', CheckoutSessionView.as_view(), name='create-checkout-session'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)