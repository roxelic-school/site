---
layout: '../../../../../../layouts/md/main.astro'
title: "me"
desc: "The api endpoint /api/v1/me"
upDate: 23/09/2024
tags: ["project", "computer science", "api", "docs"]
---
When calling `api/v1/me` you will need the authentication key proiveded by spotify which is typically saved in cookies which is where it will pull it from, so far i havent been able to find an alternative way to call this endpoint which was my goal but it is theoretically possible which is why it does require your access token

the headings that it will return to you are:
- id: {spotify username/id}
- displayName: {spotify displayName}
- Username: {the username assigned to you in this program}
- profilepicture: {the url that will hold the profilepicture when it is properly implimented}
- banner: {the url that will the banner when it is properly imlimented}
- description: {your profiles description}
- pronouns: {your personal pronouns that you assign}
- location: {your location that you assign -- i took this idea from github}
- favouriteSong: {your favourite song that you assign yourself}
- favouriteArtist: {your favourite asrtist that you assign yourself}
- favouriteAlbum: {your favourite album that you assign yourself}
- customlink: {the link that you assign to link out of the app to other projects e.g. github}
- frontend: {the frontend that /callback will redirect to}
- theme: {the theme the frontend will use}
- totalSongsListened: {the total amount of songs youve listened to while using this program}
- totalSongsListened: {the total amount of minutes that youve listened to while using this program}
- genres: {an object containing all the genres youve listened to with the amount next to it}
* currentlyPlaying:
    - title: {the song title}
    - artist: {the song artist}
    - album: {the songs album}
    - legnth: {the song legnth in minutes}
    - percentDone: {the percentage of the song that is done}
    - amountDone: {the amount of the song finished in milliseconds}
    - id: {the spotify song id}

This is an endpoint which is not designed to be called, so bare that in mind when attempting to. the only time it should be called is when using the application

## as of 25/09/2024
it is now possible to call the api with your access token in the headers and receive your data, this can be done with any private endpoint such as ones that require you to be logged in. all except /me/export as i felt handeling personal data in that manor was not secure or sensible