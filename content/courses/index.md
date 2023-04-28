---
layout: base.njk
title: Courses
eleventyExcludeFromCollections: true
---

# Courses

{% for course in collections.courses %}
    <a href="{{ course.page.url  }}">{{ course.data.title }}</a>
    <p>{{ course.data.description }}
{% endfor %}

