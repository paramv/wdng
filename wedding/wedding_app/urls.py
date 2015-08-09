from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^attend/$', views.attend, name='attend'),
]