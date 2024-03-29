---
title: "Automators 30: Our Recent Automations (& Shortcuts Album Player)"
last_modified_at: 2021-10-10 00:00
date: 2019-08-16 19:00
type: post
published: true
layout: post
artwork: automators
tags:
  - Automators
  - Podcast
  - Shortcuts
redirect_from:
  - "/2019/08/16/automators-30-our-recent-automations.html"
---


  In episode 30 of Automators David and I thought we'd share a few of our recent
  automations with you - as well as updating my TextExpander outputs to
  accommodate a switch in my email addresses I had some fun with Shortcuts!  

<!--more-->

  When I was at
  <a href="https://rosemaryorchard.com/macstock-2019/">MacStock</a> not only did
  I have a great time but I spent some time making Shortcuts! Shortly after my
  deeper dive talk I got a chance to chat to an Automators fan, Bodie Quirk, who
  showed me his setup for playing entire albums from certain artists. Everything
  he had was working, but it was getting difficult to maintain (something that
  will probably happen to everyone at some point or another!). The challenge
  intrigued me, so I sat there for a while with an iOS 12 iPad and keyboard and
  poked at the problem. It took a few attempts (Bodie said he could see my brain
  working, what a compliment!), but I ended up with three Shortcuts which can do
  _everything_, and will do all the maintenance themselves!  

  These Shortcuts are based on files saved in iCloud, you could save them in
  Dropbox if you prefer but they're only text files so won't take up much space.
  Shortcut #1 maintains our lists of artists - this file is used in Shortcut #2
  as well to help maintain the album lists.  
<h2
  id="-album-chooser-artists-https-www-icloud-com-shortcuts-64c124abeffa4980a28e2f3301bf4617-"
>
  <a href="https://www.icloud.com/shortcuts/64c124abeffa4980a28e2f3301bf4617"
    >Album Chooser Artists</a
  >
</h2>

  <a href="https://rosemaryorchard.com/wp-content/uploads/2019/08/IMG_2895.jpeg"
    ><img
      class="aligncenter wp-image-3716"
      src="{{ "/assets/2019/08/IMG_2895.jpeg" | absolute_url }}"
      alt=""
      width="350"
      height="611"
  /></a>  
<ol>
  <li>
    <code>Create Folder</code> - this is necessary for the other steps to work,
    and once the folder has been created it will just continue on with life as
    normal.
  </li>
  <li>
    <code>Get File</code> - this checks for the current artists file. It
    specifically doesn't throw an error if it's not found because then when you
    run the Shortcut for the first time (or if you've deleted the file for some
    reason) then you can create it with this step.
  </li>
  <li>
    <code>Get Text from Input</code> - grabs the contents of our artists list if
    there is one
  </li>
  <li>
    <code>Text</code> - here we put the content of the current artists list and
    <code>Ask When Run</code>, the Text action with <code>Ask When Run</code> is
    bigger than the ask for input button so its ideal here.
  </li>
  <li>
    <code>Save File</code> - save our list of artists where the next Shortcut
    can grab them.
  </li>
</ol>
<h2
  id="-update-artist-albums-https-www-icloud-com-shortcuts-88e31418b97c4dad8931ea6bb943767f-"
>
  <a href="https://www.icloud.com/shortcuts/88e31418b97c4dad8931ea6bb943767f"
    >Update Artist Albums</a
  >
</h2>

  <a href="https://rosemaryorchard.com/wp-content/uploads/2019/08/IMG_2889.jpeg"
    ><img
      class="aligncenter wp-image-3714"
      src="{{ "/assets/2019/08/IMG_2889.jpeg" | absolute_url }}"
      alt=""
      width="350"
      height="1297"
  /></a>  


  This Shortcut starts by setting a variable to nothing so that we have an empty
  list of albums. Then it grabs the lists of artists (maintained by the previous
  Shortcut, if it doesn't find it run the first Shortcut), and gives them to you
  as a list of artists to choose from. Then once you have chosen an artist it
  finds all the music where the artist is your chosen artist and gets the album
  name and if it doesn't have that album name in the list yet then it adds it.
  This is the part of the Shortcut that make take a long time to run if you have
  a prolific artist. Then it grabs the list of albums and saves them into a file
  with the name of the artist. If you want to be able to exclude albums then add
  a <code>Choose from List</code> action between
  <code>Get Variable: Albums</code> and <code>Combine Text</code> and make sure
  it's set to Allow Multiple (I'd also recommend checking all the albums by
  default).  
<h2
  id="-play-album-by-artist-https-www-icloud-com-shortcuts-ac4ef17da46041dc8b9d36545a439153-"
>
  <a href="https://www.icloud.com/shortcuts/ac4ef17da46041dc8b9d36545a439153"
    >Play Album By Artist</a
  >
</h2>

  <a href="https://rosemaryorchard.com/wp-content/uploads/2019/08/IMG_2892.jpeg"
    ><img
      class="aligncenter wp-image-3715"
      src="{{ "/assets/2019/08/IMG_2892.jpeg" | absolute_url }}"
      alt=""
      width="350"
      height="652"
  /></a>  


  This is the Shortcut which you would use most of the time - the one that lives
  in your widget and with a few taps will play the album of your choice. It
  starts by grabbing a list of all the album files from our last Shortcut, this
  way even if you added a new artist if you didn't run the Shortcut yet to get
  their albums you won't run into an error. After you've picked your artists it
  uses the contents of the file to show you a list of the albums by that artist,
  it grabs the music from that album sorted by track number and then plays it.  


---


  You can download the Shortcuts here (make sure to run them in the right
  order!):  
<ol>
  <li>
    <a href="https://www.icloud.com/shortcuts/64c124abeffa4980a28e2f3301bf4617"
      >Album Chooser Artists</a
    >
  </li>
  <li>
    <a href="https://www.icloud.com/shortcuts/88e31418b97c4dad8931ea6bb943767f"
      >Update Artist Albums</a
    >
  </li>
  <li>
    <a href="https://www.icloud.com/shortcuts/ac4ef17da46041dc8b9d36545a439153"
      >Play Album By Artist</a
    >
  </li>
</ol>


  Check our
  <a href="https://www.relay.fm/automators/30">episode 30 of Automators</a>!  
