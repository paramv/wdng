from uuid import uuid4
from django.db import models



class User(models.Model):

    # uid = models.CharField(primary_key=True, max_length=40)
    short_hash = models.CharField(max_length=8,unique=True)
    name = models.CharField(max_length=40,blank=False)
    description = models.CharField(max_length=1000,blank=False)
    dp_url=models.CharField(max_length=128,blank=True)


    def save(self, *args, **kwargs):
      if not self.short_hash:
        self.short_hash = uuid4().hex[:8]

      super(models.Model, self).save(*args, **kwargs)

class Attendee(models.Model):
	reception_attending=models.BooleanField(default=True)
	wedding_attending=models.BooleanField(default=True)
	message=models.CharField(max_length=500,blank=True)
	name = models.CharField(max_length=40,blank=False,default='')


