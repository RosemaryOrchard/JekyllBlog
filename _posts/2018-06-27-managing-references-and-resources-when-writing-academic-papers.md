---
title: Managing References and Resources When Writing Academic Papers
last_modified_at: 2021-10-10 00:00
date: 2018-06-27 08:00
type: post
published: true
layout: post
redirect_from:
  - "/2018/06/27/managing-references-and-resources-when-writing-academic-papers.html"
---
Some of you may know that I'm studying for my Masters degree in Computing (Software Engineering), this naturally requires me to write more than a few essays with full referencing. Being a nerd I want to make this as easy as possible for myself, whilst still being accurate - and the simplest way to do this is to use software to manage my references.  

<!--more-->

After doing some comparisons I settled on Zotero - it's free, which is perfect for a student budget, and you could program your own extensions if needed. More importantly it has a Word plugin which as I am required to submit my assignments in Word format is extremely useful.  
For those of you not familiar with referencing plugins and software you usually write your essay, and as you get to a place where you would insert a citation then you use the plugin in Word to do so. This software later generates a complete bibliography for you. EndNote, Mendeley, Bookends and Zotero are all capable of handling different citation formats, and Zotero even has one for my university's exact styling which is a great timesaver.  
At the start of each course or module I save all of the recommended reading into Zotero, they have browser plugins for Safari, Firefox, and Chrome which is ideal. By default Zotero saves PDFs if one is available for the reference, or a web snapshot. I prefer to save these items to DevonThink so use DevonThink's plugin to save the actual files to it instead. When saving the files I use the format <code>Author - year - title</code> which makes it easy to find the relevant reference. DevonThink allows me to use _Edit in Place_ on iOS to annotate documents with whichever app I like. I also prefer to save web pages in PDF form which means I can annotate everything with PDF Expert.  
To remove these attachments from my Zotero library (you only get 200MB of sync storage for free), I have created a saved search. It has <code>Item Type is Attachment</code> as the sole criteria, and searches the whole library. I simply open this saved search, use CMD+A, and press delete - which deletes all of my attachments. As I prefer to use the search in DevonThink to find references I remember this isn't a problem, and I can also use the NEAR search parameter (<code>NEAR(man, cat)</code> would find items where the word man is within 10 words of the word cat, you can expand on this with <code>NEAR(man, cat, 100)</code> which would do the same but within 100 words - this is a massive timesaver for me.  

Sometimes items added to Zotero do not always have the complete metadata - this tends to be my university website in my case. To fix these items I have a very useful smart folder and Keyboard Maestro Macro. The smart folder filters for items from my university website, which have no date or creator, the keyboard maestro macro requires me to set the number of items it should process and then goes through and uses the "click at image" action to set both the author and the date of the item in question. Zotero does have an API, but sometimes the best automation is the one you can set up the fastest which achieves the needed results - and this certainly fits that bill.  


DevonThink and Zotero are a very useful pair for me and I honestly think that without them I would struggle to complete my assignments.  
