---
title: "Automators 1: Automating Calendar Events"
last_modified_at: 2021-10-10 00:00
date: 2018-07-06 17:30
type: post
published: true
layout: post
artwork: automators
tags:
  - Automators
  - Podcast
  - AppleScript
  - Automators
  - Calendar Events
  - IFTTT
  - Keyboard Maestro
  - Workflow
permalink: "/blog/automators-episode-1/"
redirect_from:
  - "/2018/07/06/automators-episode-1.html"
---


  This week's episodes of
  <a href="https://www.relay.fm/automators/1">The Automators</a> is focused on
  calendar event creation. There are many ways you can automatically create
  calendar events, and it's useful to be able to do so, to avoid losing
  information. You can also use calendar events as a trigger to do something -
  which we cover towards the end. Below there are details of all the automations
  we cover, including 4 (really, four!) screencasts.  

<!--more-->

<h2>Workflow: Calendar Event Templates</h2>

  <img
    class="alignright"
    src="{{ "/assets/2018/07/workflow-calendar-event-templates.png" | absolute_url }}"
    width="163"
    height="163"
  />  

  This is a very simple Workflow which asks me for the date and time of the
  event, and then what kind of event this is (the demo has 3 examples) - it then
  adjusts the time to add an appropriate length for the appointment and adds it
  to my calendar. This is very useful because I can never remember what floor my
  dentist is on or exactly where to turn to find my hairdresser - so I can add
  this to the notes. Even if the places you frequent are not hidden like mine
  are you can still use this!


  You can get the workflow here:
  <a href="https://workflow.is/workflows/434bd4cf625f419282aee780d3414a4c"
    >Calendar Event Templates</a
  >
  Make sure to read on to find out about the "Run Workflow" action at the end of
  it.  
<h2>Workflow: Add Event To Work Calendar</h2>

  <img
    class="alignleft"
    src="{{ "/assets/2018/07/workflow-add-event-to-work-calendar.png" | absolute_url }}"
    width="143"
    height="143"
  />This workflow follows the first one, and is in fact run by it - or could be.
  It simply asks you if the appointment you've made is during working hours, and
  if you say yes, adds an event that starts half an hour before and ends half an
  hour after the appointment you've just created to your calendar. Make sure to
  tweak the calendar setting here! You can get the workflow here:
  <a href="https://workflow.is/workflows/7028582e422441209e36690ab4621b94"
    >Add Event To Work Calendar (Menu)</a
  >  

  Of course, you can automate this too, this formats the date of the event as
  one letter (so Monday becomes M, Friday becomes F), and if it's not Saturday
  or Sunday, checks if the event starts after 8 am but before 6pm - if yes it
  adds an event to your calendar. It's not _insanely_ complicated, but
  it's not as simple as the Workflow above.


  You can get the workflow here:
  <a href="https://workflow.is/workflows/3a0dd365141d4146981c1297148f2a24"
    >Add Event To Work Calendar (Auto)</a
  >  
<h2>David's Hyper Scheduling Workflow</h2>

  <img
    class="alignright"
    src="{{ "/assets/2018/07/workflow-block-schedule.png" | absolute_url }}"
    width="144"
    height="144"
  />Since February David has had an ongoing
  <a
    href="https://www.macsparky.com/blog/2018/2/the-hyper-scheduling-experiment"
    >Hyper-Scheduling Experiment</a
  >, which involves scheduling blocks of time in his calendar to provide a
  framework throughout his day. You can see his Workflow to generate some of the
  core blocks here.  
https://youtu.be/mRDUdsRBiIk  

  You can get the workflow here:
  <a href="https://workflow.is/workflows/4568f7c24b8e415c9e77305b26e4768e"
    >Block Schedule</a
  >  
<h2>Add Travel Time</h2>

  <a
    href="https://resources.rosemaryorchard.com/images/blog/automators-episode-1/workflow-travel-time.png"
    ><img
      class=""
      src="{{ "/assets/2018/07/workflow-travel-time.png" | absolute_url }}"
      width="100"
      height="100" /></a
  >Here David walks you through how his Workflow to add travel time events to
  your calendar works.  
https://youtu.be/Do6UWlnO_5g  

  You can get the workflow here:
  <a href="https://workflow.is/workflows/9bd57fd605034d3bade12d8486b80d7e"
    >Travel Time</a
  >  
<h2>Repeating Events</h2>

  Of course, one of the simplest ways to automate calendar event creation is
  repeats - and you can go from very simple up to fairly complex within that.
  The simplest repeats are every day/week/month/year, but if you go into the
  <code>Custom...</code> options then you can create repeats such as "On the
  first weekday of every month".  

  <a
    href="https://resources.rosemaryorchard.com/images/blog/automators-episode-1/calendar-simple-repeat-options.png"
    ><img
      src="{{ "/assets/2018/07/calendar-simple-repeat-options.png" | absolute_url }}"
  /></a>  

  <a
    href="https://resources.rosemaryorchard.com/images/blog/automators-episode-1/calendar-simple-repeat-options.png"
    ><img
      class=""
      src="{{ "/assets/2018/07/calendar-weekly-repeat-options.png" | absolute_url }}"
      width="441"
      height="423" /></a
  >


  <a
    href="https://resources.rosemaryorchard.com/images/blog/automators-episode-1/calendar-monthly-repeat-options.png"
    ><img
      class=""
      src="{{ "/assets/2018/07/calendar-monthly-repeat-options.png" | absolute_url }}"
      width="413"
      height="495"
  /></a>  
<h2>Copy and paste</h2>

  If repeating events count as automation (they do!) then copying and pasting
  events does as well.  
<ul>
  <li>
    <code>CMD+D</code> allows you to duplicate an event, and then you can drag
    and drop it.
  </li>
  <li>
    <code>CMD+C</code> and then <code>CMD+V</code> lets you paste, if you select
    a new date before you paste then the event is automatically added to that
    day. In many apps you can even paste it in at the time you have selected.
  </li>
  <li>
    Fantastical on iOS gives you the option to duplicate an event when you tap
    and hold on it, or when you swipe, and tap "More...", BusyCal allows you to
    duplicate an event by force touching it. I personally prefer Fantastical as
    it immediately asks me for the new date where as with BusyCal you need to
    edit the new event.
  </li>
</ul>

  <a
    href="https://resources.rosemaryorchard.com/images/blog/automators-episode-1/fantastical-duplicate-event.png"
    ><img
      class=""
      src="{{ "/assets/2018/07/fantastical-duplicate-event.png" | absolute_url }}"
      width="359"
      height="720" /><img
      class=""
      src="{{ "/assets/2018/07/busycal-duplicate-event.png" | absolute_url }}"
      width="357"
      height="716"
  /></a>  
<h2>Workflow: Copy a Calendar Event</h2>

  <a
    href="https://resources.rosemaryorchard.com/images/blog/automators-episode-1/workflow-copy-calendar-event.png"
    ><img
      class="alignright"
      src="{{ "/assets/2018/07/workflow-copy-calendar-event.png" | absolute_url }}"
      width="155"
      height="155" /></a
  >This Workflow lets you choose from calendar events, and uses the chosen item
  to create a new event. It is currently set to use events from today, but you
  can easily change the filter in the "Find Calendar Events" action to look in
  the last week, the next week, or any time period of your choice.  
https://youtu.be/BNYbLxzKx2M  

  <a
    href="https://resources.rosemaryorchard.com/images/blog/automators-episode-1/workflow-copy-calendar-event-detail.png){.image-center"
    ><img
      src="{{ "/assets/2018/07/workflow-copy-calendar-event-detail.png" | absolute_url }}"
  /></a>  

  You can get the workflow here:
  <a href="https://workflow.is/workflows/ac14868356bd40a4b9223bbac1a844df"
    >Copy Calendar Event</a
  >  
<h2>Parsing a list of events with Numbers</h2>

  I first mentioned this automation in
  <a href="https://www.relay.fm/mpu/418">episode 418 of the Mac Power Users</a>,
  this is designed to help you take a list of events and quickly add them to the
  right calendars. As David mentioned on the podcast you could also use it to
  calculate dates backwards from a specific event (he used a trial as an
  example) to add other events or deadlines to your calendar.  
https://youtu.be/tvlrZpEklbw  

  You can
  <a
    href="https://www.dropbox.com/s/mxx77d2bblqgt6k/Fantastical%20Calendar%20Event%20Creation.numbers?dl=1"
    >download the spreadsheet here</a
  >.  

  The Keyboard Maestro Macro is very simple, it splits the text on your
  clipboard into lines, and then runs the following AppleScript on each line.  
<pre><code class="language-applescript">tell application "Keyboard Maestro Engine" to set myEvent to getvariable "Event"

tell application "Fantastical 2"
    parse sentence myEvent with add immediately
end tell</code></pre>

  This AppleScript merely sets a local variable to the Keyboard Maestro variable
  for the line, and then uses Fantastical's AppleScript support to get it to
  parse the event and add it straight to your calendar. If you wanted to
  evaluate each event before it gets added then you would remove the
  <code>with add immediately</code>.  

  <a
    href="https://resources.rosemaryorchard.com/images/blog/automators-episode-1/keyboard-maestro-macro-clipboard-to-fantastical-lines.png){.image-center"
    ><img
      src="{{ "/assets/2018/07/keyboard-maestro-macro-clipboard-to-fantastical-lines.png" | absolute_url }}"
  /></a>  

  You can download this
  <a
    href="https://www.dropbox.com/s/0hthy74msa5j1ti/Add-clipboard-events-to-Fantastical.kmmacros?dl=1"
    >Keyboard Maestro Macro here</a
  >  

  <img
    class="alignright"
    src="{{ "/assets/2018/07/workflow-clipboard-events-to-fantastical.png" | absolute_url }}"
    width="196"
    height="196"
  />  

  You can also make this system iOS friendly in two ways, the Numbers sheet
  itself of course works on iOS. But you can do two things with the list of
  events it generates, the first is to use a Workflow,
  <a href="https://workflow.is/workflows/8be06c81e6f4408687a1a5ca1e8b772d"
    >Clipboard Events To Fantastical</a
  >
  which goes through all the lines on your clipboard adding them to Fantastical
  for you. The second way is to use Drafts, with the
  <a href="https://actions.getdrafts.com/a/1ED">Events in Fantastical</a> action
  provided by Agile Tortoise.  

  As mentioned in the show, David has a great series of
  <a href="https://flexibits.com/fantastical/videos"
    >video tutorials for Fantastical</a
  >
  where he guides you through the core features and some of the syntax options.  
<h2>Adding event with AppleScript</h2>

  As we mentioned in the show, AppleScript is not the most flexible when it
  comes to adding events to your calendar. However it is definitely possible! I
  highly recommend the
  <a
    href="https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/CalendarScriptingGuide/Calendar-CreateanEvent.html#//apple_ref/doc/uid/TP40016646-CH94-SW3"
    >official Apple documentation</a
  >
  as a starting point for a script that _works_, There's also a library
  called
  <a
    href="https://www.macosxautomation.com/applescript/apps/Script_Libs.html#CalendarLib_EC"
    >CalendarLib</a
  >
  which is linked on the very helpful
  <a href="http://macosautomation.com">macosautomation.com</a>.  

  Of course, you can also use AppleScript to control Fantastical - as
  demonstrated in my Keyboard Maestro Macro above, here's their
  <a href="https://flexibits.com/fantastical/help/integration-with-other-apps"
    >documentation for integration with other apps</a
  >.  
<h2>Cloud Based Automation</h2>

  Using web services like IFTTT or Zapier to automate things based on calendar
  events can be limited if you're not using the "right" calendar system - so you
  can have IFTTT trigger things based on an event starting in Google calendar,
  but not in iCloud calendar. You can however use a variety of triggers from
  time and date, to RSS feed entries, to add events to your calendar on almost
  any system - as long as if it's iCloud you have the IFTTT app installed.  
<h2>Favourite Workflows</h2>

  In this last part of the show we talked about our two favourite automations
  related to calendars.  
<h3>David - Meeting Confirmation</h3>

  <img
    class="alignright"
    src="{{ "/assets/2018/07/workflow-meeting-confirmation.png" | absolute_url }}"
    width="190"
    height="190"
  />  

  This workflow is really useful if you have meetings that you need to remind
  other people of, David actually has two - one for in person meetings, and one
  for scheduled calls. You can get them here:  
<ul>
  <li>
    <a href="https://workflow.is/workflows/2995a75e01ef4bad9295a9f91d98d05d"
      >Meeting Confirmation</a
    >
  </li>
  <li>
    <a href="https://workflow.is/workflows/0e2c5184e2c647a39dfb999f11b6dc62"
      >Phone Confirmation</a
    >
  </li>
</ul>
<h3>Rose - Workflow: Event Review</h3>

  <a
    href="https://resources.rosemaryorchard.com/images/blog/automators-episode-1/workflow-event-review.png"
    ><img
      class="alignright"
      src="{{ "/assets/2018/07/workflow-event-review.png" | absolute_url }}"
      width="140"
      height="140" /></a
  >I use this Workflow to help me review the events that have happened in the
  last week, as well as to prepare tasks for appointments in the upcoming week.
  This adds the calendar events from last week to a Drafts note, and combines
  any tasks you note down for the next week into Taskpaper and adds them to
  Omnifocus.  

  You can get the workflow here:
  <a href="https://workflow.is/workflows/cda1965b59ae4ef19ece6958be097187"
    >Event Review</a
  >  
