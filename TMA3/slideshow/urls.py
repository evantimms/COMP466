from django.urls import path

from slideshow import views

urlpatterns = [
    path('', views.index, name='index'),
]