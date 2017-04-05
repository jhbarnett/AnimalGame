from django.db import models

class Game(models.Model):
	animal = models.CharField(max_length=50)
	player1 = models.CharField(max_length=50)
	player2 = models.CharField(max_length=50)

	@classmethod
	def create(cls, animal, player1, player2):
		game = cls(animal=animal, player1=player1, player2=player2)
		return game
