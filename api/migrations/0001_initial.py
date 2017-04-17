# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings
import uuid


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, serialize=False)),
                ('animal', models.CharField(max_length=50)),
                ('count', models.IntegerField(default=21)),
                ('complete', models.BooleanField(default=False)),
                ('player1', models.ForeignKey(related_name='player1', to=settings.AUTH_USER_MODEL)),
                ('player2', models.ForeignKey(related_name='player2', to=settings.AUTH_USER_MODEL)),
                ('turn', models.ForeignKey(blank=True, null=True, default=1, related_name='turn', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('question', models.CharField(max_length=160)),
                ('answer', models.NullBooleanField()),
                ('note', models.CharField(max_length=160, null=True)),
                ('game', models.ForeignKey(to='api.Game')),
            ],
        ),
    ]
