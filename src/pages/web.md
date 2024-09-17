---
layout: '../layouts/md/main.astro'
title: "how this website works"
desc: "why i should not be trusted to use a computer"
---
The way that this website works is really silly, i know it is and i admit that.
<br><br>
Since this website is built in the astro framework my original idea was to have an api endpoint which will return some json telling the page how many files and folders it would have to make, but astro would not let me compile this endpoint into a static build so i had to get a little bit creative.
<br><br>
Rather than having the page data json file be dynamically made at a static endpoint i created a node js script