from django.contrib import admin

from .models import Doctor



@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):

    # fields = ('id', 'fio', 'position')

    pass