# Generated by Django 2.2.2 on 2019-07-28 23:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0007_auto_20190704_1723'),
    ]

    operations = [
        migrations.AddField(
            model_name='program',
            name='is_closed',
            field=models.BooleanField(default=False),
        ),
    ]
