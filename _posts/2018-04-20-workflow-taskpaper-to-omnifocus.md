---
title: 'Workflow: Taskpaper to OF'
last_modified_at: 2021-10-10 00:00
date: 2018-04-20 20:00
type: post
published: true
layout: post
redirect_from:
  - "/2018/04/20/workflow-taskpaper-to-omnifocus.html"
---
<img src="https://resources.rosemaryorchard.com/images/blog/workflow-taskpaper-to-omnifocus/workflow-taskpaper-to-of.png" alt="Taskpaper To OF"> This is a very simple Workflow which allows you to add TaskPaper formatted tasks or projects to your preferred place in OmniFocus  

<!--more-->

Steps:  
<ul>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Calculator.png" alt="Count" class="workflow-icon"><code>Count</code>: This checks for input.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Scripting.png" alt="If" class="workflow-icon"><code>If</code>: If there is no input...
<ul>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Text.png" alt="Text" class="workflow-icon"><code>Text</code>: Show you your clipboard and allow you to edit it.</li>
</ul>
</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Scripting.png" alt="If" class="workflow-icon"><code>Else</code>
<ul>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Variable.png" alt="Get Variable" class="workflow-icon"><code>Get Variable</code>: Get the input you provided to the Workflow</li>
</ul>
</li>
<li><img src="{{ "/assets/2018/04/" | absolute_url }}" alt="Add TaskPaper to OmniFocus" title="Add TaskPaper to OmniFocus" /> <code>Add TaskPaper to OmniFocus</code>: This asks you to choose where you want to add the TaskPaper: Inbox,  Projects, Folder, Project, or Task. </li>
</ul>
You can get the workflow here: <a href="https://workflow.is/workflows/10f57be46f3f4c3da9afca67be329c3d">Taskpaper To OF</a>  
