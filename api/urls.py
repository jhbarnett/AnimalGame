from django.conf.urls import url

from . import views

urlpatterns = [
	# GET/POST Games Endpoint
	url(r'^games$', views.GameList.as_view()),
	# GET Game Endpoint
	url(r'^game/(?P<pk>[0-9a-f-]+)$', views.GameRetrieve.as_view()),
  # GET/POST Question Endpoint
  url(r'^game/(?P<game_id>[0-9a-f-]+)/questions$', views.QuestionList.as_view()),
  # GET/PUT Question Endpoint
  url(r'^game/(?P<game_id>[0-9a-f-]+)/update$', views.QuestionList.as_view()),
]
