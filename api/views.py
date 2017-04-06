from rest_framework import generics
  
from .models import Game
from .serializers import GameSerializer
  
class GameList(generics.ListCreateAPIView):
	"""
	API endpoint for listing and creating Game objects
	"""
	queryset = Game.objects.all()
	serializer_class = GameSerializer

class GameInstance(generics.RetrieveAPIView):
	"""
	API endpoint for listing and creating Game objects
	"""
	serializer_class = GameSerializer
	def get_queryset(self):
		id = self.kwargs['pk']
		print(Game.objects.filter(pk=id))
		return Game.objects.filter(pk=id)