from django.conf.urls import url

from . import views

urlpatterns = [
	# GET/POST Games Endpoint
	url(r'^games$', views.GameListCreate.as_view()),
	# GET Game Endpoint
	url(r'^game/(?P<pk>[0-9a-f-]+)$', views.GameRetrieve.as_view()),
  # GET Questions Endpoint
  url(r'^game/(?P<game_id>[0-9a-f-]+)/listQ$', views.QuestionList.as_view()),
  # POST Question Endpoint
  url(r'^game/(?P<game_id>[0-9a-f-]+)/createQ$', views.QuestionCreate.as_view()),
  # GET/PUT Question Endpoint
  # url(r'^game/(?P<game>[0-9a-f-]+)/answer$')
]
