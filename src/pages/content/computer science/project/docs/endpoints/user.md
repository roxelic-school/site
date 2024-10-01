---
layout: '../../../../../../layouts/md/main.astro'
title: "user/:username"
desc: "The api endpoint /api/v1/user/:username"
upDate: 01/10/2024
tags: ["project", "computer science", "api", "docs"]
---
when calling `/user/:username/` you will require authoirsation with the access token stored in the cookies or now middlewhere if the profile is private, this will check if the profile is yours or not. If the user has a public account though then the data will be free for anyone to request as it is not sensative

- id
    - the spotify id of the user
- displayName
    - the spotify display name of the user
- username
    - the local username of the user
- banner
    - the url to the banner that user uses on their profile
- description
    - the users chosen description
- pronouns
    - the users chosen and correct pronounts
- location
    - a location the user has added to their profile
- favouriteSong
    - a link to that users favourite song on spotify
- favouriteArtist
    - a link to that users favourite artist on spotify
- favouriteAlbum
    - a link to that users favourite album on spotify
- frontend
    - the frontend the user uses
- theme
    - the frontend theme that, that user uses
- totalSongsListened
    - the amount of songs that user has played (not indevidual)
- totalMinutesListened
    - the amount of minutes that user has played
- genres [object]
    - genre title
        - amount played
    - genre title
        - amount played
    - .. etc
- currentlyPlaying
    - title
        - the title of their currently playing song
    - artist
        - the artist of the song they are currently listening to
    - length
        - the legnth of the song they are listening to in mili seconds /1000 /60 (so close enough to minutes but not really)
    - percentDone
        - the percentage done of the track they are currently listening to
    - amountDone
        - the amount of mili seconds in a song they are
    - id
        - the spotify id of the song they are currently listening to
- represts [object]
    - song title
        - amount repeated
    - song title
        - amount repeated
    - ... etc (a repeate is listened to 5 times exactly, 10, 15, 20 etc dont count)
- artistRepeats [object]
    - artist name
        - amount of times the user has repeated this song
    - artist name
        - amount of times the user has repeated this song
    - ... etc