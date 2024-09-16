---
layout: '../layouts/md/main.astro'
title: "how this website works"
desc: "why i should not be trusted to use a computer"
---
This is going to be relativly short until the next update (sorry)<br>
but,<br>
Since astro has difficulty generating html content serverside I make it generate some json content [here](../api/fileparse.json), the website has a javascript file which will parse this data into the html formatting that the sidebar uses, so it is built on runtime which i think was a pretty cleaver solution. Originally i was going to have it be placed in a html element but that was just eugh and id very much rather not.<br><br>

so ive made a node script which will return the json and add it to the public/api folder before build because vite and astro dont support enpoints that use methods such as fs, so in the github repo for it youll be able to see that in /src/lib/ theres two files, fileparse.js and pain.js running pain.js will import the json data from fileparse.js and create a file in ../../public/api/ which will then be built into the website itself rather than using a live endpoint