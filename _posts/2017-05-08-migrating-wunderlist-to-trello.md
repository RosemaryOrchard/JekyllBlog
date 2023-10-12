---
title: Migrating Wunderlist to Trello
last_modified_at: 2021-10-10 00:00
date: 2017-05-08 08:00
type: post
published: true
layout: post
redirect_from:
  - "/2017/05/08/migrating-wunderlist-to-trello.html"
---
As <a href="https://techcrunch.com/2017/04/19/microsoft-to-shut-down-wunderlist-in-favor-of-its-new-app-to-do/">Wunderlist is sadly shutting down</a>, I decided that I would move before I was pushed - so after some evaluation of my uses (shared lists primarily, and nothing that would end up in <a href="http://www.rosemaryorchard.com/blog/tag:omnifocus">OmniFocus</a>) I decided on <a href="https://trello.com/roseorchard/recommend">Trello</a>. They have optional Trello Gold which means I can pay them and make them more likely to stick around - ideal!  

<!--more-->

Then there was the challenge: "how do I move my data from Wunderlist to Trello?". There are a few paid tools out there, but as much as I'm happy to pay for a good service - I do love free! As such I decided to do it myself.  

The first step was exporting all of my data from Wunderlist. Inside of the Wunderlist web app, inside of your account settings you can create a backup. Unfortunately this brought me to my first problem.  

I suspect that Wunderlist doesn't play nicely with Safari, but giving me a file called "Unknown" with no extension wasn't very nice either way. Thankfully a quick Google told me that this is in JSON format and so I renamed it, and put it in my Workflow folder in iCloud.  

That done it was time to get started! The first thing to do was to poke around at the data and see what it was like. Workflow's "Get Dictionary from Input" was immensely helpful here, and I quickly managed to isolate the lists and tasks. I ended up creating two Workflows here, one which turns each Wunderlist list into a board, with a list - both of which have the name of the Wunderlist list, and then one which fetches all the tasks and puts them onto said list on the correct board.  
<a href="https://workflow.is/workflows/f1f2ce60833b4f8597d39c6a9e72b321">Wunderlist to Trello Boards and Lists</a> and <a href="https://workflow.is/workflows/e37a39a91c194782bbe56a5519d621ac">Wunderlist To Trello Tasks</a> are the two Workflows here - I separated them to allow you to modify them separately more easily. Simply run the first one, and then the second one and off you go!  
