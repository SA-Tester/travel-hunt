# Create your views here.
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from .functions import placesInCity
from .models import City
from .models import Location
from .models import Trip
from django.core.serializers import serialize



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
            requested_city_name = city.name

    if(requested_city_id != ""):
        return Response({"city_id": requested_city_id, "city_name": requested_city_name}, status=status.HTTP_200_OK)

    else:
        return Response({"msg": "No Data Available"}, status=status.HTTP_404_NOT_FOUND)


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

    return Response({"msg": "No Data Available"}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def get_location(request, location_id):
    locationWithCity = Location.objects.select_related('city').filter(id=location_id)
    

    if(len(locationWithCity) > 0):
        location = locationWithCity[0]

        cityWithCountry = City.objects.select_related('country').filter(id=location.city.id)

        if(len(cityWithCountry) > 0):
            return Response(
                {
                    'id': location.id,
                    'name': location.name,
                    'category': location.category,
                    'description': location.description,
                    'image1': location.image1,
                    'image2': location.image2,
                    'image3': location.image3,
                    'city_name': location.city.name,
                    'latitude': location.city.latitude,
                    'longitude': location.city.longitude,
                    'country_name': location.city.country.name
                }
            )

    return Response(
        {'error': 'No Data Available'}
    )



@api_view(['GET'])
def get_popular_city(request):
    # Randomly order the cities and select the first 10
    cities = City.objects.order_by('?')[:12]

    # List to store the places for each city
    city_data = []

    # Iterate through the randomly selected cities
    for city in cities:
        city_data.append({
            "city_id": city.id,
            "city_name": city.name,
            "image1": city.image1,
        })

    if len(city_data) > 0:
        return Response({"cities": city_data})

    else:
        return Response({"msg": "An error occurred"})


class LoginView(APIView):
    # Home View is only available for authenticated users
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        # print(request.user)
        content = {"email": request.user.email,"name":request.user.last_name}

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
