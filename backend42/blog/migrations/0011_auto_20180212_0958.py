# Generated by Django 2.0.2 on 2018-02-12 04:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0010_auto_20180212_0936'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='like',
            options={'ordering': ('created',), 'verbose_name': 'Like', 'verbose_name_plural': 'Likes'},
        ),
        migrations.AlterModelOptions(
            name='post',
            options={'ordering': ('created',), 'verbose_name': 'Post', 'verbose_name_plural': 'Posts'},
        ),
        migrations.AlterModelOptions(
            name='profile',
            options={'ordering': ('user',), 'verbose_name': 'Profile', 'verbose_name_plural': 'Profiles'},
        ),
    ]