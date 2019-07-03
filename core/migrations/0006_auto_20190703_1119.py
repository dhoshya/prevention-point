# Generated by Django 2.2.2 on 2019-07-03 11:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_auto_20190703_0050'),
    ]

    operations = [
        migrations.AlterField(
            model_name='frontdeskevent',
            name='event_type',
            field=models.CharField(choices=[('ARRIVED', 'arrived'), ('SEEN', 'seen'), ('LEFT', 'left'), ('STEPPED_OUT', 'stepped_out'), ('CAME_BACK', 'came_back')], max_length=50),
        ),
    ]
