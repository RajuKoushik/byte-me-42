from django.http import JsonResponse
from django.shortcuts import render, redirect, get_object_or_404


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
