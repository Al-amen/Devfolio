# Generated by Django 5.2.1 on 2025-06-12 16:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blogapp', '0002_alter_blog_author'),
    ]

    operations = [
        migrations.RenameField(
            model_name='customuser',
            old_name='facebooks',
            new_name='facebook',
        ),
        migrations.RenameField(
            model_name='customuser',
            old_name='githubs',
            new_name='github',
        ),
        migrations.RenameField(
            model_name='customuser',
            old_name='instagrams',
            new_name='instagram',
        ),
        migrations.RenameField(
            model_name='customuser',
            old_name='linkedins',
            new_name='linkedin',
        ),
        migrations.RenameField(
            model_name='customuser',
            old_name='twitters',
            new_name='twitter',
        ),
        migrations.RenameField(
            model_name='customuser',
            old_name='youtubes',
            new_name='youtube',
        ),
    ]
