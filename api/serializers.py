from rest_framework import serializers

from .models import Game
from .models import Question

class GameSerializer(serializers.ModelSerializer):

	class Meta:
		model = Game
		fields = ('id', 'animal','player1','player2')

class QuestionSerializer(serializers.ModelSerializer):

	class Meta:
		model = Question
		fields = ('id', 'game','question','answer', 'note')