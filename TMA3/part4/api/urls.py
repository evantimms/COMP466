from django.urls import path
from . import views

urlpatterns = [
    path('components', views.components, name='components'),
    path('auth/login', views.login_user, name='login'),
    path('auth/logout', views.logout_user, name='logout'),
    path('auth/create', views.create_user, name='create')
]