---
title: Creating My Own Raspberry Pi HomeKit Controlled Light
last_modified_at: 2021-10-10 00:00
date: 2018-02-05 11:58
type: post
published: true
layout: post
tags:
  - HomeKit
  - Raspberry Pi
permalink: "/blog/creating_my_own_raspberry_pi_homekit_controlled_light/"
redirect_from:
  - "/2018/02/05/creating_my_own_raspberry_pi_homekit_controlled_light.html"
---
I recently bought a <a href="https://shop.pimoroni.com/products/mood-light-pi-zero-w-project-kit">Raspberry Pi Zero W mood light kit</a> on Pimoroni. I've been looking for a project to practice my python and thought playing with lights would be fun. After <a href="https://learn.pimoroni.com/tutorial/sandyj/assembling-mood-light">assembling said light</a> (I recommend the <a href="https://shop.pimoroni.com/products/gpio-hammer-header">solderless set</a> by the way, unless you _really_ like soldering) and playing with it, I wanted to control it along with the Philips Hue lights which are around my desk - via HomeKit.  

<!--more-->

Pimoroni has a <a href="https://learn.pimoroni.com/tutorial/sandyj/using-mote-with-homekit-and-siri">guide to set up Mote lights via HomeKit</a>, so with some tweaking I got it running.  
Make sure you <a href="https://learn.pimoroni.com/tutorial/sandyj/getting-started-with-unicorn-phat">install the software</a> first. Then I had to modify their code - I don't have Mote lights, but I have the Unicorn pHAT. So instead of importing <code>mote</code> I had to import <code>unicornhat</code>, and very importantly I had to change the dimension of the lights - if you try to set lights that don't exist on the unicorn pHAT then it won't work. Despite doing this I had some problems with floats being returned instead of integers, so I changed all the division to use <code>//</code> instead of <code>/</code> which resolved that issue nicely. Here's the code for the API:  
<pre><code>#!/usr/bin/env python
from colorsys import hsv_to_rgb, rgb_to_hsv
import unicornhat as unicorn
from flask import Flask, jsonify, make_response

app = Flask(__name__)
unicorn.set_layhout(unicorn.PHAT)
unicorn.brightness(0.5)
width, height = unicorn.get_shape()

colour = 'FFFFFF'
status = 0

def hex_to_rgb(value):
    value = value.lstrip('#')
    length = len(value)
    return tuple(int(value[i:i + length // 3], 16) for i in range(0, length, length // 3))

def unicorn_on(c):
    r, g, b = hex_to_rgb(c)
    for channel in range(width):
        for pixel in range(height):
            unicorn.set_pixel(channel, pixel, int(r), int(g), int(b))
    unicorn.show()
    return True

def unicorn_off():
    unicorn.clear()
    unicorn.show()
    return True

def get_status():
    global status
    for channel in range(width):
        for pixel in range(height):
            if unicorn.get_pixel(channel, pixel) != (0, 0, 0):
                status = 1
    return status

@app.route('/unicorn/api/v1.0/&lt;string:st&gt;', methods=['GET'])
def set_status(st):
    global status, colour
    if st == 'on':
        status = 1
        unicorn_on(colour)
    elif st == 'off':
        status = 0
        unicorn_off()
    elif st == 'status':
        status = get_status()
    return jsonify({'status': status, 'colour': colour})

@app.route('/unicorn/api/v1.0/set', methods=['GET'])
def get_colour():
    global colour
    return jsonify({'status': status, 'colour': colour})

@app.route('/unicorn/api/v1.0/set/&lt;string:c&gt;', methods=['GET'])
def set_colour(c):
    global status, colour
    colour = c
    if status != 0:
        unicorn_on(colour)
        status = 1
    return jsonify({'status': status, 'colour': colour})

@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

if __name__ == '__main__':
    unicorn_off()
    app.run(host='0.0.0.0', debug=True)</code></pre>
(I can't claim any credit here, I just modified their example to work for the unicorn pHAT instead of Mote.)  
Next I had to add the light to my HomeBridge installation. I ran <code>sudo npm install -g homebridge-better-http-rgb</code>, added the following configuration and restarted HomeBridge. Make sure to replace the IP address with your light, or with <code>localhost</code> if you're running HomeBridge on the same machine as your light.  
<pre><code>    {
          "accessory": "HTTP-RGB",
          "name": "MoodLight",

          "switch": {
              "status": "http://10.0.0.116:5000/unicorn/api/v1.0/status",
              "powerOn": "http://10.0.0.116:5000/unicorn/api/v1.0/on",
              "powerOff": "http://10.0.0.116:5000/unicorn/api/v1.0/off"
          },

          "brightness": {
              "status": "http://10.0.0.116:5000/unicorn/api/v1.0/brightness",
              "url": "http://10.0.0.116:5000/unicorn/api/v1.0/brightness/%s"
          },

          "color": {
              "status": "http://10.0.0.116:5000/unicorn/api/v1.0/set",
              "url": "http://10.0.0.116:5000/unicorn/api/v1.0/set/%s",
              "brightness": true
          }
      }</code></pre>
Here's a video of the light in action.  
https://www.youtube.com/watch?v=ciWX-mXVaME  
