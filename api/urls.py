from django.conf.urls import url

from . import views

urlpatterns = [
  # POST Games Endpoint
  url(r'^games$', views.GameCreate.as_view()),
  # GET Games Endpoint
  url(r'^games/(?P<user>[0-9a-f-]+)$', views.GameList.as_view()),
	# GET Game Endpoint
	url(r'^game/(?P<pk>[0-9a-f-]+)$', views.GameInstance.as_view()),
  # GET/POST Question Endpoint
	url(r'^game/(?P<game_id>[0-9a-f-]+)/questions$', views.QuestionList.as_view()),
  # GET/PUT Question Endpoint
	url(r'^question/(?P<pk>[0-9a-f-]+)$', views.QuestionInstance.as_view()),
  #Login/Create User Endpoint
	url(r'^user$', views.UserCreate.as_view(), name='account-create'),
  # GET Users Endpoint
  url(r'^users$', views.UserList.as_view()),

]
