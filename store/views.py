from django.shortcuts import render
from django.contrib.auth.models import User, auth
from django.contrib import messages
# from .models import Feature

def index(request):
  # features = Feature.objects.all() 
  # {'features': features}
  return render(request, 'index.html')