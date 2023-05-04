---
layout: base.njk
title: Time trials
description: "Course results index"
eleventyExcludeFromCollections: true
---

# Courses

{% for trial in collections.timetrials %}
    <a href="{{ trial.page.url  }}">{{ trial.data.title }}</a>
{% endfor %}

