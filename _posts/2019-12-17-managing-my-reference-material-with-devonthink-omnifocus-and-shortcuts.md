---
title: Managing My Reference Material with DEVONthink, OmniFocus and Shortcuts
last_modified_at: 2021-10-10 00:00
date: 2019-12-17 18:00
type: post
published: true
layout: post
tags:
  - DEVONThink
  - OmniFocus
  - Productivity
  - Shortcuts
redirect_from:
  - "/2019/12/17/managing-my-reference-material-with-devonthink-omnifocus-and-shortcuts.html"
---
Reference material is a big challenge, and I find if I don’t set myself up for success from the beginning, then I am most definitely doomed to fail. I found DEVONthink some years ago and really like it for managing my reference material.  

<!--more-->

I realized a while ago that creating a place to store material related to a project when I create my project is critical—if it doesn’t happen then, when will it happen? As I have a strong tendency to reach for my iPad or my iPhone rather than a Mac, I solved this problem with a little help from Shortcuts and X-Callback URLs!  
When you import the shortcut, it asks you for a DEVONthink destination. I keep all of my project material in one database, so I used that as my destination. You could also use a group - or remove the destination components entirely to put everything in the global inbox.  
<figure><img src="{{ "/assets/2019/12/5518B066-B2A7-4AC9-8C02-D478EF85F295.jpeg" | absolute_url }}" alt="Copy the item link in DEVONThink so you can get the ID for Shortcuts." />


<figcaption>Copy the item link in DEVONthink so you can get the ID for Shortcuts.</figcaption>
</figure>
When you run the shortcut, it asks you for a name, you can cheat and add lots of names though (use a return to separate them), and it will run through each item.  
For each one, you can choose if this is a project or a task. For projects, the shortcut automatically creates a group, and for a task, you get the choice of markdown, text, or a group.  
The shortcut creates the DEVONthink item first, then creates the project or task in OmniFocus with a link back to the DEVONthink destination in the note. It’s a simple system but works well for me!  
You can download <a href="https://www.icloud.com/shortcuts/5d6102a575c1464a8ec9e840c44a1bac">DEVONthink And OmniFocus here</a>.  
