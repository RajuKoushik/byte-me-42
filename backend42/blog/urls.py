from django.conf.urls import url
from django.views.generic.base import RedirectView
from blog import views
from django.urls import path

app_name = 'blog'

favicon_view = RedirectView.as_view(url='/static/favicon.ico', permanent=True)

urlpatterns = [
    url(r'^favicon\.ico$', favicon_view),
    url(r'^(?P<post_id>.+)/like/(?P<username>.+)/$', views.like, name='like'),
    url(r'^post/(?P<post_id>.+)/$', views.post_view, name='post_view'),
    url(r'^create/post/$', views.create_post, name='create_post'),
    url(r'^edit/post/(?P<post_id>.+)/$', views.post_edit, name='post_edit'),
    url(r'^fork/post/(?P<post_id>.+)/$', views.fork, name='fork'),
    url(r'^delete/post/(?P<post_id>.+)/$', views.post_delete, name='post_delete'),
    path('blog/allpost', views.AllPost.as_view()),
]
