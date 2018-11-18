from django.http import JsonResponse
from django.shortcuts import render, redirect, get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.forms.widgets import HiddenInput
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from rest_framework import generics, status, permissions
from rest_framework.exceptions import ValidationError
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from django.db import transaction
from django.core import serializers

from rest_framework.views import APIView

from blog.forms import PostForm, ForkPostForm
from .models import Post, Like, Profile, Follow
from .serializers import PostSerializer, ProfileSerializer, TimelineSerializer
from rest_framework import generics, status, permissions
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from collections import namedtuple
from rest_framework import generics
from random import randint

from django.contrib.auth import authenticate, login

import django

from rest_framework.decorators import api_view, permission_classes

import json
from rest_framework.permissions import AllowAny
from . import models
from django.views.decorators.http import require_http_methods



@permission_classes([AllowAny])
@csrf_exempt
@api_view(['POST'])
def my_login(request):
    username = request.data['username']
    password = request.data['password']
    user = authenticate(request, username=username, password=password)
    print(User.objects.get(username=username).id)

    user_id = User.objects.get(username=username).id

    if user is not None:
        login(request, user)

        profile = Profile.objects.get(user=User.objects.get(username=username))
        print(profile)
        all_followers = profile.get_following().values('following')
        print(all_followers)
        # get_following = all_followers.following_id
        # print(get_following)
        all_post = Post.objects.filter(author__in=all_followers)
        print(all_post.count)
        if all_post.count() > 5:
            serializer = PostSerializer(all_post, many=True)
            print(serializer.data)
            return Response({'posts': serializer.data, "user_id": user_id, "username": username})
        else:
            all_posts = Post.objects.all()
            serializer = PostSerializer(all_posts, many=True)
            return Response({'posts': serializer.data, "user_id": user_id, "username": username})

    else:
        print("Invalid login")
        login(request, user)
        return HttpResponse(
            json.dumps(
                {
                    'message': 'not Successfull login'
                }
            )
        )


@api_view(['POST'])
@permission_classes([AllowAny])
@csrf_exempt
def post_sign_up(request):
    with transaction.atomic():
        user = User.objects.create_user(
            username=request.data['username'],
            password=request.data['password1'],
            email=request.data['email']
        )
        # user.save()
        user.first_name = request.data['first_name']
        user.last_name = request.data['last_name']
        user.save()

        print(User.objects.get(username=request.data['username']).id)

        user_id = User.objects.get(username=request.data['username']).id

        # get_user = User.objects.get(username=request.data['username'])
        #
        # user_profile = Profile.objects.get(user=get_user)
        # user_profile.follow(user_profile)

        # update

        # hh

    return HttpResponse(
        json.dumps(
            {
                'message': 'User has been signed up.',
                'user_id': user_id
            }
        )
    )


@require_http_methods(["POST"])
@api_view(['POST'])
@permission_classes([AllowAny])
@csrf_exempt
def new_post_create(request):
    if request.method == 'POST':
        posty = models.Post()
        user_id = request.data['user_id']
        u = User.objects.get(id=user_id)
        posty.author = Profile.objects.get(user=u)
        posty.content = request.data['content']
        posty.title = request.data['title']
        posty.is_published = True
        posty.slug = posty.id
        posty.seo_description = request.data['content']
        posty.seo_title = request.data['title']
        posty.save()

        return HttpResponse(
            json.dumps(
                {
                    'message': 'New Post has been created'
                }
            )
        )
    return HttpResponse(
        json.dumps(
            {
                'message': 'New Post has been created'
            }
        ))


def home(request):
    # all_posts = Post.objects.all()
    all_posts = Post.objects.filter(origin_id=None)
    template = 'home.html'
    context = {'all_posts': reversed(all_posts)}
    return render(request, template, context)


class AnonymousHomePosts(APIView):
    def get(self, request):
        print('xyz')
        all_posts = Post.objects.filter(origin_id=None)
        context = {'all_posts': reversed(all_posts)}
        return HttpResponse(
            json.dumps(
                {
                    'all_posts': all_posts
                }
            ))


# REST API
@csrf_exempt
def homeRest(request):
    user = User.objects.get(id=1)
    all_posts = Post.objects.all().first()
    print(all_posts)

    return HttpResponse(
        json.dumps(
            {
                'current_user': user.username,
                'post_name': all_posts.title,
                'post_content': all_posts.content,
                'csrf': django.middleware.csrf.get_token(request)

            }
        )
    )


# REST API

class homeSerializer(APIView):
    def get(self, request):
        all_posts = Post.objects.all()
        serializer = PostSerializer(all_posts, many=True)

        return Response(serializer.data)

    def post(self, request):
        pass


def user_profile(request, username):
    if User.objects.get(username=username):
        profile = Profile.objects.get(
            user=User.objects.get(username=username))
        current_user = User.objects.get(username=request.user.username)
        is_follower = False
        followers = profile.get_followers()
        for follower in followers:
            if current_user.username == follower.follower.user.username:
                is_follower = True
        posts = Post.objects.filter(author=profile)
        template = 'blog/user/profile.html'
        context = {'profile': profile,
                   'posts': posts,
                   'is_follower': is_follower}
        return render(request, template, context)
    else:
        return JsonResponse({'message': 'User not found'})


class ProfileREST(APIView):
    def get(self, request, username):
        print('request1', request)
        profile = Profile.objects.get(
            user=User.objects.get(username=username))
        serializer = ProfileSerializer(profile)
        print(serializer)
        return Response(serializer.data)


class AllPost(APIView):
    def get(self, request):
        print('xyz')

        profile = request.user.profile
        all_followers = profile.get_following().values('following')
        print(all_followers)
        # get_following = all_followers.following_id
        # print(get_following)
        all_post = Post.objects.filter(author__in=all_followers)
        print(all_post)
        serializer = PostSerializer(all_post, many=True)

        return Response(serializer.data)


class HomePosts(APIView):
    def get(self, request):
        print('xyz')
        # user_id = request.user_id
        user_id = request.GET.get('user_id')
        print(user_id)
        u = User.objects.get(id=user_id)
        profile = Profile.objects.get(user=u)
        print(profile)
        all_followers = profile.get_following().values('following')
        print(all_followers)
        # get_following = all_followers.following_id
        # print(get_following)
        all_post = Post.objects.filter(author__in=all_followers)
        print(all_post)
        serializer = PostSerializer(all_post, many=True)
        return Response(serializer.data)


@login_required
@api_view(['GET'])
def like(request, post_id, username):
    print('Came in method')
    if request.method == 'GET':
        if request.user.username == username:
            post = Post.objects.get(id=post_id)
            user = User.objects.get(username=username)
            profile = Profile.objects.get(user=user)
            if Like.objects.filter(profile=profile, post=post):
                liked_by_user = Like.objects.filter(profile=profile,
                                                    post=post)
                liked_by_user.delete()
                return Response({'PostId': post_id, 'status': False},
                                status=status.HTTP_200_OK
                                )
            else:
                post.like(username)
                return Response({'PostId': post_id, 'status': True},
                                status=status.HTTP_200_OK
                                )
        else:
            msg = "User: " + username + " invalid or currently not logged in"
            return Response(status=status.HTTP_403_FORBIDDEN)


@login_required
def follow(request, username):
    user = User.objects.get(username=username)
    follower = request.user.profile
    following = user.profile
    if request.user.username != username:
        if Follow.objects.filter(follower=follower, following=following):
            followed_by_user = Follow.objects.filter(follower=follower,
                                                     following=following)
            followed_by_user.delete()
        else:
            follower.follow(username)
        return JsonResponse({'message': 'success'})
    else:
        msg = 'Have you lost your path?'
        return JsonResponse({'message': msg})


post_view(request, post_id):
    threads = []
    likes = []
    if Post.objects.filter(id=post_id):
        all_leaf_posts = Post.objects.filter(
            title=Post.objects.get(id=post_id).title, is_daddu=True)
        # print(all_leaf_posts)
        for leaf_post in all_leaf_posts:
            thread = []
            like_count = leaf_post.like_set.count()
            thread.append(leaf_post)
            while leaf_post.origin_id:
                target_post = get_object_or_404(Post, id=leaf_post.origin_id)
                leaf_post = target_post
                # print(leaf_post)
                like_count += target_post.like_set.count()
                thread.append(target_post)

            threads.append(thread)
            likes.append(like_count)
        # print(threads, likes)
        thread_like = zip(threads, likes)

        print(thread_like)
        thread_like = list(sorted(thread_like, key=lambda t: t[1]))[::-1]
        print(thread_like)
        for i in range(len(thread_like)):
            threads[i] = thread_like[i][0]

        # posts = []
        target_post = Post.objects.get(id=post_id)
        profile = User.objects.get(username=target_post.author.user.username)
        # posts.append(target_post)
        # while target_post.origin_id:
        #     target_post = Post.objects.get(id=target_post.origin_id)
        #     posts.append(target_post)
        # thread = Post.objects.get(id=post_id)
        # print(threads)
        for i in range(len(threads)):
            threads[i] = threads[i][::-1]
        # print(threads)
        posts = threads[0]
        template = 'blog/post/post_page.html'
        context = {'posts': posts,
                   'profile': profile}
        return render(request, template, context)
    else:
        return JsonResponse({'message': 'Post not found'})


class Post_view(APIView):
    def get(self, request, post_id):
        print("ENTER THE WOLFIE")
        threads = []
        likes = []
        if Post.objects.filter(id=post_id):
            all_leaf_posts = Post.objects.filter(
                title=Post.objects.get(id=post_id).title, is_daddu=True)
            # print(all_leaf_posts)
            for leaf_post in all_leaf_posts:
                thread = []
                like_count = leaf_post.like_set.count()
                thread.append(leaf_post)
                while leaf_post.origin_id:
                    target_post = get_object_or_404(Post,
                                                    id=leaf_post.origin_id)
                    leaf_post = target_post
                    # print(leaf_post)
                    like_count += target_post.like_set.count()
                    thread.append(target_post)

                threads.append(thread)
                likes.append(like_count)
            # print(threads, likes)
            thread_like = zip(threads, likes)

            print(thread_like)
            thread_like = list(sorted(thread_like, key=lambda t: t[1]))[::-1]
            print(thread_like)
            for i in range(len(thread_like)):
                threads[i] = thread_like[i][0]

            for i in range(len(threads)):
                threads[i] = threads[i][::-1]
            print(threads)
            posts = threads[0]
            # template = 'blog/post/post_page.html'
            # context = {'posts': posts,
            #            'profile': profile}
            # return render(request, template, context)
            serializer = PostSerializer(posts, many=True)
            return Response({'posts': serializer.data, "branch_count": len(threads)})
            # return Response(serializer.data)
        else:
            return JsonResponse({'message': 'Post not found'})

@login_required
def create_post(request):
    if request.method == "POST":
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            words = post.content.split()
            if len(words) > 42:
                msg = 'Max allowed words are 42.'
                return JsonResponse({'message': msg})
            post.author = request.user.profile
            post.slug = post.id
            post.seo_description = post.title
            post.seo_title = post.title
            post.save()
            return redirect(post.get_absolute_url())
    else:
        form = PostForm()
    return render(request, 'blog/post/create_post.html', {'form': form})

class branch_view(APIView):
    def get(self, request, post_id, branch_id):
        print("ENTER THE WOLFIE")
        threads = []
        likes = []
        if Post.objects.filter(id=post_id):
            all_leaf_posts = Post.objects.filter(
                title=Post.objects.get(id=post_id).title, is_daddu=True)
            # print(all_leaf_posts)
            for leaf_post in all_leaf_posts:
                thread = []
                like_count = leaf_post.like_set.count()
                thread.append(leaf_post)
                while leaf_post.origin_id:
                    target_post = get_object_or_404(Post,
                                                    id=leaf_post.origin_id)
                    leaf_post = target_post
                    # print(leaf_post)
                    like_count += target_post.like_set.count()
                    thread.append(target_post)

                threads.append(thread)
                likes.append(like_count)
            # print(threads, likes)
            thread_like = zip(threads, likes)

            print(thread_like)
            thread_like = list(sorted(thread_like, key=lambda t: t[1]))[::-1]
            print(thread_like)
            for i in range(len(thread_like)):
                threads[i] = thread_like[i][0]

            for i in range(len(threads)):
                threads[i] = threads[i][::-1]
            print(threads)
            posts = threads[int(branch_id)]
            # template = 'blog/post/post_page.html'
            # context = {'posts': posts,
            #            'profile': profile}
            # return render(request, template, context)
            serializer = PostSerializer(posts, many=True)
            return Response({'posts': serializer.data, "branch_count": len(thread)})
        else:
            return JsonResponse({'message': 'Post not found'})


@login_required
def post_edit(request, post_id):
    if Post.objects.filter(id=post_id):
        post = get_object_or_404(Post, id=post_id)
        if request.method == "POST":
            form = PostForm(request.POST, instance=post)
            if form.is_valid():
                post = form.save(commit=False)
                words = post.content.split()
                if len(words) > 42:
                    msg = 'Max allowed words are 42.'
                    return JsonResponse({'message': msg})
                post.save()
                return redirect(post.get_absolute_url())
        elif post.author.user.username == request.user.username:
            form = PostForm(instance=post)
            return render(request, 'blog/post/create_post.html',
                          {'form': form})
        else:
            return JsonResponse({'message': 'You can\'t edit this post'})
    else:
        return JsonResponse({'message': 'Post not found'})


@login_required
def fork(request, post_id):
    if Post.objects.filter(id=post_id):
        parent_posts = []
        temp_post = get_object_or_404(Post, id=post_id)
        while temp_post.is_forked:
            parent_posts.append(temp_post)
            temp_post = get_object_or_404(Post, id=temp_post.origin_id)
        parent_posts.append(temp_post)

        if len(parent_posts) >= 10:
            return JsonResponse({'message': 'Reached max no of forks, 10'})

        size_pp = len(parent_posts)

        if request.method == "POST":
            parent_post = Post.objects.get(id=post_id)
            form = ForkPostForm(request.POST)
            if form.is_valid():
                post = form.save(commit=False)
                words = post.content.split()
                if len(words) > 42:
                    msg = 'Max allowed words are 42.'
                    return JsonResponse({'message': msg})
                post.is_forked = True
                post.origin_id = post_id
                post.author = request.user.profile
                post.slug = post.id
                post.seo_description = post.title
                post.seo_title = post.title
                post.title = parent_post.title
                post.is_daddu = True
                post.save()
                temp_post = get_object_or_404(Post, id=post_id)
                temp_post.is_daddu = False
                temp_post.save()
                return redirect(post.get_absolute_url())
        else:
            form = ForkPostForm()
        return render(request, 'blog/post/create_post.html',
                      {'form': form, 'parent_posts': reversed(parent_posts),
                       'size_pp': size_pp})


@require_http_methods(["POST"])
@api_view(['POST'])
@permission_classes([AllowAny])
@csrf_exempt
def fork_list(request):
    if request.method == "POST":
        post_list = models.Post()
        user_id = request.data['user_id']
        u = User.objects.get(id=user_id)
        post_list.author = Profile.objects.get(user=u)
        post_list.content = request.data['content']
        post_list.title = request.data['title']
        post_list.is_published = True
        post_list.slug = post_list.id
        post_list.seo_description = request.data['content']
        post_list.seo_title = request.data['title']
        post_list.is_latest = True
        post_list.origin_id = request.data["origin_id"]
        post_list.save()
        temp_post = post_list
        branch = []
        branch.append(post_list)
        print(post_list.origin_id)
        while temp_post.origin_id != None:
            temp_post = get_object_or_404(Post, id=temp_post.origin_id)
            branch.append(temp_post)
            print(temp_post)
        branches = reversed(branch)

        print(branches)
        serializer = PostSerializer(branches, many=True)
        return Response(serializer.data)
    else:
        return JsonResponse({'message': 'Post not found'})


@login_required
def post_delete(request, post_id):
    if Post.objects.filter(id=post_id):
        target_post = Post.objects.get(id=post_id)

        if target_post.origin_id:
            child_posts = Post.objects.filter(origin_id=post_id)
            for child_post in child_posts:
                child_post.origin_id = target_post.origin_id
                child_post.save()
            target_post.delete()
        else:
            return JsonResponse(
                {'message': 'Sorry, you can not delete a thread'})
    if Post.objects.filter(id=post_id):
        return JsonResponse({'message': 'Something went wrong'})
    else:
        return JsonResponse({'message': 'deleted'})
