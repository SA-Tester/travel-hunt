from rest_framework import serializers
from .models import User
from .models import Country
from .models import City


# The Serializer user for Signup functionality
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'firstname', 'lastname', 'email', 'password']
        extra_kwargs = {
            'password': {
                'write_only': True
            }
        }

    # Encrypt the Password on saving the new user to the database
    def create(self, validated_data):
        # Extract the 'password' field from the validated_data dictionary
        password = validated_data.pop('password', None)

        # Create an instance from the newly validated data
        instance = self.Meta.model(**validated_data)

        # if password is not equal to null encrypt the password and save in the instance
        if password is not None:
            instance.set_password(password)

        # Save the instance to the database
        instance.save()

        # return the instance
        return instance


class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = '__all__'


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'