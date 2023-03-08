from django.urls import path
from . import views

urlpatterns = [
    path('doctors/', views.DoctorsListView.as_view(), name='doctors'),
    path('doctor/<int:pk>/', views.DoctorsDetailView.as_view(), name='doctors_detail')
]
