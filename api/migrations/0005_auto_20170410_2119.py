# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_question'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='answer',
            field=models.NullBooleanField(),
        ),
        migrations.AlterField(
            model_name='question',
            name='game',
            field=models.ForeignKey(editable=False, to='api.Game'),
        ),
        migrations.AlterField(
            model_name='question',
            name='note',
            field=models.CharField(max_length=160, null=True),
        ),
        migrations.AlterField(
            model_name='question',
            name='question',
            field=models.CharField(max_length=160, editable=False),
        ),
    ]
