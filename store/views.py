from django.shortcuts import render, REDIRECT
from django.contrib.auth.models import User, auth
from django.contrib import messages
from .models import Feature
# Create your views here.

def index(request):
  features = Feature.objects.all()
  return render(request, 'index.html', {'features': features})