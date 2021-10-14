from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from visitcounter import views

urlpatterns = [
    path('', views.index, name='index'),
]