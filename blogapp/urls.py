from django.urls import path
from .import views
urlpatterns = [
    path('register/', views.register_user, name='register_user'),
    path('create_blog/', views.create_blog, name='create_blog'),
    path('blog_list/', views.blog_list, name='blog_list'),
    path('update_blog/<int:pk>/', views.update_blog, name='update_blog'),
    path('delete_blog/<int:pk>/',views.delete_blog,name='delete_blog'),
    path('user_info/<int:pk>/', views.user_info, name='user_info'),
    path('update_profile/',views.update_profile,name='update_profile'),
    path('detail_blog/<slug:slug>/',views.blog_detail,name='detail_blog'),
    path('get_username/',views.get_username,name='get_username'),

    

]
