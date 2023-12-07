import requests

# Booking.com - Unofficial API
API_KEY = "5ae2e3f221c38a28845f05b6c072376519fc7c496a34c99dd9d6e347"

def getFromAPI():
    headers = {
        "X-RapidAPI-Key": "0c69f6458emsh127db94972faeacp1f6487jsnacaca5786715",
        "X-RapidAPI-Host": "opentripmap-places-v1.p.rapidapi.com"
    }

    # Should start searching by entering a place
    url1 = "https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname"
    querystring1 = {"name": "London"} 
    response1 = requests.get(url1, headers=headers, params=querystring1)
    print(response1.json())
   
    # List all places within a 500m radius of the given longitude and latitude
    url2 = "https://opentripmap-places-v1.p.rapidapi.com/en/places/radius"
    lat = response1.json()["lat"]
    lon = response1.json()["lon"]
    querystring2 = {"radius": "300", "lon": lon, "lat": lat}
    response2 = requests.get(url2, headers=headers, params=querystring2)
    print(response2.json())

getFromAPI()