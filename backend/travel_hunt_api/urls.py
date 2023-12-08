from django.urls import path
from . import views

urlpatterns = [
    path('sasith/', views.hello_world, name='hello_world from django'),
]