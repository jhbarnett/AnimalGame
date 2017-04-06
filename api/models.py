import uuid
from django.db import models

class Game(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	animal = models.CharField(max_length=50)
	player1 = models.CharField(max_length=50)
	player2 = models.CharField(max_length=50)