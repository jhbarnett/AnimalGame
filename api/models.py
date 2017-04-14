import uuid
from django.db import models

class Game(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	animal = models.CharField(max_length=50)
	# TODO: foreign keys to Player ID
	player1 = models.CharField(max_length=50)
	player2 = models.CharField(max_length=50)

# class Player(models.Model):
# 	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
# 	name = models.CharField(max_length=50)
# 	wins = models.IntegerField(default=0, editable=True)
# 	losses = models.IntegerField(default=0, editable=True)

class Question(models.Model):
	game = models.ForeignKey(Game, on_delete=models.CASCADE)
	question = models.CharField(max_length=160)
	answer = models.NullBooleanField(null=True)
	note = models.CharField(max_length=160, null=True)