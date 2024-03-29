---
title: TaskPaper to OmniFocus Project in a Folder with Editorial
last_modified_at: 2021-10-10 00:00
date: 2018-04-17 08:00
type: post
published: true
layout: post
redirect_from:
  - "/2018/04/17/taskpaper-to-omnifocus-project-in-a-folder-with-editorial.html"
---
When OmniGroup first added Taskpaper support to OmniFocus they published an Editorial workflow which allows you to create new project - in the Mac Power Users Facebook Group someone asked if you could specify which folder the project should go into, a few minimal tweaks later and here is the solution! The key changes were:  

<!--more-->

<ul>
<li>Ask the user which folder they want to save the project in.</li>
<li>URL encode the folder name.</li>
<li>Modify the X-Callback URL so the project would be saved to the specified folder.</li>
</ul>
You can get OmniGroup's original Editorial workflow from <a href="https://www.omnigroup.com/blog/omnifocus-for-ios-now-automation-ready">their blog post here</a>, and the modification to allow you to add directly to a folder is available here: <a href="http://www.editorial-workflows.com/workflow/5903282794921984/B7PmEGtLdT8">New OmniFocus Project in Folder</a>  
