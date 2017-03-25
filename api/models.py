from django.db import models

class Game(models.Model):
	animal = models.CharField(max_length=50)
	player1 = models.CharField(max_length=50)
	player2 = models.CharField(max_length=50)
