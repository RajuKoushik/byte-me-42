from blog.forms import PostForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.forms.widgets import HiddenInput
from django.shortcuts import render, redirect, get_object_or_404
from rest_framework.decorators import api_view

from .models import Post, Profile


def home(request):
    # all_posts = Post.objects.all()
    all_posts = Post.objects.filter(origin_id=None)
    template = 'home.html'
    context = {'all_posts': reversed(all_posts)}
    return render(request, template, context)


def user_profile(request, username):
    if User.objects.get(username=username):
        profile = Profile.objects.get(user=User.objects.get(username=username))
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
            return render(request, 'blog/post/create_post.html', {'form': form})
        else:
            return JsonResponse({'message': 'You can\'t edit this post'})
    else:
        return JsonResponse({'message': 'Post not found'})

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
