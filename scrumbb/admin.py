from django.contrib import admin
#from rest_hooks.models import Hook
# Register your models here.
from scrumbb.models import Card, List

admin.site.register(Card)
admin.site.register(List)