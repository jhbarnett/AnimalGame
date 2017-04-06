# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20170325_1919'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='id',
            field=models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, serialize=False),
        ),
    ]
