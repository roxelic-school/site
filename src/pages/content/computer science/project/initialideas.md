---
layout: '../../../../layouts/md/main.astro'
title: "initial ideas"
desc: "The initial ideas and refrencing of my project"
upDate: 18/09/2024
tags: ['citations', 'music', 'rationalising']
---
## project overview and rationalising

My project will allow for a user or group of users, to share their love of music freely across many forms of media, with it having an open api for the public so that it can also be intergrated through into other projects, similar things to this can be seem with `LastFm` but they have a much more restricted public api.
[//]: <>
"Music sharing is one of the most important components in interactive entertainment. In recent years, mobile music market has experienced a rapid growth"(Zhao, Z.Y., Wang, C.D., Zheng, P.J., Gong, Q., Huang, K.W. and Lai, J.H., 2015, August. Music sharing platform based on sina app engine. In 2015 Ninth International Conference on Frontier of Computer Science and Technology (pp. 298-303). IEEE.)
[//]: <>
the growth of the music industry recently has allowed almost everyone to find a neiche that they enjoy or listen to, a flaw with this is that it is rather difficult to share your music taste with other people due to the limiations of social platforms. With the social interactions on current music sharing platforms being limited
[//]: <>
"Even on platforms such as SoundCloud where the nature of the social ties may not be strong because the social ties are on-line only and do not represent a “real world” connection," (Sams, J., 2019. Learning or Herding? Understanding Social Interactions and the Distribution of Success on a Social Music Sharing Platform. Stanford University.)

## other providers
One of the other features my program plans to impliment is its own version of "group sessions" or "jams" currently there are 2 providers which try to offer the ability to listen as a group, that being [discords](//discord.com) `listen along` feature and [spotifys](//spotify.com) `jam` feature, the issue with both features is that they dont work well and they are expensive, with getting access to discords costing both a spotify premium subscription and a discord nitro subscription. Spotifys feature also doesnt provide an in sync listening experience as there are some very large delays to avoid this here is how i plan to make mine.

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
    - ```py
        import tkinter as tk
        import math
        import time
        import http.client
        import json
        import ctypes
        from tkinter import font

        def gettrack(user, default):
            conn = http.client.HTTPSConnection("music.foreverpain.lol")
            conn.request("GET", f"/api/v1/user/{user}")
            response = conn.getresponse()
            data = response.read()
            decoded_data = data.decode("utf-8")
            json_data = json.loads(decoded_data)
            conn.close
            if (json_data.get("currentlyPlaying")):
                return f"{json_data.get('currentlyPlaying').get('track')} by {json_data.get('currentlyPlaying').get('artist')} on {json_data.get('currentlyPlaying').get('album')}"
            else:
                return default

        def hide_bar(event):
            root.withdraw()

        def show_bar(event):
            root.deiconify()

        def update_left_text():
            new_text = gettrack("roxcelic","nothing is currently playing")
            left_label.config(text=new_text)
            root.after(3000, update_left_text)
            
        root = tk.Tk()
        screen_width = root.winfo_screenwidth()
        screen_height = root.winfo_screenheight()
        root.geometry(f"{screen_width}x20+0+0")
        root.overrideredirect(True)
        root.attributes("-topmost", True)
        custom_font = font.Font(family="Pixelify Sans", size=12)
        bar = tk.Frame(root, height=20, bg="black")
        left_label = tk.Label(bar, text="Initial Left Text", font=custom_font, fg="white", bg="black")
        right_label = tk.Label(bar, text="nom"*10, font=custom_font, fg="white", bg="black")
        left_label.pack(side="left", padx=10)
        right_label.pack(side="right", padx=10)
        bar.pack(side="top", fill="x")
        bar.bind("<Enter>", hide_bar)
        root.bind("<Leave>", show_bar)
        update_left_text()
        root.mainloop()
        ```
    - the way this works is by creating a tkinter window at the top of the users screen and displaying the data fetched from the public facing api in the top left, this can only be done if the users profile is a public profile, if it is private you will get a http 403 error with the message "users profile is private" and if the profile doesnt exist you will get a http 404 error with the message "the requested user doesnt exist


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

