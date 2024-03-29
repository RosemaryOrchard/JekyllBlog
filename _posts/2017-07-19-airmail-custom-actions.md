---
title: Airmail Custom Actions
last_modified_at: 2021-10-10 00:00
date: 2017-07-19 08:00
type: post
published: true
layout: post
redirect_from:
  - "/2017/07/19/airmail-custom-actions.html"
---
I've been experimenting more with <a href="http://airmailapp.com">Airmail</a> on iOS recently, specifically the <a href="http://docs.airmailapp.com/airmail-for-ios/custom-actions-airmail-for-iphone">custom actions</a>. Being a regular user of <a href="http://www.rosemaryorchard.com/blog/tag:workflow">Workflow</a> I'm very familiar with the concept - but Airmail does things a little differently.


<a href="http://airmailapp.com/ios"></a>  

<!--more-->

To get started with the custom actions you first need to enable integration with the apps you want to work with - for me this is primarily OmniFocus and Workflow, but not exclusively, this is done in the Services section - and there's everything from Dropbox to Instapaper, and even GitHub.

  
So, what is the purpose of an action? An Airmail action allows you to chain multiple steps together - these can be purely email steps (e.g. forward an email, add a label, archive it), or involving external applications. I'll go through some of mine for you.  

<h2>Receipts</h2>



I prefer to handle receipts as PDFs on my Mac - or to be precise, I let Hazel handle my receipts on my Mac. This means I need to get my receipts to somewhere on my Mac Hazel is watching. I have a Workflow which I usually share a PDF directly to - and Airmail has an option to share the message as a PDF to Workflow, along with a whole host of other options.





The only catch is that Airmail shares a link to the PDF - but it can override the choice you previously made in Workflow to only accept certain document types. As such I added an If - and if the input is a URL I get the contents of it, and then have Workflow file the receipt in my chosen folder in Dropbox. You can get my <a href="https://workflow.is/workflows/3b0ca2be8e614dd19f5c48ad7e5e7dcc">Web Receipts Workflow here</a>.  
Once the receipt has been saved as a PDF and filed I have Airmail delete the Workflow and that's it! One less email in my inbox.  
<h2>Travel</h2>



I use <a href="https://www.tripit.com">TripIt</a> to organise my travel - and TripIt is very good at parsing booking emails for the right data. While they do have an option to scan your inbox, I get enough bookings forwarded to me from my family and friends that this isn't a great option - otherwise I'd be in two places at once and permanently on holiday! (Unless I did a lot of manual management in Tripit.) My preferred solution then is to forward emails to TripIt myself - I then apply my travel label and archive the message. With this custom action I just have to confirm the forwarding of the message and Airmail does the rest for me.  
<h2>Waiting On</h2>



Waiting on is used a lot in <a href="http://gettingthingsdone.com">Getting Things Done</a>, essentially it's a list of things you're waiting on other people for - simple enough. However most of my waiting on 'tasks' come via my email inbox. I send Workflow the title and the link to the email, have it parse that and then add the resulting task to OmniFocus. You can get my <a href="https://workflow.is/workflows/a34e6dbcbb1a4e008a8d751d5dfd69ad">Airmail Waiting On Workflow here</a>.  
<h2>Link to Clipboard</h2>



Airmail actually has a built in action for this, but I use it in parts of other custom actions and it's very handy to know how to get a link to an email as part of a custom action. All I do is use the Workflow action to send the mail link to a Workflow called <a href="https://workflow.is/workflows/7c537bb994a7486a8ee0dd6b895af03d">Copy to Clipboard</a> which has exactly one action - it takes whatever the input is and copies it to my clipboard. (I have this purely for the times when something is being difficult and the copy button is either not available or not working because I'm running a beta iOS).  
<h2>Track Deliveries</h2>



Last for now is Track Delivieries, I use the <a href="https://appsto.re/gb/DGbwr.i">Deliveries App by Junecloud</a>, and Airmail can either share a message to it directly, or as part of a custom action. I start by sharing to Deliveries, then use my Waiting On workflow from above, add an extra label of packages, and then archive the message. This way I can track my package, as well as see in OmniFocus I'm waiting on something.  
