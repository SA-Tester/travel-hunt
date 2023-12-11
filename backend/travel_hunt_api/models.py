# Create your models here.

from django.db import models
import requests

class Locations:
    def getLatitudeLongitude(cityname):
        headers = {
            "X-RapidAPI-Key": "0c69f6458emsh127db94972faeacp1f6487jsnacaca5786715",
            "X-RapidAPI-Host": "opentripmap-places-v1.p.rapidapi.com"
        }
        
        url1 = "https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname"
        querystring = {"name": cityname} 
        response = requests.get(url1, headers=headers, params = querystring)
        lat = response.json()["lat"]
        lon = response.json()["lon"]

        return (lat, lon)
    
    def getTouristAttractions():
        headers = {
            "ACCESS_TOKEN": "AsmAArUJCCs3aJp6Z40xZcYDZCmL"
        }
        return
    
    def getHotels():
        return