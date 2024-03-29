---
title: 'Workflow: OmniFocus Travel Plans'
last_modified_at: 2021-10-10 00:00
date: 2018-06-11 22:00
type: post
published: true
layout: post
tags:
  - OmniFocus
  - Travel
  - Workflow
redirect_from:
  - "/2018/06/11/omnifocus-travel-plans.html"
---
![alignright](https://resources.rosemaryorchard.com/images/blog/omnifocus-travel-plans/workflow-omnifocus-travel-plans.png)

<!--more-->

The first thing I do is decide where I'm going and when I'll go there. Then the Workflow puts together the start of a "before I go" list - including entries such as booking time off work, booking flights, charging battery packs, etc. The next step is to choose if this is a one or a multiple destination trip, if it's just one location then I add a few entries for that - planning travel to and from the airport, things to do, and so on. If it's a multi destination trip then I have to tell the app which places I'm going and in what order, and it generates a series of tasks based on that. The last thing the template does is to add packing categories to my project, I keep my actual packing lists in TripList as it has a wizard which generates a list for me (I could replicate that in Workflow of course!) - and syncs things to my TripIt plans.  
The taskpaper result for a one destination trip looks like this:  
<pre><code>2018/08 - Belgium:
    - Book time off work 11/08/2018 - 14/08/2018
    - Book flights to Belgium
    - Plan travel to the airport for 11/08/2018
    - Plan travel home from the airport for 14/08/2018
    - Make a packing list
    - Pack
    - Charge battery pack
    - Charge headphones
    - Put films &amp; TV shows on iPad
    - Book accommodation for Belgium
    - Plan travel from the airport to accommodation (11/08/2018)
    - Plan travel from the accommodation to the airport (14/08/2018)
    - Plan things to do in Belgium
    - Packing
        - Clothing
        - Documents
        - Electronics
        - Miscellaneous
        - Hand luggage</code></pre>
And for a multiple destination trip you end up with this:  
<pre><code>2018/08 - Belgium / Netherlands:
    - Book time off work 11/08/2018 - 18/08/2018
    - Book flights to Belgium
    - Plan travel to the airport for 11/08/2018
    - Plan travel home from the airport for 18/08/2018
    - Make a packing list
    - Pack
    - Charge battery pack
    - Charge headphones
    - Put films &amp; TV shows on iPad
    - Belgium @autodone(true) @parallel(true)
        - Book accommodation for Belgium
        - Plan travel from the airport to accommodation
        - Plan things to do in Belgium
    - Netherlands @autodone(true) @parallel(true)
        - Plan travel from Belgium to Netherlands (14/08/2018)
        - Book accommodation for Netherlands
        - Plan things to do in Netherlands
    - Packing
        - Clothing
        - Documents
        - Electronics
        - Miscellaneous
        - Hand luggage</code></pre>
As you can see there's not much of a difference - just the division and repetition of some tasks.  
You can get the workflow here: <a href="https://workflow.is/workflows/7311f351577f41a2bfba7fd755ec9812">OmniFocus Travel Plans</a>  
If you look at that Workflow and think that it's too complicated and I'm crazy (possible), then I also have a <a href="https://workflow.is/workflows/9e1ee05ca67e43cbb23093b6999863f3">simple version</a> for one destination which you can get here: <a href="https://workflow.is/workflows/9e1ee05ca67e43cbb23093b6999863f3">OmniFocus Travel Plans - Simple</a>  
