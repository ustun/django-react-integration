from django.conf.urls import include, url
from django.contrib import admin
from django.conf import settings
from django.contrib.staticfiles.views import serve
from myapp import urls


urlpatterns = [
    # Examples:
    # url(r'^$', 'django_react_sample.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include(urls)),
]


if settings.DEBUG:
    urlpatterns.append(url(r'^static/(?P<path>.*)$', serve))
