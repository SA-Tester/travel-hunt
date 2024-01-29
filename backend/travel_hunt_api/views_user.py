from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializers import UserSerializer
from .serializers import TravellerSerializer
from .serializers import TripSerializer
import copy
import json


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
    print(request.user)

    users = User.objects.filter(email=request.user).values('id')

    try:
        for user in users:
            print(user['id'])

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
            print(finalData)
            tripSerializer = TripSerializer(data=finalData)
            tripSerializer.is_valid(raise_exception=True)
            tripSerializer.save()

            return Response({"error": "OK", "last_location": data["last_location"]})
        
    except Exception as e:
        return Response({"error": "FAILED"})
