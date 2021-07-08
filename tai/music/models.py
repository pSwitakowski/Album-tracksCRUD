from django.db import models
from rest_framework import serializers
from django.utils.translation import ugettext_lazy as _


class Album(models.Model):
    artist = models.CharField(_("Artist"), max_length=50)
    title = models.CharField(_("Title"), max_length=50)
    release_date = models.DateField(_("Release Date"), auto_now=False, auto_now_add=False, blank=False)
    genre = models.CharField(_("Genre"), max_length=50, blank=False)
    producer = models.CharField(_("Producer"), max_length=50, blank=False)


class Track(models.Model):
    album_id = models.ForeignKey(Album, on_delete=models.CASCADE, related_name='tracks')
    title = models.CharField(_("Title"), max_length=50)
    length = models.DurationField(_("Length"))
    track_format = models.CharField(_("Format"), max_length=50)


class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = '__all__'


class TrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Track
        fields = '__all__'
