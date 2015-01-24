from django.db import models


class Comment(models.Model):
    text = models.TextField()
