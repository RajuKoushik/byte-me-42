"""
WSGI config for backend42 project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.11/howto/deployment/wsgi/
"""
import os

from django.core.wsgi import get_wsgi_application	
from django.core.wsgi import get_wsgi_application
from whitenoise.django import DjangoWhiteNoise
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend42.settings")	os.environ.setdefault(“DJANGO_SETTINGS_MODULE”, “the-42-django-react.settings”)
application = get_wsgi_application()	application = get_wsgi_application()
application = DjangoWhiteNoise(application)