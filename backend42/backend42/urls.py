from django.conf.urls import url, include
from django.contrib import admin
from django.contrib.auth import views
from django.views.generic.base import RedirectView
from django.contrib.staticfiles.storage import staticfiles_storage

from blog.views import home, user_profile, follow, post_sign_up,my_login
from django.views.decorators.csrf import csrf_exempt


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^login/$', csrf_exempt(my_login), name='login'),
    url(r'^old_login/$', views.login, name='login'),
    url(r'^signup/$', post_sign_up, name='signup'),
    url(r'^logout/$', views.logout, name='logout'),
    url(r'^auth/', include('social_django.urls', namespace='social')),
    # <- Here
    url(r'^home/', home, name='home'),
    url(r'^$', RedirectView.as_view(url='home/')),
    url(r'^blog/', include('blog.urls', namespace='blog')),
    url(r'^user/(?P<username>.+)', user_profile, name='user_profile'),
    url(r'^follow/(?P<username>.+)/$', follow, name='follow')

]
