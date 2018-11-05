"""backend42 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from django.contrib.auth import views
from django.views.generic.base import RedirectView
from django.contrib.staticfiles.storage import staticfiles_storage

from blog.views import home, user_profile, follow

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^login/$', views.login, name='login'),
    url(r'^logout/$', views.logout, name='logout'),
    url(r'^auth/', include('social_django.urls', namespace='social')),
    # <- Here
    url(r'^home/', home, name='home'),
    url(r'^$', RedirectView.as_view(url='home/')),
    url(r'^blog/', include('blog.urls', namespace='blog')),
    url(r'^user/(?P<username>.+)', user_profile, name='user_profile'),
    url(r'^follow/(?P<username>.+)/$', follow, name='follow'),

]
