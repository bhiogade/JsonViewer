from django.db import models

# Create your models here.
class JsonData(models.Model):
    userId = models.IntegerField(null=False,blank=False)
    id = models.IntegerField(null=False,blank=False,primary_key = True)
    title = models.TextField(null=False,blank=False)
    body = models.TextField(null=False,blank=False)

    def __str__(self):
        field_values = []
        for field in self._meta.get_fields():
            field_values.append(str(getattr(self, field.name, '')))
        return ' '.join(field_values)