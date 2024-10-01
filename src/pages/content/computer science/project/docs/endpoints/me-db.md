---
layout: '../../../../../../layouts/md/main.astro'
title: "me/db"
desc: "The api endpoint /api/v1/me/db"
upDate: 01/10/2024
tags: ["project", "computer science", "api", "docs"]
---
when calling `/me/db/` you will require authoirsation with the access token stored in the cookies or now middlewhere

the database of songs you have listened to

- [list]
    - title
        - the title of the song
    - artist
        - the artist of the song
    - album
        - the album of the song
    - id
        - the spotify id of the song
    - images [list]
        - [0]
            - height
                - image height
            - url
                - image url
            - width
                - image width
        - [1]
            - height
                - image height
            - url
                - image url
            - width
                - image width
        - [2]
            - height
                - image height
            - url
                - image url
            - width
                - image width
    - grenres [list]
        - [0]
            - genre[0]
        - [1]
            - genre[1]
        - ... etc until no more genres for that song
    - length
        - the length of the song in miliseconds / 1000 / 60 (so close to minutes but not quite)
    - playCount
        - the amount that song has been played

this endpoint also follows the database query structure covered in most other searchable endpoints
- ?title=
    - the song title
- ?artist=
    - the song artist
- ?album=
    - the song album
- ?genre=
    - a genre that the song falls under
- ?id=
    - the spotify id of the song