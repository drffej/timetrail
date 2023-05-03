---
layout: base.njk
title: Time trials
description: "Trentham TT- course results index"
eleventyExcludeFromCollections: true
---

# Courses

{% for trial in collections.timetrials %}
    <a href="{{ trial.page.url  }}">{{ trial.data.title }}</a>
{% endfor %}

