---
layout: post
title: Using Pushcut to run Make automations
tags: 
  - Pushcut
  - Make.com
date: 2022-12-17 12:00
---
One of the many things I do with Make is "clean up" a number of tables in various Airtable bases (i.e. remove records which are no longer needed), delete/archive some Google Documents, and similar. This is an automation which I wanted to integrate into a number of other automations, but also to be able to run it in an adhoc fashion.

![](/assets/2022/shortcuts_check_calendar_make.png)

The solution to this was to use a webhook as the trigger. I can run the Make scenario through any other Make (or IFTTT/Zapier) automation through a simple HTTP request to that webhook. But then I stumbled across another scenario: I wanted to run this automatically the day after I record any podcast. Instead of trying to set up multiple automations involving each of the 4 calendars I use for podcasting (one for each podcast, plus another for any podcasts I guest on), I turned to Pushcut.

Every day at midnight Pushcut runs an action which gets my calendars events for the last day filtered to just those for calendars. If there were any events, it calls the webhook to run the tidy up.

It's very simple, 3 actions, but it's a great way to re-use that same automation as a component. If I need something else tidied up regularly I can add it to that one Make scenario and voilà.