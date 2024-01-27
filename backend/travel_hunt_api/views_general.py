# Create your views here.

from django.shortcuts import render
from django.contrib.auth import authenticate, login
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from .models import City
from .functions import placesInCity


@api_view(['GET'])
def check_city(request, city_name):
    requested_city_id = ""
    country = ""

    arr = city_name.split(" ", 1)
    if(len(arr) > 1):
        country = arr[1]

    cityWithCountry = City.objects.select_related('country')

    for city in cityWithCountry:
        if ((city.name.lower() == arr[0].lower() and city.country.name.lower() == country.lower()) or
                (city.name.lower() == arr[0].lower())):
            requested_city_id = city.id

    if(requested_city_id != ""):
        return Response(requested_city_id, status=status.HTTP_200_OK)

    else:
        return Response({"msg": "An error occured"}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def get_city(request, city_id):
    cityWithCountry = City.objects.select_related('country').filter(id=city_id)
    places = placesInCity(city_id)

    for city in cityWithCountry:
        return Response(
            {
                "city_id": city.id,
                "city_name": city.name,
                "latitude": city.latitude,
                "longitude": city.longitude,
                "city_description": city.description,
                "image1": city.image1,
                "image2": city.image2,
                "image3": city.image3,
                "country_id": city.country.id,
                "country_name": city.country.name,
                "country_code": city.country.code,
                "country_description": city.country.description,
                "country_flag": city.country.flag,
                "places": places
            }
        )

    return Response({"msg": "An error occured"}, status=status.HTTP_404_NOT_FOUND)


class LoginView(APIView):
    # Home View is only available for authenticated users
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        # print(request.user)
        content = {"message": "Login Successful"}

        return Response(content)


class LogoutView(APIView):
    permission_classes = [IsAuthenticated,]

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)

        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
