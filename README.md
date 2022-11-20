# Django-Rest-MySQL-Jquery 

## Purpose
This project is entended to practice using some tools I'm only beginning to mess around with.  This is the first time I've worked with rest.  

## PC Installation
* You will need python 3.  Download this at the web page.

* You will need to create a vitual environment.  In a file you plan on importing this project to, type python -m venv <environment name> into the cmd (need to use python3 for mac)

* You will need to log into the vitual environment.  Type <environment name>\Scripts\activate into the cmd (I believe this command is different in mac)

* You will need to clone the project.  git clone git@github.com:kabradshaw1/django-rest-mysql.git

* You will need to install django.  Type pip install django into cmd

* You will need to install djangorestframework.  Type pip install djangorestframework into cmd

* You will need to install pymysql.  Type pip install pymysql into cmd

* You will need to install django-cors-header.  Type pip install django-cors-header into cmd

## Use 

* You will need to cd into the store directory in cmd.  

* You can start the server by typing python manage.py runserver into the cmd.


models:

item:
-name
-description
-price
-location
-seller

location:
-id
-address

user:
-username
-password

catogory:
-id
-name

