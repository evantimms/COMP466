from rest_framework import viewsets
from slideshow.serializers import ImageSerializer
from slideshow.models import Image


class ImageListViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all().order_by('id')
    serializer_class = ImageSerializer
