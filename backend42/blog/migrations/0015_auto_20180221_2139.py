# Generated by Django 2.0.2 on 2018-02-21 16:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0014_auto_20180221_1013'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='origin_id',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
