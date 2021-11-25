from django.contrib import admin
from .models import User

class UserAdmin(admin.ModelAdmin):
    labels = ['id','login', 'passoword', 'birthDate']

admin.site.register(User, UserAdmin)