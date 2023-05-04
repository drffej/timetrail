---
layout: home.njk
title: <Name of challenge or Time Trial>
description: A series of paddling time trials.
---

## {{ title }}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<div class="w3-row-padding" style="margin:0 -16px">
{% for timetrial in collections.timetrials %}
    <div class="w3-third">
            <div class="w3-card w3-container w3-hover-shadow w3-theme w3-margin-bottom" onclick="location.href='{{ timetrial.page.url  }}'" style="cursor: pointer">
                    <h4>{{ timetrial.data.title }}</h4>
            </div>
    </div>   
{% endfor %}
</div>

### About the Challenges

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
