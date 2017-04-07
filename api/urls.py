from django.conf.urls import url

from . import views

urlpatterns = [
	# GET/POST Games Endpoint
	url(r'^games$', views.GameList.as_view()),
	# GET Game Endpoint
	url(r'^game/(?P<pk>[0-9a-f-]+)$', views.GameInstance.as_view()),
  # GET/POST Questions Endpoint
  url(r'^game/(?P<game>[0-9a-f-]+)/question$', views.QuestionList.as_view()),
  # GET/PUT Question Endpoint
  # url(r'^game/(?P<game>[0-9a-f-]+)/answer$')
]
