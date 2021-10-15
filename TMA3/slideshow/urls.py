from django.urls import path, include
from slideshow import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api/', include('slideshow.api.urls'))
]