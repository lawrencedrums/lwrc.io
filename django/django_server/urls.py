from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from project_api.views import ProjectViewSet, RecentProjectViewSet
from store.views import ProductViewSet

router = routers.DefaultRouter()
router.register('projects', ProjectViewSet)
router.register('recentprojects', RecentProjectViewSet)
router.register('storeproducts', ProductViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)