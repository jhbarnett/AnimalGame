# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0007_auto_20170415_2322'),
    ]

    operations = [
        migrations.AddField(
            model_name='game',
            name='count',
            field=models.IntegerField(default=21),
        ),
        migrations.AddField(
            model_name='game',
            name='turn',
            field=models.ForeignKey(default=1, related_name='turn', to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
