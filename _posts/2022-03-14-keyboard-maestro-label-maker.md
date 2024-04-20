---
published: true
layout: post
title: "Improving my Label Maker with Keyboard Maestro"
tags:
  - Keyboard Maestro
  - Productivity
date: '2022-03-14 18:30'
---

One of the things I mentioned in the [most recent episode of Automators]({% post_url 2022-03-11-automators-097 %}) was how I've been fixing small annoyances with automation tools, particularly Keyboard Maestro. I encountered another one with my label maker which I was happy to be able to solve!

I have a Brother P-Touch PT710BT label maker. Naming aside, it's an excellent device—and the Brother software on the Mac allows me to do a mail merge with CSVs—including print a list of labels. Collecting the list and merging that into a CSV is a Shortcuts story for another time, but the thing that annoyed me the most is connecting the label maker to my Mac didn't automatically open the software. It was just _one more step_ getting in my way. So I fixed it—with Keyboard Maestro.


<!--more-->

Keyboard Maestro has a trigger for [connecting USB devices](https://wiki.keyboardmaestro.com/trigger/USB_Device). Because I'm me, I didn't check the documentation when I went to set this up, so I found the name of the trigger the hard way—through the Apple Menu, System Report, USB, and then scrolling.

![My Label Maker in the System Report](/assets/2022/macos_usb_devices.png)

The macro is very simple: `Activate "Brother P-touch Editor"`. One action. But it works! And that's one less annoyance in my life.

![Keyboard Maestro Macro to activate the label maker software when the device is connected](/assets/2022/keyboard-maestro-activate-application.png)