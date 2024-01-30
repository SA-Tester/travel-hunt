from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .models import Trip
from .models import Traveller
from .serializers import UserSerializer
from .serializers import TravellerSerializer
from .serializers import TripSerializer
from .functions import getTrips
import copy
import json
import ast


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
            recieved_data = request.POST.copy()
            recieved_data.pop('password1')
            recieved_data.pop('password2')

            # Make data required for the User and Traveller tables
            # copy module is used to prevent making references to the original value
            user_data = copy.copy(recieved_data)
            traveller_data = copy.copy(recieved_data)

            # Remove unnecessary fields
            user_data.pop('firstname')
            user_data.pop('lastname')
            user_data.pop('mobile')

            # Remove unnecessary fields
            traveller_data.pop('email')

            # Create the new user id
            userCount = User.objects.values_list("id").count()
            id = "U" + str(100000 + userCount + 1)

            # Update the data with id and password
            user_data.update({'id': id})
            user_data.update({'password': password1})
            user_data.update({'role': "general"})
            traveller_data.update({'user': id})

            userSerializer = UserSerializer(data=user_data)
            userSerializer.is_valid(raise_exception=True)
            userSerializer.save()

            travellerSerializer = TravellerSerializer(data=traveller_data)
            travellerSerializer.is_valid(raise_exception=True)
            travellerSerializer.save()

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


@api_view(["POST"])
def save_trip(request):
    data = json.loads(request.body)
    users = User.objects.filter(email=request.user).values('id')

    try:
        for user in users:
            user_id = user["id"]
            name = data["tripname"]
            start = data["stratdate"]
            end = data["enddate"]
            is_complete = 0
            locations = "[]"

            finalData = {
                'user': user_id,
                'name': name,
                'start': start,
                'end': end,
                'is_complete': is_complete,
                'locations': locations
            }
            tripSerializer = TripSerializer(data=finalData)
            tripSerializer.is_valid(raise_exception=True)
            tripSerializer.save()

            return Response({"error": "OK", "last_location": data["last_location"]})

    except Exception as e:
        return Response({"error": "FAILED"})


@api_view(['POST'])
def get_previous_trips(request):
    # print(request.user)
    users = User.objects.filter(email=request.user).values('id')
    trips = []

    for user in users:
        print(user["id"])
        previousTrips = Trip.objects.filter(
            user_id=user["id"]).values('id', 'name')
        for trip in previousTrips:
            trips.append(trip)
        # print(user["id"], trips)

        if(len(trips) > 0):
            return Response(trips)

        return Response({"error": "Not Found"})
    return Response({"error": "Unauthorized"})


@api_view(["POST"])
def save_to_trip(request):
    try:
        trips = Trip.objects.filter(id=request.POST.get("trip_name")).all()

        for trip in trips:
            print(trip.name)
            arr = ast.literal_eval(trip.locations)
            arr.append(request.POST.get("location"))
            trip.locations = arr

            trip.save()
            return Response({"msg": "ok"})

        return Response({"msg": "error"})

    except Exception as e:
        print(e)
        return Response({"msg": "error"})


@api_view(["POST"])
def get_user_detials(request):
    ### COMMENT THIS LINE AND UMCOMMENT THE ONE AFTER
    email = "test@gmail.com"
    # email = request.user;
    # print(email)

    user = User.objects.filter(email=email).values('id', 'email')
    #print(user[0]["id"])

    travellers = Traveller.objects.filter(user_id=user[0]["id"])
    for traveller in travellers:
        trips = Trip.objects.filter(user_id=traveller.user.id).values()
        # print(getTrips(trips))

        data = {
            'email': user[0]['email'],
            'user_id': traveller.user.id,
            'firstname': traveller.firstname,
            'lastname': traveller.lastname,
            'mobile': traveller.mobile,
            'trips': getTrips(trips)
        }
        #print(data)

        return Response({'data': data})

    return Response({'error': "Not Found"})


@api_view(["POST"])
def delete_trip(request):
    trip = Trip.objects.filter(id=request.POST.get("trip_id")).all()
    # print(request.POST.get("trip_id"))
    
    try:
        # print(trip)
        trip.delete()
        return Response({"msg": "success"})

    except Exception as e:
        print(e)
        return Response({"msg": "An error occured"})