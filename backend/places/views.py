from django.shortcuts import render

# Create your views here.
import requests
from django.http import JsonResponse

def weather():
    url ='https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.7937%2C-122.3965&radius=500&type=restaurant&key=AIzaSyA3pAqddClbAT-GzSbGaFF6vJgeq3iu6-k'
    response = requests.get(url)
    data = response.json()
    return JsonResponse(data)
