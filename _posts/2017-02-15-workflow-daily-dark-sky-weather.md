---
title: 'Workflow: What’s the weather like today?'
last_modified_at: 2021-10-10 00:00
date: 2017-02-15 08:00
type: post
published: true
layout: post
tags:
  - Workflow
redirect_from:
  - "/2017/02/15/workflow-daily-dark-sky-weather.html"
---
I’ve been exploring APIs quite a bit recently and came across the <a href="https://darksky.net/dev/docs">Dark Sky API</a> (free for up to 1000 calls a day). The possibilities with this API, like most, are many - and my immediate thought was I could use it to tell me at the start of the day what the weather will be like for the day - regardless of where I am.  


<!--more-->

I’ve experimented with IFTTT to tell me automatically at X time, but the problem with IFTTT is your location is static - you have to log into the website every time you need to change it. It also tells me at the same time _every_ day and my schedule can vary somewhat.  
Anyway, on to the Workflow! I wanted to get the max and min temperature for the day, plus humidity and a rough summary of the next few days, all of these are possible in the API. I also decided that regardless of where I am in the world I would like the units to be metric (standard international, to be precise). I explored the <a href="https://darksky.net/dev/docs/forecast">very thorough API documentation</a> and realised I could exclude current, minute, hourly, alerts and flags data, and did so.  

---

**Here is the Workflow: <a href="https://workflow.is/workflows/f820044097a9467a8879795058e0f887">Daily Dark Sky Forecast</a>**


<a href="https://workflow.is/workflows/f820044097a9467a8879795058e0f887"></a>  

---

It’s a today widget, it will likely take a little while to run as it gets your GPS location - if you don’t travel much or at all then it might be worth finding out your latitude and longitude and hard coding them in. The emojis in the top dictionary can be modified of course - they're just there to represent the icon which is available in the API.  
Of course, if you like Dark Sky it's well worth buying the app!  
