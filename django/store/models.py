import uuid
from django.db import models
from django.contrib.postgres.fields import ArrayField

class Product(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='products/images')
    image_url = models.URLField(blank=True)
    song = models.CharField(max_length=50, blank=True)
    artist = models.CharField(max_length=50, blank=True)
    album = models.CharField(max_length=100, blank=True)
    release_date = models.DateField(blank=True)
    publish_date = models.DateField(auto_now_add=True)
    price = models.FloatField()
    file_upload = models.FileField(upload_to='products/files')
    file_link = models.URLField(blank=True)
    CATAGORY_CHOICES = [
        ('Transcriptions', 'Transcriptions'),
        ('Lessons', 'Lessons'),
        ('Stems', 'Stems'),
    ]
    catagory = models.CharField(
        max_length=20, 
        choices=CATAGORY_CHOICES,
        default='Transcriptions',
    )

    def __str__(self):
        return self.title

class Order(models.Model):
    order_id = models.UUIDField(unique=True, primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(max_length=250, unique=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    date = models.DateTimeField(auto_now=True)
    ordered_items_id = ArrayField(models.IntegerField())

    def __str__(self):
        return self.email