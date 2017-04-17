# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_auto_20170417_0007'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='turn',
            field=models.ForeignKey(blank=True, null=True, related_name='turn', to=settings.AUTH_USER_MODEL),
        ),
    ]
