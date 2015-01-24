from django.contrib import admin
from .models import Comment


class CommentAdmin(admin.ModelAdmin):
    list_display = ('id', 'text')

    class Meta(object):
        pass


admin.site.register(Comment, CommentAdmin)
