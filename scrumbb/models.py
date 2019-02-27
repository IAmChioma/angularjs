from django.db import models
from django.utils.encoding import python_2_unicode_compatible
# Create your models here.

@python_2_unicode_compatible
class List(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return "List: {}".format(self.name)

@python_2_unicode_compatible
class Card(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50)
    description=models.TextField(blank=True)
    list = models.ForeignKey(List, on_delete= models.DO_NOTHING, related_name="cards")
    story_points= models.IntegerField(null=True, blank=True)
    business_value = models.IntegerField(null=True, blank=True)

    # def serialize_hook(self, hook):
    #     return {
    #         'hook': hook.dict(),
    #         'data':{
    #             'id': self.id,
    #             'title': self.title,
    #             'description': self.description,
    #             'list': self.list,
    #             'story_points': self.story_points,
    #             'business_value': self.business_value
    #         }}

    # def mark_as_read(self):
    #     from rest_hooks.signals import hook_event
    #     hook_event.send(
    #         sender= self.__class__,
    #         action='read',
    #         instance=self
    #     )
    def __str__(self):
        return "Card: {}".format(self.title)



