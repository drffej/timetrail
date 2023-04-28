---
layout: base.njk
title: Trentham Lake Challenge
event_id: 1
---

# {{ title }}

The {{ title }} are a series of time trials to record paddling achievements around Trentham Lake ... its not about records, but how well you can do the challenges and how you improve over time.

The site provides a permanent record for those that want to push their limits on how fast they can paddle the Lake challenges.  Paddlers may be doing it for the personal kudos or want to see how they stack up against the other paddlers doing the challenges.  Hopefully it will inspire paddlers to do more at Trentham Lake!

Doing the challenges can be a journey - improving fitness, technique and learning new skills e.g. how to time the course.  You also get to choose your craft and this will hopefully inspire paddles to try out the challenge using different boats.

There following challenges are available, pick one, or do them all, you choose.


{% for course in collections.courses %}
    <div class="w3-card-4">
        <img src="/public/images/{{ course.data.image}}" alt="{{ title }} course" style="width:25%">
        <div class="w3-container">
            <p>{{ course.data.description }}</p>
            <a href="{{ course.page.url  }}">{{ course.data.title }}</a>
        </div>
</div>
{% endfor %}
