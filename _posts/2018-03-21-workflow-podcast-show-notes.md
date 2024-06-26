---
title: 'Workflow: Mac Power Users & Podcast Show Notes'
last_modified_at: 2021-10-10 00:00
date: 2018-03-21 08:00
type: post
published: true
layout: post
redirect_from:
  - "/2018/03/21/workflow-podcast-show-notes.html"
---
This is a very simple Workflow I use to get the show notes for the Mac Power Users podcast, I use it when I’m listening on another device and I don’t want to grab it or interrupt what I’m doing. It’s quite simple, just 3 steps in fact.  

<!--more-->

<h4>Steps:</h4>
<ul>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Scripting.png" alt="Scripting" class="workflow-icon"><code>Ask for Input</code>: This asks you for the episode number.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/URL.png" alt="URL" class="workflow-icon"><code>URL</code> This creates the URL for the show notes.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Web.png" alt="Web" class="workflow-icon"><code>Open URLs</code> And this opens the above URL.</li>
</ul>
You can get the workflow here: <a href="https://workflow.is/workflows/4cf72716fa3d4c79bdb36eccc9dabf13">Mac Power Users Show Notes</a>. It’s designed to run in the today widget.  
<img src="https://resources.rosemaryorchard.com/images/blog/workflow-podcast-show-notes/workflow-podcast-show-notes.png" alt="Podcast Show Notes"> Now, you might listen to more than one podcast (<code>dramatic music</code>) - and you probably don’t want one of these for every podcast you listen to, that’s just not manageable. But with some help from the dictionary action you can make it much easier.  
<h4>Steps:</h4>
<ul>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Scripting.png" alt="Scripting" class="workflow-icon"><code>Dictionary</code>: This is where you store the list of the friendly name for the podcast and the URL which comes before the show number, so in the case of the Mac Power Users podcast, that is <code>http://www.relay.fm/mpu/</code> - attaching an episode number (such as 318) gives you a link directly to the show notes.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Scripting.png" alt="Scripting" class="workflow-icon"><code>Ask for Input</code>:  This asks you for the episode number.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Variable.png" alt="Variable" class="workflow-icon"><code>Get Variable</code>:  This grabs the dictionary from above.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Scripting.png" alt="Scripting" class="workflow-icon"><code>Choose from List</code>:  Here’s where you choose the podcast you’re listening to.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/URL.png" alt="URL" class="workflow-icon"><code>URL</code> This creates the URL for the show notes.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Web.png" alt="Web" class="workflow-icon"><code>Open URLs</code> And this opens the above URL.</li>
</ul>
You can get the workflow here: <a href="https://workflow.is/workflows/6faf80b0404e4b6eb1b5fa3f5de3f9e2">Podcast Show Notes</a>  
