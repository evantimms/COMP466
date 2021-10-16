from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('computers', views.computers, name='computers'),
    path('customize', views.customize, name='customize'),
    path('parts', views.parts, name='parts'),
    path('cart', views.cart, name='cart'),
    path('orders', views.orders, name='orders')
]