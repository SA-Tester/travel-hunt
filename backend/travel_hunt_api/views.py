# Create your views here.

from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Country


@api_view(['GET'])
def get_country(request, country_name):
    country = Country.objects.filter(name=country_name).values()

    if(len(country) > 0):
        # print(country[0])

        return Response(
            {"id": country[0]["id"],
             "name": country[0]["name"],
             "code": country[0]["code"],
             "description": country[0]["description"],
             "flag": country[0]["flag"]
             }
        )

    else:
        return Response({"msg": "An error occured"})
