from django.shortcuts import render
from rest_framework import generics
from rest_framework import permissions

from .serializers import DoctorListSerializer
from .models import Doctor


class DoctorsListView(generics.ListCreateAPIView):

    serializer_class = DoctorListSerializer
    queryset = Doctor.objects.all()


class DoctorsDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = DoctorListSerializer
    permission_classes = [permissions.IsAuthenticated]


    def get_queryset(self):
        queryset = Doctor.objects.filter(id=self.kwargs['pk'])
        return queryset
    


    

