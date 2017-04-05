from django.conf.urls import url

from . import views

urlpatterns = [
	# GET/POST Games Endpoint
  url(r'^games$', views.GameList.as_view()),
]
