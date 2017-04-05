from django.conf.urls import url

from . import views

urlpatterns = [
	# GET Games
  url(r'^games$', views.GameList.as_view()),
  # POST Game
  # url(r'^new$', views.GameList.addGame()),
]
