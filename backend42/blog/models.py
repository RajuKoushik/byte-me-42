# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import uuid

from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.urls import reverse


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(max_length=500, blank=True)
    location = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)

    class Meta:
        ordering = ('user',)
        verbose_name = 'Profile'
        verbose_name_plural = 'Profiles'

    def __str__(self):
        return self.user.first_name

    def follow(self, username):
        user = User.objects.get(username=username)
        profile_to_follow = user.profile
        new_follow, created = Follow.objects.get_or_create(
            follower=self, following=profile_to_follow)

    def get_followers(self):
        return Follow.objects.filter(following=self)

    def get_following(self):
        return Follow.objects.filter(follower=self)

    def get_likes(self):
        return Like.objects.filter(profile=self)

    def get_fullname(self):
        full_name = '%s %s' % (self.user.first_name, self.user.last_name)
        return full_name.strip()


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()


class Post(models.Model):
    id = models.CharField(unique=True, default=uuid.uuid4,
                          editable=False, max_length=50, primary_key=True)
    is_forked = models.BooleanField(default=False)
    origin_id = models.CharField(blank=True, null=True, max_length=50)
    is_draft = models.BooleanField(default=True)
    is_published = models.BooleanField(default=False)
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True)
    content = models.TextField(max_length=420)
    seo_title = models.CharField(max_length=200)
    seo_description = models.CharField(max_length=200)
    author = models.ForeignKey(
        Profile, related_name='post', on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now=True)
    is_daddu = models.BooleanField(blank=True, default=True)

    class Meta:
        ordering = ('created',)
        verbose_name = 'Post'
        verbose_name_plural = 'Posts'

    def like(self, username):
        user = User.objects.get(username=username)
        profile = Profile.objects.get(user=user)
        new_like, created = Like.objects.get_or_create(
            profile=profile, post_id=self.id)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('blog:post_view', kwargs={'post_id': self.id})


class Like(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('created',)
        verbose_name = 'Like'
        verbose_name_plural = 'Likes'

    def __str__(self):
        return self.profile.user.username


class Follow(models.Model):
    follower = models.ForeignKey(
        Profile, on_delete=models.CASCADE, related_name='follower')
    following = models.ForeignKey(
        Profile, on_delete=models.CASCADE, related_name='following')
    since = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('since',)
        verbose_name = 'Follow'
        verbose_name_plural = 'Follows'

    def __str__(self):
        return self.following.user.username
