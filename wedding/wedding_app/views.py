# from django.shortcuts import render
from django.http import HttpResponse
from .models import Attendee
# Create your views here.
def attend(request):
    a = Attendee()
    post_data = request.POST
    a.name = post_data['name']
    a.message = post_data['message']
    a.wedding_attending = post_data['weddingStatus'] == 'accept'
    a.reception_attending = post_data['receptionStatus'] == 'accept'
    a.save()
    return HttpResponse("OK")