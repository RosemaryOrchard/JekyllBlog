<p>Today I finished up a tool that you can use to export your complete history from Foursquare and publish the checkins to your website!</p>

<p>In 2017, I created <a href="https://ownyourswarm.p3k.io">OwnYourSwarm</a> to export my future Swarm checkins to my website in real-time. It's been working great, and it's meant that I have had a complete archive of all my checkins on my website ever since then, so I don't have to worry if Foursquare disappears one day. However, I never got around to creating a way to export my <i>past</i> checkins, so I was always missing my checkin history from 2009-2016.</p>

<p>I had been considering building this as a feature of OwnYourSwarm, but realized that it would end up taking a lot of additional effort to make it work well as a web service, in addition to dealing with possible rate limit issues with the Foursquare API. So instead, this is published as a downloadable script you can run on your own computer. This also means you have a bit more flexibility in how you can use it, as well as being able to customize it more if you choose.</p>

<p>You can download the code from GitHub here:</p>

<p><a href="https://github.com/aaronpk/Swarm-Checkins-Import">https://github.com/aaronpk/Swarm-Checkins-Import</a></p>

<p>The readme has installation and usage instructions, so I'll refrain from repeating all that in this post. Make sure to check out the step by step tutorial in the readme if you want to use this with your own account.</p>

<p>The process is broken up into a couple steps.</p>

<ul>
<li>First, it downloads your entire Foursquare checkin history to JSON files on your computer</li>
<li>Second, it downloads all the photos from your checkins</li>
<li>Third, it publishes each checkin to your website via <a href="https://micropub.net">Micropub</a></li>
</ul>

<p>If your website doesn't support checkins via Micropub, or if you don't want your checkins on your website at all, you can just skip that step entirely, and instead you'll have a complete export of your data locally.</p>

<p>The JSON files contain the raw API response from Foursquare, so you can do what you want with that as well, such as turning it into your own HTML archive using your own custom tools if you want.</p>

<p>The one issue that I don't have a good solution for is handling renamed venues. Unfortunately the API returns the current name for old checkins, so if a venue is renamed, your old checkins will not reflect the name at the time of the checkin. This is particularly strange for businesses that have gone through an acquisition or rebranding, since for example all my old checkins in Green Dragon are now labeled as Rogue Eastside Brewery. As far as I can tell there isn't a good way to handle this, so I may have to go back and manually edit the posts on my website for the venues I know have been renamed.</p>

<p>I hope this is useful to people! I will be sleeping a little easier now knowing that my old checkin history is safely archived on my website now!</p>