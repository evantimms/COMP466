from django.urls import path
from . import views

urlpatterns = [
    path('components', views.components, name='components'),
    path('auth/login', views.login, name='login'),
    path('auth/logout', views.logout, name='logout'),
    path('auth/create', views.create_user, name='create')
]