from django.shortcuts import render
from rest_framework import viewsets
from .models import Project
from .serializers import ProjectSerializer

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API view for all projects, starting from most recent
    """
    queryset = Project.objects.order_by('-publish_date')
    serializer_class = ProjectSerializer

class RecentProjectViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API view for the most recent 3 projects
    """
    queryset = Project.objects.order_by('-publish_date')[:3]
    serializer_class = ProjectSerializer