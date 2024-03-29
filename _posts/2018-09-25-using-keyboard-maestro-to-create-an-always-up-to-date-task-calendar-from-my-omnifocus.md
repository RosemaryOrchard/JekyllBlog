---
title: Using Keyboard Maestro to Create an Always Up to Date Task Calendar from My OmniFocus
last_modified_at: 2021-10-10 00:00
date: 2018-09-25 12:49
type: post
published: true
layout: post
tags:
redirect_from:
  - /blog/2018/09/25/using-keyboard-maestro-to-create-an-always-up-to-date-task-calendar-from-my-omnifocus
  - /blog/2018/09/25/using-keyboard-maestro-to-create-an-always-up-to-date-task-calendar-from-my-omnifocus.html
---


  OmniFocus 2 had a calendar you could subscribe to, which gave you a calendar
  view of your tasks. Unfortunately just because of internet connections and
  syncing times which was always a little flakey (completed tasks would hang
  around for a while) and didn't have all of the options I wanted. Unfortunately
  very few people used this service so it was discontinued in OmniFocus 3 - but
  I have an alternative!  

  Someone in the OmniFocus Slack pointed me to
  <a
    href="https://discourse.omnigroup.com/t/applescript-for-syncing-of-tasks-to-apple-calendar/32054/3?u=rosemaryjayne"
    >this post</a
  >
  in the OmniFocus forums to help you create calendar events from your OF
  database and I got stuck in.  

  The first thing I decided was that OmniFocus should have its own calendar,
  this made life much easier later so I highly recommend you do this too. The
  next step was to decide how long events should be input for if they have no
  estimated time. The old built in option used an hour which I found too long so
  I set mine to 30 minutes.  

  I am using Keyboard Maestro to run this script hourly, but to prevent
  duplicate events showing up it makes sense to delete the existing events
  first. There's no finesse here, if it's in this calendar it gets deleted -
  this is where having a dedicated calendar makes life easier, you
  _could_ write AppleScript to just delete specific calendar events, or
  even to track which tasks in OmniFocus have been created or edited since the
  script last ran - but I was aiming for the simplest and fastest solution here.  
On to the code itself  
<pre><code>property calendar_name : "OmniFocus" -- This is the name of your calendar
property default_duration : 30 --minutes

-- Rosemary Orchard
-- Modified from a script by unlocked2412
-- This creates calendar events for tasks which have a due date, if an estimated time is not set then the task defaults to 30 minutes in length

tell application "Calendar"
   set calendar_element to calendar calendar_name
 tell calendar calendar_name
        set theEvents to every event
       repeat with current_event in theEvents
         delete current_event
       end repeat
 end tell
end tell

tell application "OmniFocus"
  tell default document
      set task_elements to flattened tasks whose ¬
           (completed is false) and (due date ≠ missing value)
        repeat with item_ref in task_elements
          -- GET OMNIFOCUS TASKS
         set the_task to contents of item_ref
           set task_name to name of the_task
          set task_note to note of the_task
          set task_due to due date of the_task
           set task_estimate to estimated minutes of the_task
         set task_url to "omnifocus:///task/" &amp; id of the_task
          if task_estimate is missing value then set task_estimate to default_duration
           -- BUILD CALENDAR DATE
         set end_date to task_due
           set start_date to start_date - (task_estimate * minutes)
           -- CREATE CALENDAR EVENT
           tell application "Calendar"
                tell calendar_element
                  if not (exists (first event whose (start date = start_date) and (summary = task_name))) then
                       make new event with properties ¬
                           {summary:task_name, start date:start_date, end date:end_date, url:task_url} at calendar_element
                    end if
             end tell
           end tell
       end repeat
 end tell
end tell
</code></pre>

  To summarise: Every incomplete task with a due date is added to the calendar.  
<ul>
  <li>The name of the task becomes the name of the event.</li>
  <li>The task note becomes the event note</li>
  <li>
    If the task has an estimated duration this is used, otherwise the event is
    set to whatever the default_duration property is at the top of the list (30
    minutes in this example)
  </li>
  <li>
    The due date and the duration of the event are used to calculate the start
    date
  </li>
  <li>The URL of the event is set to be a URL back to the task</li>
</ul>

  <img
    src="{{ site.baseurl }}/assets/2018/09/DCCD14E2-E31B-455C-9702-0CB245100C88.png"
    alt="Graphical view of the Keyboard Maestro Macro"
  />  

  I don't use the calendar much myself (preferring Fantastical) so I also have
  Keyboard Maestro quit the calendar afterwards for me.  

  This Macro uses the cron timer in Keyboard Maestro to run hourly, I've added
  it to a specific group so it only runs on one of my Macs too. When you
  download it you will need to enable it, first make sure you create an
  OmniFocus calendar though, and if you give this calendar a different name then
  you'll need to update the Macro too.  

  This approach has several advantages over the original OmniFocus
  implementation:  
<ul>
  <li>I can sync this calendar, and store it in whichever service I like.</li>
  <li>I can control the default length of events.</li>
  <li>I could choose to exclude certain events if I wished to.</li>
  <li>
    It could be a jumping off point for other scripts - such as a calendar of
    events you have completed if you wanted one of those.
  </li>
</ul>

  You could of course use other approaches to run the script automatically, or
  run it manually when you want to, it's entirely up to you!  

  The script can be downloaded
  <a
    href="https://www.dropbox.com/s/kksd8xf0zo5e5fs/Auto%20Update%20OmniFocus%20Calendar.kmmacros?dl=0"
    >here</a
  >.  