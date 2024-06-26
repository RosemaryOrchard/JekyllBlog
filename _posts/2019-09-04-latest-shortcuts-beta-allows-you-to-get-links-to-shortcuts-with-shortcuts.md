---
title: Latest Shortcuts Beta Allows You to Get Links to Shortcuts with Shortcuts!
last_modified_at: 2021-10-10 00:00
date: 2019-09-04 20:27
type: post
published: true
layout: post
redirect_from:
  - "/2019/09/04/latest-shortcuts-beta-allows-you-to-get-links-to-shortcuts-with-shortcuts.html"
---
Something I've been hoping for for a long time is the ability to get a (sharing) link to my Shortcuts with Shortcuts - and with the latest developer beta of iOS and iPadOS (beta 2) it can be done!  

<!--more-->

<img class="aligncenter size-full wp-image-4023" src="{{ "/assets/2019/09/IMG_0149.jpg" | absolute_url }}" alt="Shortcuts actions" width="1027" height="1684" />  
Thankfully this is fairly simple to do, there are just 6 actions required to get a list of all your Shortcuts as Markdown links:  
<ul>
<li>Get my shortcuts</li>
<li>Repeat with each item in <code>My Shortcuts</code>
<ul>
<li>Get link to <code>Repeat Item</code></li>
<li>Text: [<code>Name</code>][<code>Link to File</code>]</li>
</ul>
</li>
<li>Combine <code>Repeat Results</code> with <code>New Lines</code></li>
<li>Share <code>Combined Text</code>.</li>
</ul>
There is one caveat to this: Unfortunately you need to confirm getting the link to each Shortcuts from a prompt which appears.  
Download the Shortcut: <a href="https://www.icloud.com/shortcuts/3b3a88788ca4499d81f7d786337d9b1c">Get Shortcuts as Links</a>  
Now if you'll excuse me I'm going to go and watch Netflix and tap the same prompt 900+ times.  

---

Update! I've been experimenting and there's also a way to just tap "Create Links" once: <a href="https://www.icloud.com/shortcuts/d998c0d0c9a64fefbef8a326f81a356d">Get Markdown Links to Shortcuts</a> - you get the links first and then iterate through them grabbing the names of the associated Shortcuts. As long as the order of the Shortcuts remains constant this is a much more user friendly workaround.  
