---
title: "Automators 17: Live at PodCon"
last_modified_at: 2021-10-10 00:00
date: 2019-02-15 17:15
type: post
published: true
layout: post
artwork: automators
tags:
  - Automators
  - Podcast
  - Automators
  - Bear
  - Shortcuts
  - Travel
  - TripIt
  - Zapier
redirect_from:
  - "/2019/02/15/automators-17-live-at-podcon.html"
---

Episode 17 of Automators comes to you live from PodCon!  

<!--more-->

<h4>TripIt - Automated Trip Itinerary</h4>

  <img
    class="alignright"
    src="{{ "/assets/2019/02/tripit-itinerary.png" | absolute_url }}"
    width="257"
    height="510"
  />I personally use TripIt to create my itineraries - it actually automates
  everything for me. I could let it read my email inbox and auto create
  itineraries, but I prefer to choose which emails to forward to it. As I
  mentioned on the show I also have a filter in Gmail that marks and read and
  deletes all of the "Your TripIt Itinerary was imported" emails - I only need
  to do something if it didn't work after all.  
<h4>Bear Notes for Trips</h4>

  David rolls his own travel schedule system - with Bear. The advantage of Bear
  is you can easily add attachments and text to a document, meaning everything
  is in the same place. You can even use a nice Shortcut to allow you to append
  a document or text to a specific Bear note:
  <a href="https://www.icloud.com/shortcuts/c99cab3bf76b4121bda45fb5e1a471f2"
    >Append to Bear</a
  >  
<h4>Zapier Turning New Trips into OmniFocus Projects</h4>

  This is an automation I mentioned that is a little hacky, but it works well
  for me. TripIt creates a calendar, or you can use any of your own calendars
  for this if you don't want to use TripIt - you just need to get that calendar
  into Google Calendar. What we do is we watch this calendar for new events,
  then we filter - continuing if the length of the event is more than 23 hours.
  Then I use the text action to write up the TaskPaper I want to be added to
  OmniFocus, and URL encode it. The final step is to add a task to OmniFocus -
  this is accomplished via the MailDrop, and it has a URL scheme which looks
  something like
  <code
    >omnifocus:///paste?target=/folder/Travel&amp;content=
    -%202019/09%20-%20Amsterdam%0A%09-%20Organise%20Travel</code
  >
  in the body - so when this task arrives in my inbox and I process it, I just
  tap on the URL to add the project. You can even run a Shortcut via a URL
  scheme (which I usually do!). The Zapier steps are:  
<ol>
  <li>
    New Event
    <ul>
      <li>Watch the specific calendar in Google Calendar</li>
    </ul>
  </li>
  <li>
    Only Continue If
    <ul>
      <li>
        <code>Duration (hours)</code> <code>Greater than</code> <code>23</code>
      </li>
    </ul>
  </li>
  <li>
    Text (Formatter)
    <ul>
      <li>
        I typed my TaskPaper in here, and URL encoded it, if you already have
        the URL encoded text, or another URL you want to appear in the body of
        the task ready you can skip this step.
      </li>
    </ul>
  </li>
  <li>
    Create Task
    <ul>
      <li>
        The title is "Set up project for trip _Event Name_", which I also
        include in the Text action above. The body is the URL I will tap on when
        I process the task.
      </li>
    </ul>
  </li>
</ol>

  This series of steps is a pretty solid way to add projects and tasks to
  OmniFocus based on other events happening, I use it for lots of automations.  
<h4>Rose's Packing List Shortcut</h4>
https://youtu.be/4gJfgDKWH8k  

  I use a modular approach to create my packing list - along with an extra list
  of devices to charge! While I save this to OmniFocus you could easily modify
  this to work in any task management system, or just to create a PDF to print
  if that's what you prefer to do.  
<h4>Naming Documents with Scanner Pro</h4>

  <img
    class="alignright"
    src="{{ "/assets/2019/02/scanner-pro-workflow.png" | absolute_url }}"
    width="186"
    height="369"
  />


  Scanner Pro is an app David and I both use to scan documents on the go - as
  well as when we're on the road. It has built-in OCR, and Workflows which allow
  you to chain multiple actions together. Most of the time I use a Workflow
  called "Simple Scan" which formats the name to
  <em
    >Scan <code>Year</code>-<code>Month</code>-<code>Day</code>,
    <code>Time</code></em
  >
  and saves the document as a PDF to Dropbox. I usually save to a specific
  folder in Dropbox which Hazel then watches and automatically files certain
  things or me.  
<h4>Airmail Custom Actions for a Trip</h4>

  Airmail is a mail app for power users, especially with its custom actions. I
  have a custom action which forwards the email to TripIt and then moves it to
  my Gmail account's Travel tag, this allows me to find all my travel email
  quickly if I need it, and gets it into TripIt without me needing to remember
  to forward it as well.  
<h4>Quickly Add Travel to your Calendar with Shortcuts</h4>

  This Shortcut isn't really generic, but hopefully, it will inspire some of
  you. To get to the airport I take a tram and then a train (at least most of
  the time). The tram normally takes 11 minutes to get to the train station, and
  then the train should take 16 minutes to get to the airport. While I could use
  the public transit API to get all of the information to figure out my route to
  the airport I prefer to look at the available times in the app and choose
  which one I would prefer to take - before adding this to my calendar. This
  Shortcut asks me for the departure and arrival time for each mode of transport
  (and automatically suggests the arrival time based on the departure time)
  allowing me to just input 2 dates and times most of the time. You can grab it
  here:
  <a href="https://www.icloud.com/shortcuts/26bc7c0e410e4e8baa5c68227a6486e9"
    >Airport Travel</a
  >.  

  If you haven't already listened, make sure to check out
  <a href="https://www.relay.fm/automators/17">episode 17: Live at PodCon</a>!  
**Chapters:**  
<ul>
  <li>00:54: Automating Travel</li>
  <li>01:04: TripIt</li>
  <li>01:57: David's Homegrown TripIt</li>
  <li>03:57: TripIt to OmniFocus Project</li>
  <li>04:51: Packing Lists</li>
  <li>06:11: Rose's Packing Shortcut</li>
  <li>08:55: Scanning on the road</li>
  <li>11:21: Project Templates for Travel</li>
  <li>11:34: Airmail Travel Action</li>
  <li>12:21: Dealing with Email on the Road</li>
  <li>14:47: Rose's Travel Task Management</li>
  <li>16:22: Noise Cancelling Headphones</li>
  <li>17:06: "Here I Am"</li>
  <li>19:38: Sponsor: Express VPN</li>
  <li>21:44: Welcome Back from Seattle</li>
  <li>23:59: Feedback Time</li>
  <li>24:25: Forums</li>
  <li>25:21: iBeacons</li>
  <li>28:11: David tries to convince Rose to be Jane Bond</li>
  <li>30:15: Filing Feedback</li>
  <li>35:57: Creating a Contract</li>
  <li>36:43: List all the applications on your Mac</li>
  <li>38:39: Launch Center Pro NFC Stickers</li>
  <li>39:56: David's Break from Time Tracking</li>
  <li>41:43: Chapter 25</li>
  <li>42:18: Our Favourite Feedback</li>
</ul>
Thank you to our sponsor this week: Express VPN.  
