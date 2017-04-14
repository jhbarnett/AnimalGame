from rest_framework import generics
  
from .models import Game
from .models import Question
from .serializers import GameSerializer
from .serializers import QuestionSerializer
  
class GameListCreate(generics.ListCreateAPIView):
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

class QuestionList(generics.ListAPIView):
	"""
	API endpoint for listing Question objects
	"""
	serializer_class = QuestionSerializer
	def get_queryset(self):
		game = self.kwargs['game_id']
		return Question.objects.filter(game=game)

class QuestionCreate(generics.CreateAPIView):
	"""
	API endpoint for creating Question objects
	"""
	queryset = Question.objects.all()
	serializer_class = QuestionSerializer
	

class QuestionRetrieveUpdate(generics.RetrieveUpdateAPIView):
	"""
	API endpoint for retrieving and updating single Question objects
	"""
	serializer_class = QuestionSerializer
	def get_queryset(self):
		game = self.kwargs['game_id']
		return Question.objects.get_or_update(game=id)	