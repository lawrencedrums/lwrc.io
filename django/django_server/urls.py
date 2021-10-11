from django.contrib import admin
from django.urls import path, include   
from django.conf import settings
from django.conf.urls.static import static
from django.views.decorators.csrf import csrf_exempt
from rest_framework import routers
from project_api.views import ProjectViewSet
from store.views import ProductViewSet, OrderViewSet, CheckoutSessionView, stripe_webhook

router = routers.DefaultRouter()
router.register('projects', ProjectViewSet)
router.register('storeproducts', ProductViewSet)
# router.register('orders', OrderViewSet)

ADMIN_URL = settings.ADMIN_URL

urlpatterns = [
    path(ADMIN_URL, admin.site.urls),
    path('', include(router.urls)),
    path('create-checkout-session/', csrf_exempt(CheckoutSessionView.as_view()), name='create-checkout-session'),
    path('webhook/', stripe_webhook, name='webhook'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)