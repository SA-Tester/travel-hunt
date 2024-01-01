from django.shortcuts import render

# Create your views here.
import requests
from django.http import JsonResponse

def weather(request, city):
    url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants%20in%20Sydney&key=AIzaSyA3pAqddClbAT-GzSbGaFF6vJgeq3iu6-k".format(city)
    response = requests.get(url)
    data = response.json()
    return JsonResponse(data)