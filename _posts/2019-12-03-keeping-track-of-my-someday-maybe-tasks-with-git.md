---
title: Keeping Track of My Someday & Maybe Tasks with Git
last_modified_at: 2021-10-10 00:00
date: 2019-12-03 18:00
type: post
published: true
layout: post
tags:
  - Nested Folders
  - Podcast
redirect_from:
  - "/2019/12/03/keeping-track-of-my-someday-maybe-tasks-with-git.html"
---


  Someday and maybe tasks and projects are one of those things where I can never
  seem to find the perfect system. I’ve tried putting these things in OmniFocus
  and tagging them, using Trello (which I still use, but for different purposes)
  and I know there has been more than one paper planner over the years!  

<!--more-->

  Some of you may be asking “what is a someday maybe task?”. The name comes from
  Getting Things Done by David Allen, the idea is something is a task or project
  you want to do, but you can’t work on it right now - so you put it on a list
  called “Someday/Maybe” to get around to when the time is right.  

  A few months ago I turned to Git to try and solve my problem. There were a few
  features I knew I wanted from a system:  
<ul>
  <li>
    Some interoperability with OmniFocus to make it easy to take things out as
    well as put things back in, or something I could easily script.
  </li>
  <li>
    The ability to track what changed, when, and optionally _why_ .
  </li>
  <li>The ability to tweak my system easily without rebuilding it.</li>
  <li>Automation options.</li>
</ul>
<pre><code>- [ ] This is a sample task in the format I started with
</code></pre>

  I started in Drafts, using the task format. This is nice and visual but
  doesn’t offer all the other features I wanted without setting up lots of
  actions and cobbling things together. Drafts has versions - which satisfies my
  want to be able to look back in time, but it lacks explicit change messages
  connected to these. While Drafts is the right tool for many jobs, it wasn’t
  quite what I was looking for here.  

  Next, I did some digging around and stumbled across my old friends
  <a href="https://www.barebones.com/products/bbedit/">BBEdit</a> and
  <a href="https://www.textasticapp.com">Textastic</a>. These are my preferred
  text-based file editing apps on macOS and iOS, but alone neither of them
  really hit the spot - until I decided to take some lessons from the
  professional side of my life and use Version Control.  

  Version Control systems are designed for programming, so you can track who
  changed what, when, and assuming they wrote a decent commit message to
  accompany the change, _why_. There are quite a few services out there
  offering these, I chose to use Git and to use GitLab for this. (That said, the
  sample to accompany this blog post is on GitHub because I know most people are
  more familiar with that!)  

  Now, I can make a change to my Someday/Maybe lists from any device, including
  the web, and just type why I changed it. Version control, in this case, Git,
  automatically stores what changed and when. You can even do a diff, compare
  two files side by side so see exactly what was added or removed!  

  Now it’s time to get into the nitty-gritty! Let’s start with the apps. As
  mentioned above, on macOS I use BBEdit, this has Git integration so I can
  theoretically do everything with that. That said, sometimes I switch up my
  apps so I also have
  <a href="https://www.sourcetreeapp.com">SourceTree</a> around to handle the
  Git stuff. I _could_ use the command line, but I usually don’t want to.
  On iOS I use two apps
  <a href="https://workingcopyapp.com">Working Copy</a> and Textastic. There’s
  <a
    href="https://www.textasticapp.com/v8/manual/integration_other_apps/git_client_working_copy.html"
    >good documentation on how to connect the two of them together</a
  >
  so I won’t go into detail on that here. To be clear, I use Working Copy for
  the Git side of things and Textastic for the writing.  

  Next up: Files. I have two primary lists, Someday and Maybe. Someday is “I
  really want to do this and will make time for it, but that time is not now”,
  whereas Maybe is “I like the sound of this”. Projects/tasks stay within these
  lists until they become unwieldy. If a project has more than 10 tasks that I
  want to document I create a special list for it. To keep things organised I
  start these file names with an underscore (_) and then add a note below the
  task to see that file.  

  Finally: Format. This took a while to nail down. As I mentioned I started in
  Drafts so as of when I recorded an episode of
  <a
    href="https://nestedfolderspodcast.com/podcast/episode-11-someday-maybe-never/"
    >Nested Folders 11: Someday/Maybe/Never</a
  >
  I was still using <code>- [ ]</code> to indicate a task. This does give you
  the look of pretty checkboxes - but the point of your Someday/Maybe list isn’t
  to keep of what you have _done_, but what you want _to do_. This
  means I would never check the tasks off. Instead, I’ve changed to just
  Taskpaper (at least the elements that OmniFocus uses) as this allows me to
  copy items over directly when I am ready to do so, and also to export easily.  

  Now I can update my someday/maybe list whenever I like, across devices, and
  see what I changed, and when. If you want to see a sample of this check out my
  <a href="https://github.com/RosemaryOrchard/Someday-Maybe-Sample"
    >GitHub Repository</a
  >
  for a sample!  
