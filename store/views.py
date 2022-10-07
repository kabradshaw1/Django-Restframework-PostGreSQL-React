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

def register(request):
  if request.method == 'POST':
    username = request.POST['username']
    email = request.POST['email']
    password = request.POST['password']
    password2 = request.POST['password2']

    if password == password2:
      if User.objects.filter(email=email).exists():
        messages.info(request, 'Email already used.')
        return redirect('register')
      elif User.objects.filter(username=username).exists():
        messages.info(request, 'Username already used.')
        return redirect('register')
      else:
        user = User.objects.create_user(username=username, email=email, password=password)
        user.save()
        return redirect('login')
    else:
      messages.info(request, 'Password not the same')
      return redirect('register')
  else:
    return render(request, 'register.html')

def login(request):
  if request.method == 'POST':
    username = request.POST['username']
    password = request.POST['password']

    user = auth.authenticate(username=username, password=password)

    if user is not None:
      auth.login(request, user)
      return redirect('/')
    else:
      messages.info(request, 'Credentials Invalid')
      return redirect('login')
  else:
    return render(request, 'login.html')
  
def logout(request):
  auth.logout(request)
  return redirect('/')