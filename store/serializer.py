from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Item, Location


class ItemSerializer(serializers.ModelSerializer):
  class Meta:
    model = Item
    fields = ('__all__')

class LocationSerializer(serializers.ModelSerializer):
  class Meta:
    model = Location
    fields = ('__all__')

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']