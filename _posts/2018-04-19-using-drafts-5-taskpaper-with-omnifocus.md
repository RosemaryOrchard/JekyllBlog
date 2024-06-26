---
title: Using Drafts 5 Taskpaper with OmniFocus
last_modified_at: 2021-10-10 00:00
date: 2018-04-19 22:10
type: post
published: true
layout: post
redirect_from:
  - "/2018/04/19/using-drafts-5-taskpaper-with-omnifocus.html"
---
<img class="alignright wp-image-2923 size-thumbnail" src="{{ "/assets/2018/04/Drafts-Capture-Act-150x150.png" | absolute_url }}" alt="" width="150" height="150" />


I have created an any action group for Drafts 5 which is meant to help you create Taskpaper formatted projects or tasks and then send it all along to OmniFocus afterwards.  

<!--more-->

The first thing you will want to do is to create a Draft with the Taskpaper format. This is the last but one action in the action group - the reasoning being you're not likely to need it as often as some of the others! It simply opens a new Drafts with the format set to taskpaper - you can do this yourself by tapping the <code>+</code> icon if you're in a Draft, and then using the <code>Aa</code> button to set the _Syntax Highlighting_ of the current draft to Taskpaper.  
The first action in the group is a tab, this is for iPhone users and iPad users without an external keyboard and it simply inserts a tab wherever the cursor currently is.  
The next action is Placeholder, if you have text selected it will wrap the text in <code>«»</code> characters, and if no text is selected it will insert them. This is ideal for dates in templates you will want to update later.  
The first Due action takes advantage of the natural language parsing that OmniFocus has available via URL Scheme. Again, if you have text selected it will wrap it in <code>@due()</code>, otherwise that will be inserted empty for you to fill in the brackets.  
The Defer, Estimate, Tags, and Context actions work the same way as Due. Tags and context are both available so if you're on the OmniFocus 3 beta or simply want to prepare your templates to work for both 2 and 3 you can already.  
Tags (suggest) offers a list of tags for you to choose from, allows you to choose more than one of them, and inserts them inside <code>@tag()</code>. You will need to edit this script to make it work for you - the <code>"one", "two", "three"</code> is the part that needs changing. Bear in mind that a long list of tags will be annoying to look through most likely. If you want any tags to be pre-selected for you (e.g. you usually add the <code>evening</code> tag to tasks created via Drafts), you can put that into the <code>[]</code> after the tag list.  
Autodone asks you if you want the task or project to be automatically completed when the tasks inside of it are completed and inserts <code>@autodone(true)</code> or <code>@autodone(false)</code>as per your choice.  
The Repeat Method allows you to choose how the task should repeat, and inserts <code>@repeat-method(fixed)</code>, or whichever the relevant choice is.  
The Repeat Rule is very simple, but allows you to choose if a task should be repeated every X days, weeks, months, or years.  
Parallel works the same way Autodone does, if the project should be parallel (actions able to be worked on at the same time) then <code>@parallel(true)</code> is inserted, if not <code>@parallel(false)</code> appears.  
Flagged just inserts <code>@flagged</code> when it is run - which adds a flag to a task.  
Due and Defer are here again - but this time with date and time pickers. This allows you to choose an exact date and time when your task or project is due. I've used European date formatting, but you can modify that to any other date formatting by replacing the <code>"dd-MM-yyyy hh:mm"</code> (for example in North America you might prefer <code>"MM/dd/yyyy hh:mm"</code>).  
Estimate makes another appearance, this time it asks you to choose how many minutes, hours, days or weeks something will take and fills in the <code>@estimate()</code> for you.  
The final action in this set is Taskpaper to OF. This will ask you where you want to save your Draft (as a new project, a new project in a folder, as tasks in a specifc project, or the inbox), go through any <code>«placeholders»</code> you have and help you replace them (important <code>cat</code> is always going to be replaced with whatever you tell the script when it asks you about it, so make sure you to use unique placeholders where necessary!), and then send everything off to OmniFocus. Once you return if it did have placeholders to replace it offers to make a new Draft, update your current Draft, or do nothing.  
This action group is set up as a keyboard group, which should make quick entry easier. You can get the action group from the Draft 5 Action Directory: <a href="https://actions.getdrafts.com/g/1F6">OF Taskpaper</a>  
