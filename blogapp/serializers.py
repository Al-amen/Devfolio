from rest_framework import serializers
from .models import Customuser, Blog
from django.contrib.auth import get_user_model

User = get_user_model()

class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            username=validated_data['username'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


class VerySimpleUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'profile_picture']
        extra_kwargs = {'profile_picture': {'read_only': True}}


class BlogSerializer(serializers.ModelSerializer):
    author = VerySimpleUserSerializer(read_only=True)

    class Meta:
        model = Blog
        fields = ['id', 'title', 'slug', 'content', 'author', 'category', 'featured_image', 'is_draft', 'created_at', 'updated_at', 'published_at']
        read_only_fields = ['id', 'slug', 'author', 'created_at', 'updated_at']
    
    # def create(self, validated_data):
    #     request = self.context.get('request')
    #     validated_data['author'] = request.user
    #     return super().create(validated_data)



class UserInfoSerializer(serializers.ModelSerializer):
    blog_posts = serializers.SerializerMethodField()
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'bio', 'profile_picture', 'job_title',
                  'profile_picture_url', 'facebook', 'youtube', 'twitter', 'instagram', 'linkedin',
                  'github', 'blog_posts']

    
    def get_blog_posts(self, user):
        blogs = user.blog_posts.all()[:9]
        serializer = BlogSerializer(blogs, many=True)
        return serializer.data
    


    



        
