from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import FileUploadParser
from django.core.files.storage import FileSystemStorage
import os
from django.conf import settings
import json
from .serializers import JsonDataSerializer
from .models import JsonData

class JsonClass(APIView):
    """
    Upload JSON file
    """
    parser_classes = (FileUploadParser,)
    permission_classes = (permissions.AllowAny,)

    def save_json(self, js):

        for i, item in enumerate(js):
            #print(item)
            jsa=JsonDataSerializer(data=item)
            if jsa.is_valid():
                jsa.save()
        #    JsonData.objects.create(item=item)
        return jsa.errors

    def post(self, request, *args, **kwargs):
        file=request.stream.FILES['file']
        
        #full_filename = os.path.join(settings.MEDIA_ROOT, "asd.json")
        #fs = FileSystemStorage()
        #filename = fs.save("abc.json",file)

        try:
            js = json.load(file)
        except:
            return Response({"message":"Bad File format"}, status=status.HTTP_201_CREATED)
            
        try:    
            self.save_json(js)
        except:
            return Response({"message":"Error in writing to DB"}, status=status.HTTP_201_CREATED)

        return Response({"message":"Data saved to DB"}, status=status.HTTP_201_CREATED)


    def get(self, request, *args, **kwargs):

        result = JsonData.objects.all()
       
        ser=JsonDataSerializer(result,many=True)
        return Response(ser.data, status=status.HTTP_201_CREATED)