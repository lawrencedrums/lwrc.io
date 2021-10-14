import uuid
from django.db import models
from django.contrib.postgres.fields import ArrayField

class Product(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='products/images', blank=True)
    image_url = models.URLField(blank=True)
    publish_date = models.DateField(auto_now_add=True)
    price = models.FloatField()
    file_link = models.URLField()
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
    order_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(max_length=250)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    date = models.DateTimeField(auto_now=True)
    ordered_items_id = models.CharField(max_length=30)

    def __str__(self):
        title = self.email + " :" + self.date
        return title