# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20170410_2119'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='game',
            field=models.ForeignKey(to='api.Game'),
        ),
        migrations.AlterField(
            model_name='question',
            name='question',
            field=models.CharField(max_length=160),
        ),
    ]
