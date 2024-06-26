---
title: 'Workflow: Menus, Lists & Dictionaries'
last_modified_at: 2021-10-10 00:00
date: 2018-05-16 08:00
type: post
published: true
layout: post
tags:
  - Workflow
redirect_from:
  - "/2018/05/16/workflow-menus-lists-dictionaries.html"
---
When should you use a list or a menu. What about a dictionary? If you're not a programmer and have had little experience with writing for computers in general then this can be a little overwhelming.  

<!--more-->

<h3>Lists</h3>
A list is exactly what it sounds like. You have a list of items, and you can choose from them or get a specific item (at an index, so the 1st or 5th item for example). A list gives you what you choose - so if you have a list of animals, when you choose "Cat" you get "Cat" - fairly simple.  
You can make lists in a few ways, if you <code>Add to Variable</code> you can get that variable and use <code>Choose from List</code>. You can also <code>Split Text</code> and then <code>Choose from List</code> again. There is also the list action you can add items to - and you follow it with a <code>Choose from List</code> action again.  
![](https://resources.rosemaryorchard.com/images/blog/workflow-menus-lists-dictionaries/workflow-list.jpeg)
<h3>Menus</h3>
A menu is a list of items which contain actions - this is ideal if you want to be able to do different things based on the option chosen (e.g. reminder vs calendar event vs note). You don't get the text of the menu item after you click it, though you can work around this by using the <code>Text</code> action if you need it.  
<img src="https://resources.rosemaryorchard.com/images/blog/workflow-menus-lists-dictionaries/workflow-menu.jpeg" alt="Workflow Menu Action">  
<h3>Dictionaries</h3>
A dictionary is somewhere between a list and a menu in many ways. If I choose "Spaghetti Bolognese" then a dictionary can return "ground beef, tomatoes, onion, spaghetti...". This can have all sorts of applications - and Workflow actually gives you dictionaries a lot of the time when you put the <code>Choose from List</code> action after another, such as <code>Search App Store</code>.


Dictionaries can really help improve your Workflow experience. Maybe you want to have a simple list of people, and when you select one you get that person's phone number - or maybe you want to get complicated and go crazy. That's all possible with dictionaries.


A dictionary is a series of keys and values. The key is what you choose, and the value is what you get. There are multiple ways to make dictionaries in Workflow - the simplest way though is to use the Dictionary action.  
![](https://resources.rosemaryorchard.com/images/blog/workflow-menus-lists-dictionaries/workflow-dictionary-choose-from-list.jpeg)
<h3>Tips and tricks</h3>
You can order lists, menus, and dictionaries manually using the grab handles on the side of their action blocks. But a list or dictionary can also be sorted by its key using the <code>Filter files</code> action. You can use this to sort the keys alphabetically. This won't change the list or the dictionary in your editing view, but it will change before you choose or get an item from it.  
