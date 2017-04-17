import uuid
from django.db import models
from django.contrib.auth.models import User

SUPER_USER=1
class Game(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	animal = models.CharField(max_length=50)
	player1 = models.ForeignKey(User, related_name="player1")
	player2 = models.ForeignKey(User, related_name="player2")
	turn = models.ForeignKey(User, related_name="turn", null=True, blank=True, default=SUPER_USER)
	count = models.IntegerField(default=21)
	complete = models.BooleanField(default=False)

class Question(models.Model):
	game = models.ForeignKey(Game, on_delete=models.CASCADE)
	question = models.CharField(max_length=160)
	answer = models.NullBooleanField(null=True)
	note = models.CharField(max_length=160, null=True)