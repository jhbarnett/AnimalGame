from rest_framework import generics

from .models import Game
from .models import Question
from .serializers import GameSerializer
from .serializers import QuestionSerializer

  
class GameList(generics.ListCreateAPIView):
	"""
	API endpoint for listing and creating Game objects
	"""
	queryset = Game.objects.all()
	serializer_class = GameSerializer

class GameRetrieve(generics.RetrieveAPIView):
	"""
	API endpoint for retrieving single Game objects
	"""
	serializer_class = GameSerializer
	def get_queryset(self):
		id = self.kwargs['pk']
		return Game.objects.filter(pk=id)

class QuestionList(generics.ListCreateAPIView):
	"""
	API endpoint for creating Question objects
	"""
	serializer_class = QuestionSerializer

	def get_queryset(self):
		id = self.kwargs['game_id']
		return Question.objects.filter(game=id)

class QuestionInstance(generics.RetrieveUpdateAPIView):
	"""
	API endpoint for retrieving and updating single Question objects
	"""
	serializer_class = QuestionSerializer
	def get_queryset(self):
		id = self.kwargs['pk']
		return Question.objects.filter(pk=id)


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token


class UserCreate(APIView):
	""" 
	Creates the user. 
	"""
	def post(self, request, format='json'):
		serializer = UserSerializer(data=request.data)
		if serializer.is_valid():
			user = serializer.save()
			if user:
				token = Token.objects.create(user=user)
				json = serializer.data
				json['token'] = token.key
				return Response(json, status=status.HTTP_201_CREATED)
		
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)				