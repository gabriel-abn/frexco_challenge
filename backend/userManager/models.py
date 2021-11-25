from django.db import models

class User(models.Model):
    login = models.CharField(max_length=50, null=False)
    password = models.CharField(max_length=26, null=False)
    birthDate = models.CharField(max_length=30, null=False)

    def __str__(self):
        return self.login
