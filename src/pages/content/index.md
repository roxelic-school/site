---
layout: '../../layouts/md/main.astro'
title: "how this website works"
desc: "hi"
---
This is going to be relativly short until the next update (sorry)<br>
but,<br>
Since astro has difficulty generating html content serverside I make it generate some json content [here](../api/fileparse), the website has a javascript file which will parse this data into the html formatting that the sidebar uses, so it is built on runtime which i think was a pretty cleaver solution. Originally i was going to have it be placed in a html element but that was just eugh and id very much rather not.