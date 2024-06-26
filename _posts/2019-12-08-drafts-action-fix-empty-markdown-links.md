---
title: "Drafts Action: Fix Empty Markdown Links"
last_modified_at: 2021-10-10 00:00
date: 2019-12-08 21:51
type: post
published: true
layout: post
tags:
  - Automation
  - Drafts
redirect_from:
  - "/2019/12/08/drafts-action-fix-empty-markdown-links.html"
---


  As is often the case, as I use Drafts I find things that I need to do and
  write a script to fix it for me! In this case, I have a habit of planning to
  add links later in my text, but find it a pain to go through the whole article
  to find them and the find function is too darn _manual_ for me. There
  were already a few actions in the Actions Directory, but they didn't quite
  work the way I wanted them to. If you haven't guessed where this is going yet:
  I wrote my own!  

<!--more-->

  This action using the Script function in Drafts, and some good old
  <a href="https://www.relay.fm/automators/34">regular expressions</a>. The code
  itself can be broken down into eight steps:  
<ol>
  <li>Get the contents of the Draft.</li>
  <li>Create the regular expression.</li>
  <li>
    Parse the contents of the Draft with the regular expression to get a list of
    <code>matches</code>
  </li>
  <li>Create a prompt</li>
  <li>Add each match to the prompt</li>
  <li>Show the prompt</li>
  <li>
    Go through each match again and replace it (within the whole content) with
    the information provided through the prompt.
  </li>
  <li>Update the draft.</li>
</ol>
<pre><code class="language-javascript">let content = draft.content; //get the content of the draft

let pattern = /\[[^\]]+]\(\)/g; //build the regex

let matches = content.match(pattern); //find all the empty links

//create the prompt
let p = Prompt.create();
p.title = "Missing Links";

//add each empty link to the prompt
matches.forEach(function (match, index){
    p.addTextField(index, match.replace('[', '').replace(']()', ''), "");
});

//show the prompt
p.addButton("OK");
let didSelect = p.show();

//if the prompt wasn't cancelled
if (didSelect) {
    if (p.buttonPressed == "OK") {
        //go through each empty link and replace it with the updated information
        Object.keys(p.fieldValues).forEach(function (index) {
            content = content.replace(matches[index], matches[index].replace('()', '('+p.fieldValues[index]+')'))
        });
    }
}

//update the draft
draft.content = content;
draft.update();</code></pre>


  The idea is I can run this at the end of writing, deal with all my links in
  one prompt, and get on with things. It's the kind of action I'll include as a
  step in other actions to make sure I don't accidentally post empty links!  

  <a href="https://actions.getdrafts.com/a/11o"
    >Get it from the action directory</a
  >  
