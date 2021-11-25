from django.conf.urls import url
from django.urls import path, re_path
from userManager import views

urlpatterns = [
    path('api/users/', views.users_list),
    re_path(r'^api/users/(?P<pk>[0-9]+)$', views.users_return)
]

# (?P<pk>[0-9]+)