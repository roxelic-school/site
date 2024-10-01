---
layout: '../../../../../../layouts/md/main.astro'
title: "tracks/:username"
desc: "The api endpoint /api/v1/tracks/:username"
upDate: 01/10/2024
tags: ["project", "computer science", "api", "docs"]
---
when calling `/tracks/:username/` you will require authoirsation with the access token stored in the cookies or now middlewhere if the profile is private, this will check if the profile is yours or not. If the user has a public account though then the data will be free for anyone to request as it is not sensative

this endpoint keeps track of all the songs the user has listened to and when, as well as how long

- [list]
    - title
        - the song title
    - artist
        - the song artist
    - album
        - the song album
    - date
        - the date this instance of the song was listened to
    - hour
        - the hour this instance of the song was listened to
    - minute
        - the minute this instance of the song was listened to
    - percentDone
        - the percentage done of this track
    - lenth
        - the legnth in miliseconds /1000 /60 (so close enough to minutes but not really)

this endpoint is queryable for
- ?amount=
    - if the amount is null or more than the total amount of songs it will simply return all tracks