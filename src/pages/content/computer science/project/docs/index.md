---
layout: '../../../../../layouts/md/main.astro'
title: "base api endpoints and calls"
desc: "the api endpoints and calls you can make to it"
upDate: 23/09/2024
tags: ["project", "computer science", "api", "docs"]
---
## api -- endpoints
* currently there are **8** endpoints (not including frontends):
    - [api/v1/me](./docs/endpoints/me)
        - displays "at a glance data" such as profile data and currently playing track data
    - [api/v1/me/edit](./docs/endpoints/edit)
        - allows you to query certain json data from your profile and edit its contents
    - [api/v1/me/db](./docs/endpoints/me-db)
        - displays the personal song "database" which keeps track of all songs youve listened to
            - this can be queryed to be searched
    - [api/v1/me/export](./docs/enpoints/export)
        - will download a compressed copy of that users data instantly
    - [api/v1/tracks/:username](./docs/endpoints/tracks)
        - allows you to view the tracks of the user who is queryed
            - only if the profile is either yours of public
    - [api/v1/user/:username](./docs/endpoints/user)
        - allows you to view that users /me data of the user who is queryed
            - only if the profile is either yours or public
    - [api/v1/db](./docs/endpoints/db)
        - allows you to view the public "database" of songs
            - this can be queryed to be searched
    - [api/v1/callback](./docs/endpoints/callback)
        - this is the callback endpoint that spotify requires you to be sent to