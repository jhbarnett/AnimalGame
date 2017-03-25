# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('animal', models.CharField(max_length=50)),
                ('player1', models.CharField(max_length=50)),
                ('player2', models.CharField(max_length=50)),
            ],
        ),
        migrations.DeleteModel(
            name='Book',
        ),
    ]
