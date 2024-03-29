---
title: Workflows for Project Planning With Trello and OmniFocus
last_modified_at: 2021-10-10 00:00
date: 2018-04-23 08:00
type: post
published: true
layout: post
redirect_from:
  - "/2018/04/23/workflows-for-project-planning-with-trello-and-omnifocus.html"
---
<a href="https://trello.com/roseorchard/recommend">Trello</a> is a lovely service which offers Kanban boards for planning - and I often like to plan out projects there, especially ones that need to be done in multiple stages or have many areas of focus. OmniFocus is my task manager of choice though which means I need my tasks to end up in there to have any hope of accomplishing them. To this end I have created a few <a href="http://workflow.is">Workflow</a> workflows to get the data out of Trello and into OmniFocus, they’re not very sophisticated - but they function very well.  

<!--more-->

<h3>Single Trello List to OmniFocus</h3>
<img src="https://resources.rosemaryorchard.com/images/blog/workflows-for-project-planning-with-trello-and-omnifocus/workflow-trello-list-to-omnifocus.png" alt="Trello List To OmniFocus"> Maybe you just have one list in Trello and you want to get the tasks and put them in OmniFocus. This workflow does exactly that.  
Steps:  
<ul>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/trello.png" alt="Get Trello Items" class="workflow-icon"><code>Get Trello Items</code>:  This gets all of your Trello boards.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Scripting.png" alt="Choose from List" class="workflow-icon"><code>Choose from List</code>: You choose the board you want to get data from.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/trello.png" alt="Get Trello Items" class="workflow-icon"><code>Get Trello Items</code>: Then we get all of the lists in the board you just chose.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Scripting.png" alt="Choose from List" class="workflow-icon"><code>Choose from List</code>: Now you choose which list you want to grab the cards from.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/trello.png" alt="Get Trello Items" class="workflow-icon"><code>Get Trello Items</code>: We get all of the cards.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Scripting.png" alt="Repeat with Each" class="workflow-icon"><code>Repeat with Each</code>: We go through each card.
<ul>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Text.png" alt="Text" class="workflow-icon"><code>Text</code>: We format the title and the description of the card to be the name of the text and the note (in TaskPaper format notes are indented on a new line after their task).</li>
</ul>
</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Text.png" alt="Combine Text" class="workflow-icon"><code>Combine Text</code>: We put all of the cards together.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/trello.png" alt="Add TaskPaper to OmniFocus" class="workflow-icon"><code>Add TaskPaper to OmniFocus</code>: The data gets added to OmniFocus.</li>
</ul>
You can get the workflow here: <a href="https://workflow.is/workflows/fc2e1d8c67534fa984a6e58848beb4af">Trello List To OmniFocus</a>  
<h3>Multiple Trello Lists to OmniFocus</h3>
<img src="https://resources.rosemaryorchard.com/images/blog/workflows-for-project-planning-with-trello-and-omnifocus/workflow-multiple-trello-lists-to-omnifocus.png" alt="Multiple Trello Lists To OmniFocus"> If you have several lists on a board you want to get into OmniFocus then this Workflow will allow you to do that. It will create a task or action group for each list with sub tasks for each card in that list in Trello.  
Steps:  
<ul>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/trello.png" alt="Get Trello Items" class="workflow-icon"><code>Get Trello Items</code>: Get your Trello boards here.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Scripting.png" alt="Choose from List" class="workflow-icon"><code>Choose from List</code>: Choose the Trello board you want to get the lists from.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/trello.png" alt="Get Trello Items" class="workflow-icon"><code>Get Trello Items</code>: Get the lists.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Scripting.png" alt="Choose from List" class="workflow-icon"><code>Choose from List</code>: Choose one or many lists</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Scripting.png" alt="Repeat with Each" class="workflow-icon"><code>Repeat with Each</code>: With each list
<ul>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Variable.png" alt="Set Variable" class="workflow-icon"><code>Set Variable</code>: Set the <code>list</code> variable to be the name of the list. Working with multiple repeats can get a bit tricky, hence not using the <code>Repeat Item</code> variables here.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/trello.png" alt="Get Trello Items" class="workflow-icon"><code>Get Trello Items</code>: Get the cards</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Scripting.png" alt="Repeat with Each" class="workflow-icon"><code>Repeat with Each</code>: For every card
<ul>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Variable.png" alt="Set Variable" class="workflow-icon"><code>Set Variable</code>: Set the <code>card</code> variable to be the card.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/trello.png" alt="Get Details of Trello Item" class="workflow-icon"><code>Get Details of Trello Item</code>: Get the name of the Trello card.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Variable.png" alt="Get Variable" class="workflow-icon"><code>Get Variable</code>: Get the <code>card</code> variable back.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/trello.png" alt="Get Details of Trello Item" class="workflow-icon"><code>Get Details of Trello Item</code>: Get the description of the Trello card</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Text.png" alt="Text" class="workflow-icon"><code>Text</code>: Format this in TaskPaper format.</li>
</ul>
</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Text.png" alt="Combine Text" class="workflow-icon"><code>Combine Text</code>: Put all of the TaskPaper together</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Text.png" alt="Text" class="workflow-icon"><code>Text</code>: Add the name of the list to the top of this TaskPaper format</li>
</ul>
</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Text.png" alt="Combine Text" class="workflow-icon"><code>Combine Text</code>: Put all of the lists of TaskPaper tasks together.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/trello.png" alt="Add TaskPaper to OmniFocus" class="workflow-icon"><code>Add TaskPaper to OmniFocus</code>: Put it all into OmniFocus.</li>
</ul>
You can get the workflow here: <a href="https://workflow.is/workflows/0f2790c37e314e9eabf722c8fa76b9c8">Multiple Trello Lists To OmniFocus</a>  
<h3>Trello Board to OmniFocus</h3>
<img src="https://resources.rosemaryorchard.com/images/blog/workflows-for-project-planning-with-trello-and-omnifocus/workflow-trello-board-to-omnifocus-project.png" alt="Trello Board To OmniFocus Project"> If you have planned your whole project in Trello and want to move it over to OmniFocus then this Workflow will help you do so. It makes the whole board into one project, with each list becoming an action group and the cards becoming tasks inside of those.  
Steps:  
<ul>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/trello.png" alt="Get Trello Items" class="workflow-icon"><code>Get Trello Items</code>: This gets all of your Trello boards.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Scripting.png" alt="Choose from List" class="workflow-icon"><code>Choose from List</code>: You choose the Trello Board you want to make into an OmniFocus project.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/trello.png" alt="Get Trello Items" class="workflow-icon"><code>Get Trello Items</code>: This gets all of the lists in the Trello Board.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Scripting.png" alt="Repeat with Each" class="workflow-icon"><code>Repeat with Each</code>: For every list.
<ul>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Variable.png" alt="Set Variable" class="workflow-icon"><code>Set Variable</code>: Set the variable to the list - multiple repeats can be a little tricky to follow.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/trello.png" alt="Get Trello Items" class="workflow-icon"><code>Get Trello Items</code>: Get all of the cards inside of this list.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Scripting.png" alt="Repeat with Each" class="workflow-icon"><code>Repeat with Each</code>: For each card
<ul>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Variable.png" alt="Set Variable" class="workflow-icon"><code>Set Variable</code>: Set the variable to the card.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/trello.png" alt="Get Details of Trello Item" class="workflow-icon"><code>Get Details of Trello Item</code>: Get the name of the card.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Variable.png" alt="Get Variable" class="workflow-icon"><code>Get Variable</code>: Get the card back.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/trello.png" alt="Get Details of Trello Item" class="workflow-icon"><code>Get Details of Trello Item</code>: Get the description of the card</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Variable.png" alt="Get Variable" class="workflow-icon"><code>Get Variable</code>: Get the card back again</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/trello.png" alt="Get Details of Trello Item" class="workflow-icon"><code>Get Details of Trello Item</code>: Get the due date of the card</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Text.png" alt="Text" class="workflow-icon"><code>Text</code>: Combine the name, due date and the description into TaskPaper format.</li>
</ul>
</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Text.png" alt="Combine Text" class="workflow-icon"><code>Combine Text</code>: Put all of those tasks together.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Text.png" alt="Text" class="workflow-icon"><code>Text</code>: Put the name of the list together with the cards inside of it.</li>
</ul>
</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Text.png" alt="Combine Text" class="workflow-icon"><code>Combine Text</code>: Put all of the lists together.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/Text.png" alt="Text" class="workflow-icon"><code>Text</code>: Put the name of the board with all of the lists together.</li>
<li><img src="https://resources.rosemaryorchard.com/images/workflow-icons/trello.png" alt="Add TaskPaper to OmniFocus" class="workflow-icon"><code>Add TaskPaper to OmniFocus</code>: And send everything to OmniFocus</li>
</ul>
You can get the workflow here: <a href="https://workflow.is/workflows/d0652dab2cf047408f1c3e3d6ad2ca36">Trello Board To OmniFocus Project</a>  
These Workflows are very helpful to me - and get more use than I thought they would! I hope you find a use for them too.  
