from rest_framework import serializers

from .models import Game

class GameSerializer(serializers.ModelSerializer):

	class Meta:
		model = Game
		fields = ('animal','player1','player2')