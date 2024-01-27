from .models import Location


def placesInCity(city_id):
    data = []
    places = Location.objects.select_related('city').filter(city_id=city_id)

    for place in places:
        element = {
            'location_id': place.id,
            'location_name': place.name,
            'location_category': place.category,
            'location_desc': place.description,
            'image': place.image1
        }

        data.append(element)

    return data


def hotelsInCity(city_id):

    return
