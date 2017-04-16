# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20170414_1930'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='player1',
            field=models.ForeignKey(related_name='player1', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='game',
            name='player2',
            field=models.ForeignKey(related_name='player2', to=settings.AUTH_USER_MODEL),
        ),
    ]
