# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_auto_20170416_2126'),
    ]

    operations = [
        migrations.AddField(
            model_name='game',
            name='complete',
            field=models.BooleanField(default=False),
        ),
    ]
