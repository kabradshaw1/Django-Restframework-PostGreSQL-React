from django.shortcuts import render
from django.contrib.auth.models import User, auth, Group
from django.contrib import messages
from rest_framework import viewsets, permissions, generics
# from tutorial.quickstart.serializers import UserSerializer, GroupSerializer
from .models import Item, Location
from .serializer import ItemSerializer, LocationSerializer

# from .models import Feature

def index(request):
  # features = Feature.objects.all() 
  # {'features': features}
  return render(request, 'index.html')

class ItemList(generics.ListCreateAPIView):
  serializer_class = ItemSerializer

  def get_queryset(self):
    queryset = Item.objects.all()
    location = self.request.query_params.get('location')
    if location is not None:
      queryset = queryset.filter(itemLocation=location)
    return queryset

class ItemDetail(generics.RetrieveUpdateDestroyAPIView):
  serializer_class = ItemSerializer
  queryset = Item.objects.all()

class LocationList(generics.ListCreateAPIView):
  serializer_class = LocationSerializer
  queryset = Location.objects.all()

class LocationDetail(generics.RetrieveUpdateDestroyAPIView):
  serializer_class = LocationSerializer
  queryset = Location.objects.all()