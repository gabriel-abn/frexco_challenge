# Generated by Django 3.2.9 on 2021-11-24 15:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userManager', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='birthDate',
            field=models.CharField(max_length=30),
        ),
    ]