# Create your models here.

from django.db import models


class Country(models.Model):
    id = models.CharField(max_length=64, primary_key=True)
    name = models.CharField(max_length=256)
    code = models.CharField(max_length=3)
    description = models.CharField(max_length=4096)
    flag = models.CharField(max_length=1024)

    class Meta:
        db_table = "country"


class City(models.Model):
    id = models.CharField(max_length=64, primary_key=True)
    name = models.CharField(max_length=128)
    latitude = models.DecimalField(max_digits=10, decimal_places=2)
    longitude = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.CharField(max_length=4096)
    country_id = models.ForeignKey(
        Country, on_delete=models.CASCADE)
    image1 = models.CharField(max_length=512)
    image2 = models.CharField(max_length=512)
    image3 = models.CharField(max_length=512)

    class Meta:
        db_table = "city"


class Location(models.Model):
    id = models.CharField(max_length=64, primary_key=True)
    name = models.CharField(max_length=128)
    category = models.CharField(max_length=128)
    description = models.CharField(max_length=1024)
    latitude = models.DecimalField(max_digits=10, decimal_places=2)
    longitude = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.CharField(max_length=2048)
    city_id = models.ForeignKey(
        City, on_delete=models.CASCADE)

    class Meta:
        db_table = "location"


class Hotel(models.Model):
    pass


class Room(models.Model):
    pass


class Trip(models.Model):
    pass


class User(models.Model):
    pass
