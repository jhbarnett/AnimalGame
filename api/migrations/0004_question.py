# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20170406_1845'),
    ]

    operations = [
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('question', models.CharField(max_length=160)),
                ('answer', models.BooleanField()),
                ('note', models.CharField(max_length=160)),
                ('game', models.ForeignKey(to='api.Game')),
            ],
        ),
    ]
