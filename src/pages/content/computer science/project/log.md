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