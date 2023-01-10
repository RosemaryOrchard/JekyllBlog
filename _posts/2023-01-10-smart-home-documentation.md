---
layout: post
published: true
title: Documenting My Smart Home
tags:
  - Home Automation
  - Home Assistant
  - Obsidian
  - Notetaking  
date: '2023-01-10 15:00'
---
There was a post on the Home Assistant subreddit today asking [how people document their smart homes](https://reddit.com/r/homeassistant/comments/10884ky/documenting_smart_home/). As I took a little bit of time to write up my response and include some links I thought it would be worth sharing!

I use [Obsidian](https://obsidian.md) to document setup/installation processes, my network, and similar. 

For example, my network note has a [Mermaid diagram](https://help.obsidian.md/How+to/Format+your+notes#Diagram) for approximate layout (router, switches, and devices have their own shapes, lines connect ethernet devices, wifi devices aren't on the diagram), and a table with names, MAC addresses and DHCP assigned IPs of devices as well as wifi vs ethernet. The table is generated with [Dataview](https://github.com/blacksmithgu/obsidian-dataview) from a subfolder of device notes. I only document ethernet devices and wifi devices that are "important" (e.g. smart home devices that all show up on the router as Espressif will get noted so if I set my network config on fire then I don't have to trial and error my way through setting it all up again).

The device notes contain the name, IP, MAC Address, approximate description (if needed) and so on. For more complex devices it also contains which OS is installed, and containers/services are running on the device as well as install instructions (e.g. Plex is installed straight onto my Plex server). Install instructions are just a numbered list, with links out to relevant instruction pages/forum posts (which I do my best to remember to throw into archive.org when I add the link to my note so it should be there in the future).

Docker compose files as well as related config for containers are all backed up to a private git repo, there's a folder for each physical machine I use, and a readme with a note about the folder structure I'm using and anything important I might forget (such as why X container is using host networking). I could reverse engineer folder structure from the compose files, but why bother? 😁

I've just added another private git repo for my [ESPHome](https://esphome.io/) configs, not that they need to be private, but if I screw up and put credentials into the YAML instead of secrets then it's less worrisome 😉

The most important part of my system is backups though. I back everything up, and get it off the device, as well as  another copy off my network: the [3-2-1 rule](https://www.backblaze.com/blog/the-3-2-1-backup-strategy/).