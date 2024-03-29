---
title: "Automators 15: Automate Your Time Tracking"
last_modified_at: 2021-10-10 00:00
date: 2019-01-18 18:00
type: post
published: true
layout: post
artwork: automators
tags:
  - Automators
  - Podcast
  - Time Tracking
redirect_from:
  - "/2019/01/18/automators-15-automate-your-time-tracking.html"
---


  Episode 15 of Automators has arrived - and with it our secrets for automating
  time tracking.  

<!--more-->

  Time tracking is something some people are required to do, some people ought
  to do, and something everyone should try at least once just so you can see
  where all your time is going and how many of those "it will just take 2
  minute" tasks really take 45 minutes.  

  David and Mike Schmitz talked about how to figure out what you shouldn't be
  doing in
  <a href="https://www.relay.fm/focused/53"
    >episode 53 of Focused (formerly Free Agents)</a
  >, and that's one of the things I've kept an eye on through my time tracking -
  things that are taking a lot of my time, that I don't truly enjoy doing or
  that I know aren't beneficial to me.  
<h2>My Oversleeping Tracker</h2>

  Now, depending on the day of the week, this should perhaps more accurately be
  called my "lazing in bed" tracker, I title it oversleeping by default - you
  could call it whatever you like. This is is a solid example of a tracker which
  should automatically start at a specific time.  

  To make it I kept things simple - the trigger is the schedule action, set for
  6am in my case. I have set it not to run on Saturdays and Sundays. Then the
  actions are as follows: Toggl, start a time entry (not create!) - I set the
  workspace, project (called Personal), and add a description of "Oversleeping".
  The final action is to send myself a Pushbullet link notification. I
  misremembered during the episode but I am actually triggering a Shortcut, the
  link is simply <code>shortcuts://run-shortcut?name=Stop%20Toggl</code> (you
  can download the Shortcut
  <a href="https://www.icloud.com/shortcuts/dfacc8698cdd45a59929ae8768555581"
    >here</a
  >, you'll need to have the Toggl app installed for it to work), and the title
  is actually the description of the Toggl timer - so if I change what I put in
  the description later I don't need to remember to update the notification
  name. If you're on the free version of Toggl then you'll have to skip the
  notification part.  

  That's it! When the Zap runs it starts the timer, and sends me a notification
  - and when I open that notification it opens Shortcuts, which stops the timer.
  You could have it open the Toggl web page instead - or any number of things if
  you wanted to do so. (You could also run a different Shortcut, one which
  starts playing your morning playlist, tells you what events are on your
  calendar, etc., as well as stopping the timer.)  
<h2>My Zapier Stop Timer Automation</h2>

  This one does the opposite of the above - it stops a currently running timer
  at 10pm. The trick with this is you will need to use the Toggl API, and as
  such you'll need a premium Zapier plan to do this (you could use Microsoft
  Flow if you're comfortable doing the whole thing via APIs though, and that's
  free!). So, how does it work?  
<ol>
  <li>
    Every day at 10pm is the schedule which triggers this, I have it run on
    weekends too.
  </li>
  <li>
    GET - I make a call to the Toggl API. I call the URL
    <code>https://www.toggl.com/api/v8/time_entries/current</code>, and make
    sure to fill out the Basic Auth field with <code>email|password</code>.
  </li>
  <li>
    Only continue if: the data returned by Toggl has a negative duration if the
    timer is still running, so if it's less than zero I continue.
  </li>
  <li>Stop Time Entry - using the ID captured from the GET in step 2.</li>
  <li>
    Send a link via PushBullet. This opens the alternative Toggl app I'm beta
    testing so I can just continue the timer if necessary.
  </li>
</ol>

  <img
    class="alignnone size-medium"
    src="{{ "/assets/2019/01/stop-timer-zapier.png" | absolute_url }}"
    width="1750"
    height="7008"
  />  

  A note: while I am doing some of my Toggl automations through IFTTT that is
  via their Maker service and the API, it doesn't have direct integration with
  Toggl itself.  
https://youtu.be/9sm5gxFOaMo  

  <a href="https://www.relay.fm/automators/15"
    >Automators Episode 15: Automated Time Tracking</a
  >  
A big thanks to our sponsors for this episode:  
<ul>
  <li>
    <a href="https://www.expressvpn.com/automators">ExpressVPN</a>: High-Speed,
    Secure &amp; Anonymous VPN Service. Get 3 months free with a 1-year package.
  </li>
</ul>
