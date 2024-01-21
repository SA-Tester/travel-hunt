# Create your views here.

from django.shortcuts import render
from django.contrib.auth import authenticate, login
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserSerializer
from .serializers import CountrySerializer
from .serializers import CitySerializer
from .models import Country
from .models import City
from .models import User


@api_view(['GET'])
def check_city(request, city_name):
    cityQuery = City.objects.filter(name=city_name)
    citySerializer = CitySerializer(cityQuery, many=True)
    cityData = citySerializer.data

    if(len(cityData) > 0):
        return Response(status=status.HTTP_200_OK)

    else:
        return Response({"msg": "An error occured"}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def get_city(request, city_name):
    cityQuery = City.objects.filter(name=city_name)
    citySerializer = CitySerializer(cityQuery, many=True)
    cityData = citySerializer.data

    if(len(cityData) > 0):
        countryQuery = Country.objects.filter(id=cityData[0]["country"])
        countrySerializer = CountrySerializer(countryQuery, many=True)
        countryData = countrySerializer.data

        if(len(countryData) > 0):
            return Response(
                {
                    "city_id": cityData[0]["id"],
                    "city_name": cityData[0]["name"],
                    "latitude": cityData[0]["latitude"],
                    "longitude": cityData[0]["longitude"],
                    "city_description": cityData[0]["description"],
                    "image1": cityData[0]["image1"],
                    "image2": cityData[0]["image2"],
                    "image3": cityData[0]["image3"],
                    "country_id": countryData[0]["id"],
                    "country_name": countryData[0]["name"],
                    "country_code": countryData[0]["code"],
                    "country_description": countryData[0]["description"],
                    "country_flag": countryData[0]["flag"]
                }
            )
        else:
            return Response({"msg": "An error occured"}, status=status.HTTP_404_NOT_FOUND)

    else:
        return Response({"msg": "An error occured"}, status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
def validate_signup(request):
    """
        Handles the signup of a new user

        Arduments: A HTTP request object [POST]

        Returns: A HTTP_STATUS_CODE
    """

    # Check whether passwords match
    password1 = request.POST.get("password1")
    password2 = request.POST.get("password2")
    email = request.data["email"]
    user = User.objects.filter(email=email).first()

    # check email already exist or not
    if user is not None:
        return Response({
            "error": "This email already registered"
        })

    elif(password1 == password2):
        try:
            # If passwords match create a copy of responses and remove the two fields
            new_data = request.POST.copy()
            new_data.pop('password1')
            new_data.pop('password2')

            # Create the new user id
            userCount = User.objects.values_list("id").count()
            id = "U" + str(100000 + userCount + 1)

            # Update the response with id and password
            new_data.update({'id': id})
            new_data.update({'password': password1})

            userSerializer = UserSerializer(data=new_data)
            userSerializer.is_valid(raise_exception=True)
            userSerializer.save()

            return Response(
                {"error": "User created successfully"},
                status=status.HTTP_201_CREATED
            )

        except Exception as e:
            return Response(
                {"error": f"An error occured: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

    else:
        return Response(
            {"error": f"Password does not match"},
            status=status.HTTP_406_NOT_ACCEPTABLE
        )


class LoginView(APIView):
    # Home View is only available for authenticated users
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        # print(request.user)
        content = {"message": "Hello from JWT"}

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
