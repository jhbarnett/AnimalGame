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

class GameInstance(generics.RetrieveAPIView):
	"""
	API endpoint for retrieving single Game objects
	"""
	serializer_class = GameSerializer
	def get_queryset(self):
		id = self.kwargs['pk']
		print(Game.objects.filter(pk=id))
		return Game.objects.filter(pk=id)

class QuestionList(generics.ListCreateAPIView):
	"""
	API endpoint for listing and creating Question objects
	"""
	serializer_class = QuestionSerializer
	def get_queryset(self):
		game = self.kwargs['game']
		print(Question.objects.get_or_create(game=game))
		return Question.objects.get_or_create(game=game)

# class QuestionInstance(generics.RetrieveUpdateAPIView):
# 	"""
# 	API endpoint for retrieving and updating single Question objects
# 	"""
# 	serializer_class = QuestionSerializer
# 	def get_queryset(self):
# 		id = self.kwargs['game']
# 		return Question.objects.get_or_update(game=id)	