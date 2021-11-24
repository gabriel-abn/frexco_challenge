from django.db import models

class User(models.Model):
    login = models.CharField(max_length=50, primary_key=True, unique=True, null=False)
    password = models.CharField(max_length=26, null=False)
    birthDate = models.DateField()

    def __str__(self):
        return self.login
