from rest_framework import generics
  
from .models import Game
from .serializers import GameSerializer
  
class GameList(generics.ListCreateAPIView):
	"""
	API endpoint for listing and creating Game objects
	"""
	queryset = Game.objects.all()
	serializer_class = GameSerializer
	print('hit')