from django.urls import path
from . import views

urlpatterns = [
    path('get_country/<str:country_name>',
         views.get_country, name='get_country'),

    path('validate_signup',
         views.validate_signup, name='validate_signup'),

    path('login',
         views.LoginView.as_view(), name='login'),

    path('logout', views.LogoutView.as_view(), name="logout")
]
