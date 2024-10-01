---
layout: '../../../../../layouts/md/main.astro'
title: "python intergration"
desc: "A python script demonstarting an intergration of my tool"
upDate: 01/10/2024
tags: ["project", "computer science", "docs"]
---
```py
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