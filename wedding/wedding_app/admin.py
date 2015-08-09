from django.contrib import admin

# Register your models here.
from .models import User,Attendee

admin.site.register(User)
admin.site.register(Attendee)