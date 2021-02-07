from django.db import models

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