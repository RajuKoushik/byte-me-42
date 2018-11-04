from django.forms import ModelForm

from blog.models import Post


class PostForm(ModelForm):

    class Meta:
        model = Post
        fields = ('title', 'content', 'is_published')


class ForkPostForm(ModelForm):

    class Meta:
        model = Post
        fields = ('content', 'is_published')
