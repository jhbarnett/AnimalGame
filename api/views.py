from rest_framework import generics
from django.db.models import Q
from .models import Game
from .models import Question
from .serializers import GameSerializer
from .serializers import QuestionSerializer
  
class GameList(generics.ListAPIView):
	"""
	API endpoint for listing Game objects
	"""
	serializer_class = GameSerializer
	def get_queryset(self):
		user = self.kwargs['user']
		return Game.objects.filter(Q(player1=user) | Q(player2=user))

class GameCreate(generics.CreateAPIView):
	"""
	API endpoint for creating Game objects
	"""
	queryset = Game.objects.all()
	serializer_class = GameSerializer


class GameInstance(generics.RetrieveUpdateAPIView):
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
from django.contrib.auth import authenticate, login

class UserCreate(APIView):
	""" 
	Creates the user. 
	"""
	def post(self, request):
		user = authenticate(username=request.data['username'], password=request.data['password'])
		if user is not None:
			login(request, user)
			serializer = UserSerializer(user)
			json = serializer.data
			return Response(json, status=status.HTTP_200_OK)
		else:	
			serializer = UserSerializer(data=request.data)
			if serializer.is_valid():
				newUser = serializer.save()
				json = serializer.data
				return Response(json, status=status.HTTP_201_CREATED)
			
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserList(generics.ListAPIView):
	"""
	API endpoint for listing User objects
	"""
	queryset = User.objects.all()
	serializer_class = UserSerializer