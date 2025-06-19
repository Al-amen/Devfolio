from django.utils import timezone
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.text import slugify

# Create your models here.

class Customuser(AbstractUser):
    bio = models.TextField(blank=True, null=True)
    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)
    profile_picture_url = models.URLField(blank=True, null=True)
    job_title = models.CharField(max_length=100, blank=True, null=True)

    facebook = models.URLField(blank=True, null=True)
    youtube = models.URLField(blank=True, null=True)
    twitter = models.URLField(blank=True, null=True)
    instagram = models.URLField(blank=True, null=True)
    linkedin = models.URLField(blank=True, null=True)
    github = models.URLField(blank=True, null=True)

    # USERNAME_FIELD = 'username'
    # REQUIRED_FIELDS = ['email']

    def __str__(self):
        return self.username
    

class Blog(models.Model):
    CATEGORY = (
        ('Frontend', 'Frontend'),
        ('Backend', 'Backend'),
        ('FullStack', 'FullStack'),
        ('Design', 'Design'),
        ('ML', 'ML'),
        ('Data Science', 'Data Science'),
        ('AI', 'AI'),
        ('DevOps', 'DevOps'),
        ('Cloud Computing', 'Cloud Computing'),
        ('Cybersecurity', 'Cybersecurity'),
        ('Blockchain', 'Blockchain'),
        ('Programming', 'Programming'),
        ('Software Development', 'Software Development'),
        ('Mobile Development', 'Mobile Development'),
        ('Game Development', 'Game Development'),
    )
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True, blank=True)
    content = models.TextField()
    author = models.ForeignKey(Customuser, on_delete=models.SET_NULL, null=True, related_name='blog_posts')
    category = models.CharField(max_length=100, choices=CATEGORY,blank=True,null=True)
    featured_image = models.ImageField(upload_to='featured_images/', blank=True, null=True)
    is_draft = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    published_at = models.DateTimeField(blank=True, null=True) 



    class Meta:
        ordering = ['-published_at']

    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        base_slug = slugify(self.title)
        slug = base_slug
        num = 1
        while Blog.objects.filter(slug=slug).exists():
            slug = f'{base_slug}-{num}'
            num += 1
        self.slug = slug


        if not self.is_draft and self.published_at is None:
            self.published_at = timezone.now()

        super().save(*args, **kwargs)
