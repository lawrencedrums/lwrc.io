from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from project_api.views import ProjectViewSet

router = routers.DefaultRouter(ProjectViewSet)
router.register('projects', ProjectViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]
