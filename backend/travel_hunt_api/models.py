# Create your models here.

from django.db import models
import requests


class Locations:
    cityname = ""
    latitude = ""
    longitude = ""
    sights = {}
    nightlife = {}
    restaurants = {}
    shopping = {}

    def setCityName(self, cityname):
        self.cityname = cityname

    def getCoordinates(self):
        headers = {
            "X-RapidAPI-Key": "0c69f6458emsh127db94972faeacp1f6487jsnacaca5786715",
            "X-RapidAPI-Host": "opentripmap-places-v1.p.rapidapi.com"
        }

        url = "https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname"
        querystring = {"name": self.cityname}
        response = requests.get(url, headers=headers, params=querystring)
        lat = response.json()["lat"]
        lon = response.json()["lon"]

        self.latitude = lat
        self.longitude = lon
        # print(lat, lon)

    def getAmedeusAccessToken(self):
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        }

        data = {
            "grant_type": "client_credentials",
            "client_id": "3VkUl9pwjnIqz57GwdAvZ0uvDqHOYPLv",
            "client_secret": "jSFY9fKyh674IGUi",
        }

        url = "https://test.api.amadeus.com/v1/security/oauth2/token"
        response = requests.post(url, headers=headers, data=data)
        access_token = response.json(
        )["token_type"] + " " + response.json()["access_token"]
        return access_token

    def fillPointsOfInterest(self):
        self.getCoordinates()
        ACCESS_TOKEN = self.getAmedeusAccessToken()

        headers = {
            "accept": "application/vnd.amadeus+json",
            "Authorization": ACCESS_TOKEN
        }

        parameters = {
            "latitude": self.latitude,
            "longitude": self.longitude,
            "radius": "1",  # 1 km
        }

        url = "https://test.api.amadeus.com/v1/reference-data/locations/pois"
        response = requests.get(url, headers=headers, params=parameters)
        # print(response.status_code)

        if response.status_code == 200:
            s = 0  # SIGHTS COUNTER
            n = 0  # NIGHTLIFE COUNTER
            r = 0  # RESTAURANT COUNTER
            sh = 0  # SHOPPING COUNTER

            for datapoint in response.json()["data"]:
                print(datapoint)

                if datapoint["category"] == "SIGHTS":
                    self.sights[s] = datapoint

                elif datapoint["category"] == "NIGHTLIFE":
                    self.nightlife[n] = datapoint

                elif datapoint["category"] == "RESTAURANT":
                    self.restaurants[r] = datapoint

                elif datapoint["category"] == "SHOPPING":
                    self.shopping[sh] = datapoint

        else:
            return ("An Error Occurued. Status: " + str(response.status_code) + " " +
                    response.json()["errors"][0]["title"] + " " +
                    response.json()["errors"][0]["detail"])

    def getTouristAttractions(self):
        return self.sights

    def getRestaurants(self):
        return self.restaurants

    def getNightLife(self):
        return self.nightlife

    def getShopping(self):
        return self.shopping


# TEST CODE

# CREATE AN OBJECT
loc = Locations()

# SET CITY NAME
loc.setCityName("Paris")

# SEEK FOR THE ERROR MESSAGE
if(loc.fillPointsOfInterest() != ""):
    print(loc.fillPointsOfInterest())

# IF ERROR MESSAGE IS NOT FOUND, PRINT THE RESULTS
else:
    print("Tourist Attractions")
    print(loc.getTouristAttractions())

    print("Restaurants")
    print(loc.getRestaurants())

    print("Nightlife")
    print(loc.getNightLife())

    print("Shopping")
    print(loc.getShopping)
