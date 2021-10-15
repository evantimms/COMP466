from django.urls import path, include
from part4 import views

urlpatterns = [
    path('', views.index, name='index'),
]