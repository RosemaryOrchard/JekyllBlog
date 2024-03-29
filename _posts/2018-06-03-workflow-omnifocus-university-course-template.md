---
title: 'Workflow: OmniFocus University Course'
last_modified_at: 2021-10-10 00:00
date: 2018-06-03 08:00
type: post
published: true
layout: post
tags:
  - OmniFocus
  - University Studies
  - Workflow
redirect_from:
  - "/2018/06/03/workflow-omnifocus-university-course-template.html"
---
![alignright](https://resources.rosemaryorchard.com/images/blog/workflow-omnifocus-university-course-template/workflow-omnifocus-university-course.png)

<!--more-->

The purpose of this Workflow is to add my syllabus to my OmniFocus project for that class. The project will already exist as I have to register for the course, and potentially order course materials or communicate with the course professors before I get the syllabus. Each of my courses is separated into action groups - sometimes the courses divide their materials into weekly blocks, and sometimes they're divided into blocks based on assessments. I always put assessments in their own blocks, because they are broken into sub sections as well.  
This workflow should add each section of work or assessment to OmniFocus as an action group, deferred and due as is appropriate. As such the first thing it does after I input the project name (which is the class name) is to ask me how many sections there are in the course. We then go through every section inputting the name of it. If I know that the course is split into weeks then I modify this action in advance to just use "Week <code>Repeat Index</code>" as the name of the section. I use the start and end dates to set due and defer dates, and then select if this section is to study something or to submit something (study or assignment). This is a menu which allows me to use different actions based on which option is selected.  
In the study section, I input the tasks and format them as taskpaper. In the assignment section I input the name of the assignment and the number of questions it has which generates subtasks for me.  
This whole Workflow generates TaskPaper and adds it to OmniFocus for me.  
Steps:  
<ul>
<li><code>Ask for Input</code>: The course name (which is the project name in OmniFocus)</li>
<li><code>Ask for Input</code>: How many sections or blocks does the course have?</li>
<li><code>Repeat</code>: Going through every section/block
<ul>
<li><code>Ask for Input</code>: The name of the section</li>
<li><code>Ask for Input</code>: The start date</li>
<li><code>Ask for Input</code>: The end date</li>
<li><code>Choose from Menu</code>: Is this a study or assignment section/block</li>
<li><code>Study</code>
<ul>
<li><code>Ask for Input</code>: Input the tasks which need to be completed.</li>
<li><code>Split Text</code>: Break up the lines of tasks</li>
<li><code>Repeat with Each</code>: For every task
<ul>
<li><code>Text</code>: Format it with a tab indent and the <code>-</code> used to indicate a task in TaskPaper</li>
</ul>
</li>
<li><code>Combine Text</code>: Put these tasks back together with line breaks between them,</li>
<li><code>Text</code>: Format the action group here, with the defer and due dates (these are inherited), followed by the tasks which were input and formatted.</li>
</ul>
</li>
<li><code>Assignment</code>
<ul>
<li><code>Ask for Input</code>:</li>
<li><code>Ask for Input</code>:</li>
<li><code>Repeat with Each</code>: For every task
<ul>
<li><code>Text</code>: Format it with a tab indent and the <code>-</code> used to indicate a task in TaskPaper</li>
</ul>
</li>
<li><code>Combine Text</code>: Put these tasks back together with line breaks between them,</li>
<li><code>Text</code>: Format the action group here, with the name of the assignment, defer date and due date and the questions as subtasks.</li>
</ul>
</li>
</ul>
</li>
<li><code>Add TaskPaper to OmniFocus</code>: Put everything we've generated above into OmniFocus.</li>
</ul>
You can get the workflow here: <a href="https://workflow.is/workflows/e70385ca84394cccb7c5d5f827e8e797">OmniFocus University Course</a>  
