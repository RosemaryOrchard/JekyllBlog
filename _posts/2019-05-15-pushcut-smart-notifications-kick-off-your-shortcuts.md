---
title: "Pushcut: Smart Notifications Kick Off Your Shortcuts"
last_modified_at: 2021-10-10 00:00
date: 2019-05-15 22:04
type: post
published: true
layout: post
artwork: automators
tags:
  - Automators
  - Podcast
redirect_from:
  - "/2019/05/15/pushcut-smart-notifications-kick-off-your-shortcuts.html"
---


  As I've talked about on Automators before, I have used Zapier to send
  notifications to my iPhone which trigger Shortcuts - this means that I can
  have a series of automated actions happen and follow it up with something I
  need to manually do. I've been using PushBullet and Pushover to do this - I've
  tried both and they're both good, but they're designed for notifications and
  the URLs triggering automations is not something it was designed to do.
  Additionally PushBullet still hasn't been updated for the iPhone X(s) screen
  format. Pushover has been updated more recently, but it still doesn't quite
  match up with what Pushcut can do as a dedicated app.  

<!--more-->

Let's start by looking at a few use cases for this:  
<ul>
  <li>
    MacSparky and I take it in turns to post the Automators episodes, that means
    every second episode when it releases I need to be prompted to put up my
    blog post about the episode. That post is prepared, and is in Drafts, so
    once the episode is up I get a notification that triggers a Shortcut to help
    me find the right Draft and post it.
  </li>
  <li>
    When an article of mine goes up on The Sweet Setup I like to go and clean it
    out of my Dropbox (where the drafts sit), which I do through a Shortcut, and
    then post about it on my site.
  </li>
</ul>

  Those are just two of the many use cases I have for this sort of thing, in
  each case there can be multiple steps I would like to execute on my device -
  some of these I've combined into a single Shortcut which runs those other
  shortcuts, but others I'm still trying to rely on my memory (which has more
  holes in it than a sieve!). Also if I want or need to change these I need to
  log into Zapier and change the URL scheme that's in the URL part of the
  notification action step (whether that's through Pushover or Pushbullet).  

  Pushcut is a free app with two subscription levels, I'll give you a quick
  overview of those:  
<ul>
  <li>
    **Free**: Create three notifications, which can each trigger
    one action (opening a URL or running a Shortcut).
  </li>
  <li>
    **Basic**: Create as many notifications as you want, with as
    many actions as you want on each notification. Plus you can sync these
    between your devices.
  </li>
  <li>
    **Pro**: Dynamic notifications - based on JSON you use to
    trigger the notification which can give you: inputs for Shortcuts and
    dynamic title and text in notifications. You can also target individual
    devices.
  </li>
</ul>

  I immediately decided I wanted the Pro - I've been passing variables to
  Shortcuts as parameters through Zapier, and I've been building my own
  workarounds for branching to give me different information. Most people should
  start out with the free level and then try basic though to get to grips with
  the system.  
<h2>Setup</h2>

  <img
    src="{{ "/assets/2019/05/IMG_1709.png" | absolute_url }}"
    class="aligncenter wp-image-2661"
    alt=""
    width="320"
    height="636"
  />  

  The first thing to do is to create a notification in the Pushcut app, and give
  it a name. The name of the in the app is separate to what appears as the title
  of the notification which is very useful allowing you to have useful internal
  descriptions, but have an action based title. The title gets URL encoded and
  becomes part of the URL you POST to in order to trigger the notification.
  Tapping this URL will copy it to your clipboard - and I'll come back to what
  to do with that near the end!  

  <img
    src="{{ "/assets/2019/05/IMG_1710.png" | absolute_url }}"
    class="aligncenter wp-image-2662"
    alt=""
    width="320"
    height="636"
  />  

  Secondly you want to set the Notification Title and Description. These are
  what will show up on your device when you get the notification, I like mine to
  tell me what to do, and why I'm doing it - this way I won't just ignore the
  notifications because the seem irrelevant. After this you should set a default
  action, and you probably want to add this as action as well. The default
  action is what happens if you just tap on the notification, or swipe on it
  from the lock screen, and the actions are what you (can) trigger after force
  touching the notification - you can add multiple actions to a notification
  here, giving you a choice in which action to execute.  

  <img
    src="{{ "/assets/2019/05/IMG_1711.png" | absolute_url }}"
    class="aligncenter wp-image-2663"
    alt=""
    width="320"
    height="636"
  />  

  Now we have the basics set up we can trigger the notification! Depending on
  your needs you could use this with something like IFTTT or Zapier's web hooks,
  or even build it into a script somewhere.  

  <img
    src="{{ "/assets/2019/05/IMG_1713.png" | absolute_url }}"
    class="aligncenter wp-image-2665"
    alt=""
    width="320"
    height="636"
  />  

  Now whenever this is triggered you will get a notification sent to your device
  which when opened will trigger a Shortcut.  

  <span style="text-align: center"
    ><img
      src="{{ "/assets/2019/05/IMG_1714.png" | absolute_url }}"
      class="aligncenter wp-image-2664"
      alt=""
      width="320"
      height="636"
  /></span>  

  In addition to what I've outlined above you can enhance this with the Pro
  options - allowing you to specify custom notification titles and content, and
  also pass input to your shortcuts. You can also run URL schemes allowing you
  to something like add a task to Due - without having to go via Shortcuts.  

  I've been fortunate enough to talk to the developer of Pushcut over the last
  few weeks and he's been adding enhancements right and left! While the app and
  service are already a step up from existing solutions just because of the ease
  of use, the fact that this is a dedicated service for triggering automations
  on iOS means it really is well thought out.  

  <a href="https://itunes.apple.com/us/app/id1450936447?at=1010lumu"
    >Pushcut - Automation your way</a
  >  
