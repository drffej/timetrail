---
layout: base.njk
title: Time trials
eleventyExcludeFromCollections: true
---

# Courses

{% for trial in collections.timetrials %}
    <a href="{{ trial.page.url  }}">{{ trial.data.title }}</a>
{% endfor %}

