from django.conf.urls import url
from userManager import views

urlpatterns = [
    url(r'api/users/', views.users_list),
    url(r'api/users/(?P<pk>[0-9]+)', views.users_return)
]