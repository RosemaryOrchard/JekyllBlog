---
title: Controlling a Raspberry Pi via SSH
last_modified_at: 2021-10-10 00:00
date: 2018-02-21 20:00
type: post
published: true
layout: post
redirect_from:
  - "/2018/02/21/remote-control-raspberry-pi.html"
---
I have a Raspberry Pi 3 running <a href="https://github.com/nfarina/homebridge">HomeBridge</a>, <a href="https://home-assistant.io">HomeAssistant</a>, and a few other services. It has a <a href="https://www.raspberrypi.org/products/raspberry-pi-touch-display/">7" touchscreen display</a> attached which is lovely - but bright. I prefer to turn the screen on and off when I want to use it instead of relying on the energy saver preferences (as I inevitably use the device just before I want to sleep) - however typing the terminal commands to do it is rather old fashioned.  

<!--more-->

 "Dictionary of actions in Workflow")  
The first action is a dictionary - so every ssh command I run has a name which I look at when running the Workflow. You can have anything here of course - providing it's a valid SSH command. My commands are as follows:  
**Screen On**


<code>sudo bash -c "echo 0 &gt; /sys/class/backlight/rpi_backlight/bl_power"</code>  
**Screen Off**


<code>sudo bash -c "echo 1 &gt; /sys/class/backlight/rpi_backlight/bl_power"</code>  
**Restart HomeBridge**


<code>sudo systemctl restart homebridge</code>  
**Restart HomeAssistant**


<code>sudo systemctl restart home-assistant@homeassistant</code>  
Then Workflow asks you to choose an action to execute, and executes it. Finally you see the result of the SSH command returned to you - which is useful if there is output.  
You can <a href="https://workflow.is/workflows/bfd213edebfd4f9597cad6150a586e08">download the Workflow here</a>. You'll need to know the IP address of your Raspberry Pi, the username (default <code>pi</code>), and password (default <code>raspberry</code>). If your username and password are the default ones I recommend you change them.  
