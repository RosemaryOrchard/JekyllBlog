---
title: Good Morning Computer
last_modified_at: 2021-10-10 00:00
date: 2018-02-13 20:00
type: post
published: true
layout: post
tags:
  - Workflow
redirect_from:
  - "/2018/02/13/good-morning-computer.html"
---
A while ago in the Mac Power Users Facebook Group I was challenged to make a Workflow which would tell the user about their upcoming day. When it runs Workflow will say something like this:  

<!--more-->

<blockquote>
Good morning Rose, it is 07:38.


In Vienna the weather will be mixed precipitation throughout the week, with temperatures rising to 6°C on Friday..


The current temperature is 0 degrees celcius.


There is a 11% chance of rain.


Your iPad has 80% battery.


Your calendar events for today are Shrove Tuesday, Work.


The top news headlines for today are:  
<ol>
<li>
</li>
<li>
</li>
<li>
</li>
<li>
</li>
<li>
</li>
<li>
</li>
</ol>
</blockquote>
<blockquote>
Here is some of your favourite music:  
</blockquote>
After it speaks this it then plays some of my favourite music (shuffling from a playlist I chose).  
So, how does this all work?  
When you import the Workflow it asks you three questions, what you name is, your Dark Sky Weather API, and the RSS feed of your favourite news source.  
![https://darksky.net/dev/docs](https://resources.rosemaryorchard.com/images/blog/good-morning-computer/workflow_import_questions.png)
Next the Workflow gets the data we need:  
<ul>
<li>the date</li>
<li>the titles of the last 6 items from the RSS feed</li>
<li>the current location and the name of it</li>
<li>the weather for your current location</li>
<li>the kind of device you're using</li>
<li>the battery level of the device you're using</li>
<li>your calendar events for today</li>
</ul>
Then this information is inserted into the text, let's look at that again.  
<blockquote>
Good morning **Name**, it is **Current Time**.


In **City** the weather will be **Weather Summary**.


The current temperature is **Temperature degrees celcius**.


There is a **Rain %**% chance of rain.


Your **Device Model** has **Battery Level**% battery.


**Calendar Events.**


The top news headlines for today are **Headlines**.


Here is some of your favourite music:  
</blockquote>
Everything in bold is a variable, replaced with data we either fetched from the internet, or collected from the device. After this text all that Workflow has to do is use the speak text action, and the play music action.  
There are two current versions of the Workflow, <a href="https://workflow.is/workflows/94ba7b07407948bdbabccfdb4c1d63fa">an imperial version for those who prefer Farenheit</a> and a <a href="https://workflow.is/workflows/c9964e848eee49c6a3b4290f00338322">metric version for those who prefer Celsius</a>. If you download either of these you can have your device talk to you in the morning, and tell you about your day.  
