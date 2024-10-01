---
layout: '../../../../layouts/md/main.astro'
title: "Log"
desc: "The log for my project"
upDate: 25/09/2024
tags: ["project", "computer science", "logs"]
---
## 25/09/2024
The project was updated now to have better security and allow users to call private endpoints from an application without the use of cookies, i did this by using a method called `isloggedin` which would check for the pressence of an access token in either the headers or cookies and applying this to middlewear for the current users session.
The reason why i beleive this was a justified and important change is that it will allow users to intergrate data from their profiles even if their private into their public applications that they built using the access to my public facing api which i have permitted as I believe that being public with the api is a great way to allow users to use this to its fullest potential as it makes the scope of this project not limited to the app itself, as refrenced in [initial ideas](./initialideas)

## 01/10/2024
there has been no work done on the project itself in the last 4 days, but i have been planning on the next parts:
- a follow endpoint, where you can query to follow a user and if the profile is public and not blocked you may do so, adding them to your following list and you to their followers list
- a fully working frontend, taking over the api tester at the base endpoint. At this time it will only have a recently played feild as there is no posts yet
- a post endpoint, which you can query to add the song you are currently listening to and other similar thigns
- an upload endpoint for assests and a similar host endpoint for assets
- changing the /frontends/ endpoint to dynamically host the folder content so i can build the frontends in a framework (Astro or NextJS)