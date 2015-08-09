# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Attendee',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('reception_attending', models.BooleanField(default=True)),
                ('wedding_attending', models.BooleanField(default=True)),
                ('message', models.CharField(max_length=500, blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('short_hash', models.CharField(unique=True, max_length=8)),
                ('name', models.CharField(max_length=40)),
                ('description', models.CharField(max_length=1000)),
                ('dp_url', models.CharField(max_length=128, blank=True)),
            ],
        ),
    ]
