from django.db import models

class Location(models.Model):
  locationName = models.CharField(max_length=100, unique=True)

  def __str__(self):
    return self.locationName

class Item(models.Model):
  itemName = models.CharField(max_length=100)
  data_added = models.DateField(auto_now_add=True)
  itemLocation = models.ForeignKey(Location, on_delete=models.CASCADE)

  def __str__(self):
    return self.itemName

class Feature(models.Model):
  name = models.CharField(max_length=100)
  details = models.CharField(max_length=500)

class store(models.Model):
    title = models.CharField(max_length=70, blank=False, default='')
    description = models.CharField(max_length=200,blank=False, default='')
    published = models.BooleanField(default=False)