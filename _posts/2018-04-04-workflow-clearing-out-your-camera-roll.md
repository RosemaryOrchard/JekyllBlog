---
title: 'Workflow: Clearing Out Your Camera Roll'
last_modified_at: 2021-10-10 00:00
date: 2018-04-04 17:30
type: post
published: true
layout: post
tags:
  - Workflow
redirect_from:
  - "/2018/04/04/workflow-clearing-out-your-camera-roll.html"
---
<img src="https://resources.rosemaryorchard.com/images/blog/workflow-clearing-out-your-camera-roll/workflow-clear-the-camera-roll.png" alt="Clear The Camera Roll"> Sometimes you take screenshots, lots of screenshots. And sometimes you use built in screen recording to capture what's happening on a device. You probably use these features even more frequently if you’re beta testing an app - and that’s how this Workflow came to be. <a href="http://www.twitter.com/nostodnayr">Ryan</a> mentioned in the OmniFocus Beta Slack that his camera roll was suffering with all the screenshots he’s been taking. Challenge accepted. This workflow will help you delete _both_  screenshots and screencasts you’ve taken on your devices.  

<!--more-->

Steps:  
<ul>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Calculator.png" alt="Number" class="workflow-icon"><code>Number</code>: Set this number to be the number of screenshots and screencasts you want to go through.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Photos.png" alt="Get Latest Screenshots" class="workflow-icon"><code>Get Latest Screenshots</code>:  This fetches the number of screenshots chosen above.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Scripting.png" alt="Choose from List" class="workflow-icon"><code>Choose from List</code>: You select which screenshots you want to delete. </li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Photos.png" alt="Delete Photos" class="workflow-icon"><code>Delete Photos</code>: The photos are deleted.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Videos.png" alt="Get Latest Videos" class="workflow-icon"><code>Get Latest Videos</code>: This gets X number of the most recent videos, X being the number right at the top of the Workflow.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Scripting.png" alt="Repeat with Each" class="workflow-icon"><code>Repeat with Each</code>: It checks every picture.
<ul>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Scripting.png" alt="Get Name" class="workflow-icon"><code>Get Name</code></li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Scripting.png" alt="If" class="workflow-icon"><code>If</code>: If the name of the photo contains "Screen"... (Screen recording videos are called something like <code>ScreenRecording_04-04-2018 15-17-54</code>.)
<ul>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Variable.png" alt="Get Variable" class="workflow-icon"><code>Get Variable</code>: Get the actual video, otherwise you just have the name.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Variable.png" alt="Add to Variable" class="workflow-icon"><code>Add to Variable</code>: Add the video to a variable called <code>Screen Recordings</code>.</li>
</ul>
</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Scripting.png" alt="If" class="workflow-icon"><code>Else</code>: It’a not got "Screen" in the name
<ul>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Scripting.png" alt="Nothing" class="workflow-icon"><code>Nothing</code>: We don’t want these videos to be included here.</li>
</ul>
</li>
</ul>
</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Variable.png" alt="Get Variable" class="workflow-icon"><code>Get Variable</code>: Get all those screen recordings.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Scripting.png" alt="Choose from List" class="workflow-icon"><code>Choose from List</code>: Choose which screen recordings you want to delete.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Photos.png" alt="Delete Photos" class="workflow-icon"><code>Delete Photos</code>: Delete the screen recordings. We’re using this action rather than "Delete Files" because the Videos actions outputs a "photo like object".</li>
</ul>
You can get the workflow here: <a href="https://workflow.is/workflows/7573d4ee1c4b44dd80bb5c4be0c431d8">Clear The Camera Roll</a>  
Enjoy clearing your camera roll!  
