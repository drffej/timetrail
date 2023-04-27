---
layout: event.njk
title: Around the Island
event_id: 1
---
klkjlkkjlljkljkkjlkjlkljkjlklj
{% for race in collections.competitors| getFastestTime(1)  %}
    {{ race.name }}
{% endfor %}