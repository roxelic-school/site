---
layout: '../../../../../../layouts/md/main.astro'
title: "me/export"
desc: "The api endpoint /api/v1/me/export"
upDate: 01/10/2024
tags: ["project", "computer science", "api", "docs"]
---
when calling `/me/export/` you will require authoirsation with the access token stored in the cookies or now middlewhere

this endpoint returns the users data compressed to the max amount in a .zip file, this .zip is generated live so it will be the most up to date data when requested

This endpoint will return some html warning the user about the sensative data the returned zip file will contain, as it will contain the users acess token and refresh token