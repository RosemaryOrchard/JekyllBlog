---
title: "Workflow: Upload Blog Post via SSH"
last_modified_at: 2021-10-10 00:00
date: 2018-08-27 20:00
type: post
published: true
layout: post
tags:
  - Grav
  - Workflow
redirect_from:
  - "/2018/08/27/workflow-upload-blog-post-via-ssh.html"
---


  <a
    href="https://resources.rosemaryorchard.com/images/blog/workflow-upload-blog-post-via-ssh/workflow-upload-blog-post.png"
    ><img
      class="alignright"
      src="{{ "/assets/2018/08/workflow-upload-blog-post.png" | absolute_url }}" /></a
  >I use <a href="https://getgrav.org">Grav</a> as my blog CMS, it's powerful
  and customisable, and it lets me upload blog posts via (S)FTP. The catch? My
  previous system for blogging involved using
  <a href="https://panic.com/transmit/">Transmit</a> and Workflow - and sadly
  Transmit for iOS
  <a href="https://panic.com/blog/the-future-of-transmit-ios/">is no more</a>.
  (You may be wondering why I'm only changing my system now, instead of back in
  January when Panic stopped working on Transmit for iOS. It's simple, it was
  still supported in Workflow, sadly it is no longer supported in Shortcuts.)  

<!--more-->

  This Workflow takes advantage of the <code>stdin</code> input option for the
  Run Script Over SSH action, in simple terms it means that you can give this
  action input as well as using variables as input in the script section.  

  A quick lesson on how Grav works for those unfamiliar with it and looking to
  modify this for Jekyll or another CMS:  
<ul>
  <li>
    There is a User folder where the data for your site is stored (config files,
    pages, etc.)
  </li>
  <li>
    Inside of this folder is the Pages folder, where your pages are stored.
  </li>
  <li>
    Folders inside of this become slugs the URL, so my blog posts are all in
    <code>blog</code>.
  </li>
  <li>The file name is the name of the twig template.</li>
</ul>

  To start with I choose where I want to store the post, if it's a link to a
  guest post it goes in one folder, and a blog post goes in another - this is
  just my personal preference. I'm using a dictionary to do this because then I
  can see one option, but have it output something different - as my blog is the
  second item in my menu I would have to choose <code>02.blog</code> every time
  otherwise. The next step is asking for the slug - this is nearly always on my
  clipboard (because I run this from Drafts and Drafts puts the slug on my
  clipboard!), then I get the text that was shared to the Workflow and Run
  Script Over SSH - which is where all the magic happens. The workflow I've
  shared does the following:  
<pre><code>cd user/pages/$Chosen_Location;
mkdir $Slug;
cd $Slug;
cat &gt; blogpost.md;</code></pre>

  I've used the dollar signs here to represent Workflow variables - the key line
  is the last one, where I save the input of the SSH action to the file
  <code>blogpost.md</code>.  
Steps:  
<ul>
  <li>
    <a
      href="https://resources.rosemaryorchard.com/images/workflow-icons/Scripting.png"
      ><img src="{{ "/assets/2018/08/Scripting.png" | absolute_url }}" /></a
    ><code>Dictionary</code>: This is a list of the folders where I might choose
    to save a blog post.
  </li>
  <li>
    <a
      href="https://resources.rosemaryorchard.com/images/workflow-icons/Scripting.png"
      ><img src="{{ "/assets/2018/08/Scripting.png" | absolute_url }}" /></a
    ><code>Choose from List</code>: I choose one of those folders
  </li>
  <li>
    <a
      href="https://resources.rosemaryorchard.com/images/workflow-icons/Scripting.png"
      ><img src="{{ "/assets/2018/08/Scripting.png" | absolute_url }}" /></a
    ><code>Ask for Input</code>: And grab the slug for the post.
  </li>
  <li>
    <a
      href="https://resources.rosemaryorchard.com/images/workflow-icons/Variable.png"
      ><img src="{{ "/assets/2018/08/Variable.png" | absolute_url }}" /></a
    ><code>Set Variable</code>: I save the slug to a variable
  </li>
  <li>
    <a
      href="https://resources.rosemaryorchard.com/images/workflow-icons/Variable.png"
      ><img src="{{ "/assets/2018/08/Variable.png" | absolute_url }}" /></a
    ><code>Get Variable</code>: And then I get the blog post shared to the
    Workflow.
  </li>
  <li>
    <a
      href="https://resources.rosemaryorchard.com/images/workflow-icons/Scripting.png"
      ><img src="{{ "/assets/2018/08/Scripting.png" | absolute_url }}" /></a
    ><code>Run Script Over SSH</code>: Finally I run the SSH script.
  </li>
</ul>

  Now, I actually save my blog posts in numbered folders - Grav will drop the
  number and dot at the start of the a folder name and use the rest of it as a
  slug, this helps me find posts based on when they were published from a folder
  list. If I create the post in the Grav admin GUI then it numbers them
  automatically, but it is possible to do this on the command line too! The
  script I use is as follows:  
<pre><code>cd user/pages/$Correct_Location;
filecount=$(ls | wc -l);
mkdir ${filecount}.$Slug;
cd ${filecount}.$Slug;
cat &gt; blogpost.md;</code></pre>

  What this does is it counts the files and folders in the current folder and
  saves them to a variable on command line called <code>filecount</code> - and
  then I use this to create the folder for me. This variable is only valid for
  this session - but that's fine for what we need. The folder where the post
  will be published contains a file which will display the list of blog posts
  and this gives me the +1 I need to create the next folder.  
I hope this script is of use to at least one person!  

  You can get the workflow here:
  <a href="https://workflow.is/workflows/7ed756f77d1c47b19d28c445a4857b47"
    >Upload Blog Post</a
  >  
