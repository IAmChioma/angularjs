from rest_framework import serializers
from .models import List, Card
#from rest_hooks.models import Hook


class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ('id','title', 'description','list', 'story_points', 'business_value')

class ListSerializer(serializers.ModelSerializer):
     cards = CardSerializer(read_only=True, many=True)

     class Meta:
        model = List
        fields = '__all__'