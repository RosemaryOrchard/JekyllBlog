---
title: Tracking Exchange Rates When Travelling
last_modified_at: 2021-10-10 00:00
date: 2017-03-01 08:00
type: post
published: true
layout: post
redirect_from:
  - "/2017/03/01/tracking-exchange-rates-when-travelling.html"
---
I've recently been travelling a lot (which as my family is well aware, is a normal state!) and wanted to be able to easily keep track of the exchange rate, plus be able to calculate the prices including tax - as well as find out how much it would be in my normal currency.  

<!--more-->

Step 1 was finding an API I could use. I'm a big fan of free - and when that's nor possible affordable. Naturally <a href="http://xe.com">XE Currency</a> was my first port of call but that was a little out of my price range. A little Googling found <a href="http://fixer.io">Fixer.io</a> which is free, and while not giving the identical rates to xe.com or my card company, close enough to give me a very good approximation.  
The first step was creating a Workflow which would get me the current exchange rate, and save it to a file so I could use it offline. A simple GET command and some RegEx was all that was needed to extract the exchange rate, then it was a simple matter of saving the file for later retrieval - and I added an alert at the end.  
