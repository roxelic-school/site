---
layout: '../../../../layouts/md/main.astro'
title: "project overview"
desc: "The initial ideas and refrencing of my project"
upDate: 18/09/2024
tags: ['citations', 'music', 'rationalising']
---
## project overview and rationalising

My project will allow for a user or group of users, to share their love of music freely across many forms of media, with it having an open api for the public so that it can also be intergrated through into other projects, similar things to this can be seem with `LastFm` but they have a much more restricted public api.
<line break>
"Music sharing is one of the most important components in interactive entertainment. In recent years, mobile music market has experienced a rapid growth"(Zhao, Z.Y., Wang, C.D., Zheng, P.J., Gong, Q., Huang, K.W. and Lai, J.H., 2015, August. Music sharing platform based on sina app engine. In 2015 Ninth International Conference on Frontier of Computer Science and Technology (pp. 298-303). IEEE.)
<line break>

the growth of the music industry recently has allowed almost everyone to find a neiche that they enjoy or listen to, a flaw with this is that it is rather difficult to share your music taste with other people due to the limiations of social platforms. With the social interactions on current music sharing platforms being limited
<line break>
"Even on platforms such as SoundCloud where the nature of the social ties may not be strong because the social ties are on-line only and do not represent a “real world” connection," (Sams, J., 2019. Learning or Herding? Understanding Social Interactions and the Distribution of Success on a Social Music Sharing Platform. Stanford University.)

## other providers
One of the other features my program plans to impliment is its own version of "group sessions" or "jams" currently there are 2 providers which try to offer the ability to listen as a group, that being [discords](//discord.com) `listen along` feature and [spotifys](//spotify.com) `jam` feature, the issue with both features is that they dont work well and they are expensive, with getting access to discords costing both a spotify premium subscription and a discord nitro subscription. Spotifys feature also doesnt provide an in sync listening experience as there are some very large delays to avoid this here is how i plan to make mine.
<br><br> 
In the social development communities that i am in there are multiple programs which have been made to attempt to do a similar music tracking thing to my project [lastFM](//lastfm.com), [airbuds](//play.google.com/store "its on the app store, and it has no web ui") and [spotistats](//https://spotistats.app/) but these all lack a compitent social interactions aspect. My goal is to bring people together in ways that havent been done before relating to music and also giving artists a dedicated platform to promote their music on.
<line break>
"As there are estimated to be 4.89 billion social media users by the end of 2023 (Statista 2022), using social media as a tool for personal branding is more important and effective than ever. “In a world where anyone can start a blog or create a social media profile, it has become more important than ever to have a personal brand… A personal brand allows you to control your own narrative and can help you stand out from the competition.” (White May 2020)." Rosenfeld, P., 2024. The Role of Social Media Marketing in Music Artist Promotion.
<line break>

## the problems my project will solve
I aim to specifically make the issues ive had when trying to connect with people and intergrate my music taste into my projects something which is easily fixable, the issues ive had include
- not being able to get my currently playing song easily, without exposing my api key
- not being able to share my opinions on music easily because i find it difficult personally to express that through words
- finding new songs and making playlists that ill enjoy
- finding people who have the same music taste as me

<line break>
"In summary, the present study provides strong evidence for specific music similarity and overall music similarity in Dutch early adolescent friendships." Selfhout, M.H., Branje, S.J., ter Bogt, T.F. and Meeus, W.H., 2009. The role of music preferences in early adolescents’ friendship formation and stability. Journal of adolescence, 32(1), pp.95-107.
<line break>

Ive personally found the friends ive made that have a similar music taste to are ones that im closer to, which is why i beleive this to be a very worthwhile idea. It will allow the users to connect in a way which they cannot normally do, it would also allow them to explore more songs that they would enjoy improving both their social life and music libraries. A large portion of people I talked to before planning out this idea told me about how they either have a singular large playlist that they listen to or only listen to artists that they already know they like and are familiar with, Meaning they dont often discover newer songs sticking to the same playlists and albums, that being the main issue i plan to solve.

---

My platform will aim to bridge gaps between music genres and the connections between users, The way i intend to do this is with multiple features such as
* recommending music based on similar genres
    - this will be done by collecting the genre data of the music the user has been listening to, and comparing them to other users. Not only this but it will keep track of the artists youve been listening to a lot and the tracks giving extra attention to those. It will be a live learning algorithm so the more data its given the better it will be able to share the data, it will also use melodically similar genres and artists to recommend, so if your listening to a lot of `punk rock` it would recommend `gothic rock` as they are very similar musically and very hard to distinguish
- allowing users to share what song their listening to using a posts system revolving around sharing music, this would also allow people to discover other songs based on the people they assosiate with which tends to be people that have similar music tastes.
    - the way i plan to do this is by having an api endpoint which will take your spotify auth token as varifaction once that has been met it will add a post to your account, and when finding the `timeline` of other users it will look for accounts with similar tastes or ones youve previously interacted with and fetch their account posts, the similar music takes will be one of the 3 algorthms i plan to create for it,
        - similar users
        - similar artists
        - similar songs
- intergration with user made apps, with it having a strong public facing api, here is an example of an application using my account username as sample data
    - [python top-bar](./examples/python_intergration)


[
    ```
    One of the other features my program plans to impliment is its own version of "group sessions" or "jams" currently there are 2 providers which try to offer the ability to listen as a group, that being [discords](//discord.com) `listen along` feature and [spotifys](//spotify.com) `jam` feature, the issue with both features is that they dont work well and they are expensive, with getting access to discords costing both a spotify premium subscription and a discord nitro subscription. Spotifys feature also doesnt provide an in sync listening experience as there are some very large delays to avoid this here is how i plan to make mine.
    ```
](#other_providers)

- having it use a track list added to by add participents within my app
- having it set the track of all the participents on my server at the same time using nodejs's threading application abilities
- having it be done with a dynamically generated link and api endpoint, the creator of this will add authorised users to it and if the user is not authorised they will not be able to view it. The way it will work is by generating a "room" (a javascript object) with a randomised name as long as one currently doesnt exist, they will be stored in a list object) and having the creator in one item, the other participents in a list object below it, the currently playing track, a queue of more tracks. (there will be a query endpoint allowing for users to be added or tracks also to be added to said room) once the room has either been inactive for 30 minutes or closed it will be deleted from the list and all current users will be disconected.

[the discord listen along with spotify feature](https://support.discord.com/hc/en-us/articles/115003966072-Listening-Along-with-Spotify)

[the spotify jam feature](https://support.spotify.com/us/article/jam/)

