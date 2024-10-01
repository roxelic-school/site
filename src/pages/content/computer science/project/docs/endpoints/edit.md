---
layout: '../../../../../../layouts/md/main.astro'
title: "me/edit"
desc: "The api endpoint /api/v1/me/edit"
upDate: 23/09/2024
tags: ["project", "computer science", "api", "docs"]
---
when calling `/me/edit/` you will require authoirsation with the access token stored in the cookies or now middlewhere
the edit endpoint will redirect the access and to the /me endpoint if it has been a succesful change, if it has not it will return a http error with the messed "nuh uh" the queryable data points include:
- profilepicture
    - the url of your profile picture
    - additional checks?:
        - none
- banner
    - the url of your profile banner
    - additional checks?:
        - none
- description
    - the description of your profile
    - additional checks?:
        - none
- pronouns
    - the pronouns attached to your profile
    - additional checks?:
        - none
- location
    - the location attached to your account
    - additional checks?:
        - none
- favouriteSong
    - the favourite song attached to your account
    - additional checks?:
        - none
- favouriteArtist
    - the favourite artist attached to your account
    - additional checks?:
        - none
- favouriteAlbum
    - the favourite albym attached to your account
    - additional checks?:
        - none
- customlink
    - the custom link attached to your account
    - additional checks?:
        - none
- frontend
    - the frontend that your account will use when logging in
    - additional checks?:
        - is an existing frontend?:
            - YES -- redirect to that frontend
            - NO -- return a cannot GET error
- theme
    - the frontend theme that your accounts frontend will use
    - additional checks?:
        - is an existing theme for your frontend?:
            - YES -- apply theme
            - NO -- use default theme
- username
    - the username of your account
    - additional checks?:
        - is an existing username?:
            - YES -- return `nuh uh`
            - NO -- change username

once this endpoint is called with any amount of querys, if a single one is to fail they all will. The request can have none or all of these querys in any ammount and it will work proplery. the current frontend structures the request in a way so that when it is called only the nessisary querys are requested

---
- this has been written on the 25/09/2024 this may change, as of now the default and only frontend is `base` view past comits on the github repo if seeing this in the future when `base` no longer exists. As of now the repo is private
---