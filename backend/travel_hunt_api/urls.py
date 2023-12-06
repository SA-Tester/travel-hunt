from django.urls import path
from . import views

urlpatterns = [
    path('get/', views.hello_world, name='hello_world from django'),
]