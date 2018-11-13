from django.conf.urls import url
from django.views.generic.base import RedirectView
from blog import views
from django.views.decorators.csrf import csrf_exempt

app_name = 'blog'

favicon_view = RedirectView.as_view(url='/static/favicon.ico', permanent=True)

urlpatterns = [
    url(r'^favicon\.ico$', favicon_view),
    url(r'^test/$', views.homeRest, name='rest'),
    url(r'^testSerializer/$', views.homeSerializer.as_view()),

    url(r'^testSerializer/$', views.homeSerializer.as_view()),

    url(r'^(?P<post_id>.+)/like/(?P<username>.+)/$', views.like, name='like'),
    url(r'^post/(?P<post_id>.+)/$', views.Post_view.as_view(),
        name='post_view'),
    url(r'^create/post/$', views.create_post, name='create_post'),
    url(r'^create/newpost/$', csrf_exempt(views.new_post_create), name='create_post'),
    url(r'^edit/post/(?P<post_id>.+)/$', views.post_edit, name='post_edit'),
    url(r'^fork/post/(?P<post_id>.+)/$', views.fork, name='fork'),
    url(r'^delete/post/(?P<post_id>.+)/$', views.post_delete,
        name='post_delete'),
    url(r'^all_post/$', views.AllPost.as_view()),
    url(r'^user/(?P<username>.+)', views.ProfileREST.as_view(),
        name='user_profile'),

]
