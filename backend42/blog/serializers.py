from rest_framework import serializers

from .models import Profile, Post, Like, Follow


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = '_all_'


class PostSerializer(serializers.ModelSerializer):
    author = serializers.CharField(source='author.username', read_only=True)
    id = id

    lik = serializers.SerializerMethodField('get_likey')

    def get_likey(self, id):
        likey = Like.objects.filter(post=id)
        print(likey)

        like_list = []

        for indi_like in likey:
            like_list.append(indi_like.profile.user.username)

        return [like_list, len(like_list)]

    class Meta:
        model = Post
        fields = (
            'id', 'is_forked', 'origin_id', 'is_published', 'title', 'slug',
            'content', 'author', 'created', 'lik')


class FollowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Follow
        fields = ('follower', 'following', 'since')


class ProfileSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.username', read_only='True')
    post = PostSerializer(many=True)

    class Meta:
        model = Profile
        fields = (
            'id', 'user', 'bio', 'location', 'birth_date', 'post',
            'following', 'followers')


class TimelineSerializer(serializers.Serializer):
    profile = ProfileSerializer(many=True)
    posts = PostSerializer(many=True)