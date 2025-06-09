from django.shortcuts import render
from  rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserRegisterSerializer, VerySimpleUserSerializer



@api_view(['POST'])
def register_user(request):
    serializer = UserRegisterSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        return Response({'id': user.id, 'username': user.username}, status=201)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
