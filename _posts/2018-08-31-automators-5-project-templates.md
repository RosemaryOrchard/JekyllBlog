---
title: "Automators 5: Project Templates"
last_modified_at: 2021-10-10 00:00
date: 2018-08-31 20:00
type: post
published: true
layout: post
artwork: automators
tags:
  - Automators
  - Podcast
  - OmniFocus
  - Projects
  - Things
  - Todoist
redirect_from:
  - "/2018/08/31/automators-5-project-templates.html"
---


  Episode 5 of Automators is all about project templates, and how they can help
  you to be more productive. David and I are both OmniFocus users, but project
  templates can be used with almost every task management system out there -
  even Reminders!  

<!--more-->

  The simplest type of project template is a project you can copy - this is
  easily done in both OmniFocus and Things, the advantage is it's easy to set
  up, but it's also static - what you have is what you get.  

  You can also store project templates somewhere else, the places I have used
  are:  
<ul>
  <li>Editorial</li>
  <li>iCloud Drive</li>
  <li>Dropbox</li>
  <li>Drafts</li>
  <li>Workflow/Shortcuts</li>
</ul>

  One thing I have done is to import all of the templates I'd previously saved
  into Dropbox and iCloud Drive into Drafts - this was easily done by pressing
  and holding the <code>+</code> icon which then lets you import a file.  

  Something I use a lot when making templates for OmniFocus is TaskPaper - and I
  even made a
  <a href="https://actions.getdrafts.com/g/1F6">Drafts Action Group</a> to help
  me do so easily. What you can do with OmniFocus and TaskPaper is create a
  template in OmniFocus, copy it and then paste it into a text editor (like
  Drafts) to edit it - this allows you to put "fuzzy dates" in, such as
  "Thursday" or "Monday -2d", the latter evaluating to two days before Monday.
  You can also include <code>«variables»</code> which the TaskPaper to OF action
  will then help you replace.  
I demonstrated how to use this action group in a screencast for you:  
https://youtu.be/xit6JLmbnZY  

  And there's also a blog post all about it:
  <a
    href="https://www.rosemaryorchard.com/blog/using-drafts-5-taskpaper-with-omnifocus"
    >Using Drafts 5 Taskpaper with OmniFocus</a
  >  

  As I mentioned in the podcast, Todoist supports importing a CSV file - and if
  your task manager does too then you can use Numbers or Excel and date math to
  make relative dates.  
So, what kind of project templates might you create?  
<ul>
  <li>Packing Lists</li>
  <li>Publishing a podcast episode</li>
  <li>Writing and submitting an essay/report</li>
  <li>And much more!</li>
</ul>

  While David and I are both primarily OmniFocus users, there are also lots of
  great resources for Things users:  
<ul>
  <li>
    <a
      href="https://support.culturedcode.com/customer/en/portal/articles/2803572-using-applescript-with-things"
      >Using AppleScript With Things - Things Support - Cultured Code</a
    >
    - a 24 page guide.
  </li>
  <li>
    <a
      href="https://thesweetsetup.com/articles/automations-workflows-things-ios/"
      >Things on iOS: The Complete Guide to Automations and Workflows</a
    >
  </li>
  <li>
    <a
      href="https://support.culturedcode.com/customer/en/portal/articles/2803573-things-url-scheme"
      >Things URL Scheme - Things Support - Cultured Code</a
    >
  </li>
  <li>
    <a
      href="https://thesweetsetup.com/three-workflows-quickly-adding-templates-things/"
      >Three workflows for quickly adding project templates and tasks to Things
      on iOS – The Sweet Setup</a
    >
  </li>
  <li>
    And a thread from the Automators forums:
    <a
      href="https://talk.automators.fm/t/help-with-things-3-url-scheme-for-project-templates/1515?u=rosemaryorchard"
      >Help with Things 3 URL Scheme for Project Templates</a
    >
  </li>
  <li>
    Drafts actions:
    <ul>
      <li>
        <a href="https://actions.getdrafts.com/a/1Cx">New Project in Things</a>
      </li>
      <li><a href="https://actions.getdrafts.com/a/1DV">Things Parser</a></li>
    </ul>
  </li>
</ul>

  And the Todoist blog also has a post called
  <a
    href="https://blog.todoist.com/2015/11/19/new-way-to-create-todoist-templates/"
    >A whole new way to create and share Todoist Templates - Todoist Blog</a
  >.  

  One of the workflows/Shortcuts I mentioned on the podcast was one to create an
  essay project, the options here are somewhat simplified, but demonstrate quite
  nicely how this works:  
<ul>
  <li>
    <a href="https://workflow.is/workflows/b26737b265064cfcbe1e7ff96bef7189"
      >Essay to OmniFocus</a
    >
  </li>
  <li>
    <a href="https://workflow.is/workflows/22bd0892decf40a9a9b10aebf5a84701"
      >Essay to OmniFocus</a
    >


    As the URL Scheme in Things doesn't support adding headings I formatted the
    project in Things somewhat differently - however you can import a JSON which
    does support headings format so if you're willing to get stuck in I'm sure
    you can figure it out!
  </li>
</ul>

  Another Workflow/Shortcut I mentioned is the iOS implementation of these
  scripts:  
<ul>
  <li>
    <a href="http://curtclifton.net/poptemp"
      >Populate Template Placeholders—curtclifton.net</a
    >
  </li>
  <li>
    <a
      href="https://www.macsparky.com/blog/2011/1/14/tweaking-omnifocus-project-template-applescript.html"
      >Tweaking OmniFocus: Project Template Applescript — MacSparky</a
    >
  </li>
  <li>
    <a href="https://github.com/lemonmade/templates"
      >Chris Suave: Templates Applescript for OmniFocus.</a
    >


    What they allow you to do is to store a project in OmniFocus and then run
    AppleScript, which will parse out <code>«variables»</code> and create a new
    project, with the help of the share sheet and two Workflows I recreated this
    functionality and wrote about it on Colter Reed's blog:
    <a
      href="https://colterreed.com/how-to-fill-out-omnifocus-project-templates-with-workflow/"
      >How to Fill Out OmniFocus Project Templates with Workflow | Colter
      Reed</a
    >. What is probably interesting for you is that this is not one Workflow but
    two, and the second one is recursive - that is it calls itself until a
    condition is met, for this workflow that there are not more variables to
    parse. Using Workflows/Shortcuts as a function is something I rarely see but
    is extremely useful.
  </li>
</ul>

  David also did a great screencast about how he uses Shortcuts to make project
  templates:


  <a href="https://youtu.be/6FMS4c3S9p8">plugin:youtube</a>  

  Make sure to check out the
  <a href="https://relay.fm/automators/5">show notes</a> for all of the links,
  and I look forward to discussing this episode and all of your examples for
  project templates <a href="https://talk.automators.fm">in the forums</a>!  
