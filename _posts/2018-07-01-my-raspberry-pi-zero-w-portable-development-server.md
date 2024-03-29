---
title: My Raspberry Pi Zero W Portable Development Server
last_modified_at: 2021-10-10 00:00
date: 2018-07-01 20:00
type: post
published: true
layout: post
tags:
  - Coda
  - Programming
  - Raspberry Pi
  - Travel
  - Workflow
redirect_from:
  - "/2018/07/01/my-raspberry-pi-zero-w-portable-development-server.html"
---
I love my iPad, it's a great, very portable device that I can use for almost everything. Unfortunately the almost for most people is a deal breaker - but I'm stubborn and see these things as a problem to be solved rather than a reason to use another device!  

<!--more-->

One of my most frequently used "tools" are servers - if you can call a server a tool. This blog runs on one, as does <a href="https://automationorchard.com">Automation Orchard</a>, as well as a lot of little scripts which make my life easier. Unfortunately having an entire server running locally on an iPad isn't quite possible yet - apps like <a href="https://itunes.apple.com/us/app/id593757593?at=1010lumu">DraftCode Offline PHP IDE</a> are fabulous and can even run Wordpress - but sometimes needs must, and you need something that is less restricted. This is where my Raspberry Pi Zero W comes into play.  
<img class="aligncenter" src="{{ "/assets/2018/07/pi-on-a-plane.jpeg" | absolute_url }}" />  
The Raspberry Pi Zero W, for those of you not familiar with it, is an extremely small headless computer - it doesn't have a screen - indeed when you buy it you just get the board, that's it! The hard drive is a micro SD card, and it sports a few ports - 2 micro USB (one for power), and a mini HDMI. How on earth can you connect to that with an iPad?  
The answer is not the shortest or easiest, but it does sound simple: wifi. I have set my Raspberry Pi up so that when it boots up it creates a wifi network, of course this doesn't create an internet connection, but that's not what we're after here. I won't go into the steps of setting this up here, instead I recommend you follow this guide: <a href="https://www.raspberrypi.org/documentation/configuration/wireless/access-point.md">Setting Up a Raspberry Pi as an Access Point in a Standalone Network (NAT)</a>  
The other part I needed to do was to make sure the Pi would always have the same IP address. This allows me to use <a href="https://www.rosemaryorchard.com/blog/remote-control-raspberry-pi">use Workflow to control it via SSH</a>, and connect to it with <a href="https://itunes.apple.com/us/app/id500906297?at=1010lumu">Coda</a> which lets me hook right into the device and has great syntax highlighting. As I mostly program for the web with PHP I use Coda in split screen with Safari which I can refresh to see the results of what I'm doing.  
I use a CMS called Grav, and they have a nice little guide to help you set up the <a href="https://getgrav.org/blog/raspberrypi-nginx-php7-dev">Raspberry Pi</a> to run it - there are guides to set up most CMS on a Pi if you look.  
Why would I do all of this over using something like Linode or Digital Ocean, you might ask. It's a very simple answer: internet isn't always a given. I travel a lot, and most of my flights do not have wifi (and those that do charge a fortune for it). Even trains go through tunnels where you lose your connection. If you always have wifi or cellular data then you can avoid carrying a tiny computer, cable and battery pack along with your iPad, but if you don't then this is a very small combination that gives you a lot of power.  
**Hardware in use:**  
<ul>
<li><a href="https://thepihut.com/collections/raspberry-pi-zero/products/raspberry-pi-zero-w">Raspberry Pi Zero W</a></li>
<li><a href="https://thepihut.com/collections/raspberry-pi-cases/products/pibow-zero-w">Pibow Zero W</a></li>
<li><a href="http://www.amazon.com/dp/B01CU1EC6Y/?tag=rosemaryorchard-20">Anker PowerCore</a></li>
<li><a href="http://www.amazon.com/dp/B01NAMTC5T/?tag=rosemaryorchard-20">Anker PowerLine Micro USB (4 Inches)</a>


You'll also need a microSD card and to set up the OS on it, if you're not sure where to begin you can buy one with <a href="https://thepihut.com/products/noobs-preinstalled-sd-card">NOOBS preinstalled</a>.</li>
</ul>
