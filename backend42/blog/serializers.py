from rest_framework import serializers

from .models import Profile, Post, Like, Follow


class ProfileSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.username', read_only='True')

    class Meta:
        model = Profile
        fields = ('id', 'user', 'bio', 'location', 'birthdate')


class PostSerializer(serializers.ModelSerializer):
    author = serializers.CharField(source='author.username', read_only=True)

    class Meta:
        model = Post
        fields = (
            'id', 'is_forked', 'origin_id', 'is_published', 'title', 'slug',
            'content', 'author', 'created')
