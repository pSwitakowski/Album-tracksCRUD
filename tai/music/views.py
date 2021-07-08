from rest_framework import viewsets

from .models import AlbumSerializer, TrackSerializer, Album, Track


class AlbumViewSet(viewsets.ModelViewSet):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer


class TrackViewSet(viewsets.ModelViewSet):
    queryset = Track.objects.all()
    serializer_class = TrackSerializer
