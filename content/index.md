---
layout: home.njk
title: Trentham Lake Challenge
description: The Trentham lake challenge are a series of time trials to record paddling achievements around Trentham Lake.
---

## {{ title }}

The {{ title }} are a series of time trials to record paddling achievements around Trentham Lake ... its not about records, but how well you can do the challenges and how you improve over time. There are three challenges to choose from:

<div class="w3-row-padding" style="margin:0 -16px">
{% for course in collections.timetrials %}
    <div class="w3-third">
            <div class="w3-card w3-container w3-hover-shadow w3-theme w3-margin-bottom" onclick="location.href='{{ course.page.url  }}'" style="cursor: pointer">
                    <h4>{{ course.data.title }}</h4>
                    <p>{{ course.data.description }}</p>
            </div>
    </div>   
{% endfor %}
</div>

### About the Challenges

The site provides a permanent record for those that want to push their limits on how fast they can paddle the Lake challenges.  Paddlers may be doing it for the personal kudos or want to see how they stack up against the other paddlers doing the challenges.  Hopefully it will inspire paddlers to do more at Trentham Lake!

Doing the challenges can be a journey - improving fitness, technique and learning new skills e.g. how do a time trial course.  You also get to choose your craft and this will hopefully inspire paddlers to try out different boats and paddle crew boats as a team.

Independent paddling is another part of the challenge, so please ensure you read the [Safety page](/safety) and the [Trentham Canoe Club Paddler Policy](https://drive.google.com/drive/folders/11EhDrVyTXSoiYzUq1QNy-JNQAecKcHPW) before doing the challenges.  If you want to LEARN how do the challenges safely or go about independent paddling - ask one of the club coaches for help.

Finally these challenges are about human power, so no wash hanging (unless you are doing the challenge as a group), sails, motors or other non-human means of assistance.

### Available Challenges

The following challenges are available, pick one, or do them all, you choose.

