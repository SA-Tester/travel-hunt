from django.urls import path
from . import views_general
from . import views_user
from . import views_admin

urlpatterns = [
    path('check_city/<str:city_name>',
         views_general.check_city, name="check_city"),

    path('popular_city/',
         views_general.get_popular_city, name="popular_city"),

    path('get_city/<str:city_id>',
         views_general.get_city, name='get_city'),

    path('get_location/<str:location_id>',
         views_general.get_location, name='get_location'),

    path('login',
         views_general.LoginView.as_view(), name='login'),

    path('logout', views_general.LogoutView.as_view(), name="logout"),

    path('validate_user_signup',
         views_user.validate_signup, name='validate_user_signup'),

    path('validate_admin_signup',
         views_admin.validate_signup, name='validate_admin_signup'),

    path('save_trip', views_user.save_trip, name="save_trip")
]
