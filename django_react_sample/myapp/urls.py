from django.conf.urls import url
from myapp.views import post_comment, load_comments, index

urlpatterns = [
    url(r'^post-comment/$', post_comment),
    url(r'^load-comments/$', load_comments),
    url(r'^$', index)]
