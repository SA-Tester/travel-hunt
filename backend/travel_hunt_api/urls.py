from django.urls import path
from . import views

urlpatterns = [
    path('get_country/<str:country_name>',
         views.get_country, name='get_country'),

    path('validate_signup',
         views.validate_signup, name='validate_signup')
]
