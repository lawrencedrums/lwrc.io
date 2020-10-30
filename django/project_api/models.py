from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=120)
    description = models.CharField(max_length=300)
    image = models.ImageField(upload_to='images', blank=True)
    url = models.URLField()
    repo = models.URLField(blank=True)
    publish_date = models.DateField()

    def __str__(self):
        return self.title