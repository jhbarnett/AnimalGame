from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User
from .models import Game
from .models import Question

class GameSerializer(serializers.ModelSerializer):
	player1 = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
	player2 = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
	turn = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
	
	class Meta:
		model = Game
		fields = ('id', 'animal','player1','player2', 'turn', 'count', 'complete')

class QuestionSerializer(serializers.ModelSerializer):
	game = serializers.PrimaryKeyRelatedField(queryset=Game.objects.all())
	note = serializers.CharField(allow_blank=True, allow_null=True)

	class Meta:
		model = Question
		fields = ('id', 'game','question','answer', 'note')

class UserSerializer(serializers.ModelSerializer):
	username = serializers.CharField(max_length=32, validators=[UniqueValidator(queryset=User.objects.all())])

	password = serializers.CharField(min_length=4, write_only=True)

	class Meta:
		model = User
		fields = ('id', 'username', 'password') #removed email
