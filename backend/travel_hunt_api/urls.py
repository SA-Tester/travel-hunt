from django.urls import path
from . import views

urlpatterns = [
    path('check_city/<str:city_name>', views.check_city, name="check_city"),
    
    path('get_city/<str:city_name>',
         views.get_city, name='get_city'),

    path('validate_signup',
         views.validate_signup, name='validate_signup'),

    path('login',
         views.LoginView.as_view(), name='login'),

    path('logout', views.LogoutView.as_view(), name="logout")
]
