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
from .models import City
from .models import User
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
