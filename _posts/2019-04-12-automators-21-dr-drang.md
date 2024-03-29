---
title: "Automators 21: Invoicing, Writing, and Regular Expressions with Dr. Drang"
last_modified_at: 2021-10-10 00:00
date: 2019-04-12 18:45
type: post
published: true
layout: post
artwork: automators
tags:
  - Automators
  - Podcast
  - AppleScript
  - Dr Drang
  - Invoicing
  - Python
  - Shortcuts
  - Weather
redirect_from:
  - "/2019/04/12/automators-21-dr-drang.html"
---


  In episode 21 of Automators, David and I were joined by the lovely Dr Drang!
  You may have heard him on a few other podcasts, including Mac Power Users.  

<!--more-->

  We dug into getting started with HyperCard and HyperTalk - back when those
  were available, these were created by Bill Atkinson - and there's a
  <a
    href="https://www.folklore.org/StoryView.py?story=Negative_2000_Lines_Of_Code.txt"
    >story about him having to submit the number of lines of code he wrote</a
  >
  when he was working on QuickDraw that made me smile!  

  Nowadays Dr Drang mostly using Python to program his automations - with a dose
  of AppleScript and Keyboard Maestro to get certain information.  

  Regular Expressions are something we talked about in depth, they're hard to
  explain - let alone on a podcast, but as David said - they're essentially a
  special language for searching. One thing I forgot to say on the podcast was
  that regular expressions can and do vary between languages - but the basic
  rules stay the same which makes things easier! If you want to get started with
  Regular Expressions then <a href="https://regex101.com/">Regex 101</a> is a
  pretty good place to get started - you can input plenty of sample text and it
  highlights what you've matched as you go, as well as explaining your
  expressions and having the quick expressions area in the bottom right-hand
  corner.  

  Another thing we talked about are things you don't necessarily want to
  complete to automate - such as sending invoice emails or creating the harsher
  reminder email to pay an overdue invoice. This is something well worth keeping
  in mind when creating automations - even if you can automate it the whole way
  through, it's good to have some human intervention in some areas. And in some
  places, you can't automate things - such as adding a repeat to a reminder, so
  you need to step in and do something.  

  Local weather is something lots of people want! And while Weather Underground
  has shut down you can still use Dark Sky's API if you want to program your own
  solution, and for an "out of the box" solution you could use Netatmo and
  Carrot weather - I do both of these!  

  Drafts is one of my favourite applications ever and it was great to hear Drang
  break down his blogging workflow and how it makes use of the great automation
  features available to us in the app. The
  <a href="https://actions.getdrafts.com/">Drafts Action Directory</a> is an
  excellent resource and all of the actions there can be installed whether or
  not you're a pro user of the app.  

  <img
    src="{{ "/assets/2019/04/IMG_1299-151x300.jpeg" | absolute_url }}"
    class="aligncenter"
    alt="Handling missing input in Shortcuts"
  />  

  One tip I talked about in regards to Shortcuts is checking if input is present
  - and I have a fairly standard setup I use to handle this:


  * Count Items


  * If equals zero


  * Get photos/files - depending on what you want


  * Else: get the input provided to the shortcut.  

  This means that when I run my shortcuts from the widget screen, Drafts, Launch
  Center Pro, or directly within Shortcuts, I don't get confused when it doesn't
  work.  

  It was excellent to have Dr. Drang on the show, and I hope you enjoy the
  episode!  
Thank you to Luna Display and TextExpander for sponsoring this episode.  

  <a href="https://relay.fm/automators/21"
    >Listen to Automators 21: Invoicing, Writing, and Regular Expressions with
    Dr. Drang</a
  >  
