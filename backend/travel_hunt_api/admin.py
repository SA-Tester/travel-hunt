from django.contrib import admin
from .models import Country
from .models import City
from .models import Location
from .models import User
from .models import Hotel
from .models import Trip

# Register your models here.
admin.site.register(Country)
admin.site.register(City)
admin.site.register(Location)
admin.site.register(User)
admin.site.register(Hotel)
admin.site.register(Trip)
