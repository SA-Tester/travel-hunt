# Create your views here.

from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer
from .models import Country
from .models import User


@api_view(['GET'])
def get_country(request, country_name):
    country = Country.objects.filter(name=country_name).values()

    if(len(country) > 0):
        return Response(
            {"id": country[0]["id"],
             "name": country[0]["name"],
             "code": country[0]["code"],
             "description": country[0]["description"],
             "flag": country[0]["flag"]
             }
        )

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
