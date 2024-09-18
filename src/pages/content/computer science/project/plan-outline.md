---
layout: '../../../../layouts/md/main.astro'
title: "Plan outline"
desc: "The outline of my plan"
upDate: 18/09/2024
tags: ["project", "computer science"]
---
The idea that im going with is [idea 5](./) this is because it is somthing i will enjoy and it has many parts to it, here is a rough outline of what my plan is:
- create a git repo => `done` => [github.com/roxelic-school/music-social.git](//github.com/roxelic-school/music-social.git)
- initalise the node project => `done`
- log into the spotify api via the node project and console.log what im playing => `done`
    - use my spotify api log in to save it so i only have to log in once, and save data to this account => `done`
        - switch to an **sql** object to hold my data => `done`
    - forcefully play a song on my spotify with the api => `not done`
---
> there will be more steps but i feel like thats a good start

here is the code I have made to just test my idea, this will log into the spotify api after visiting //localhost:8888/login and it will save the login token into the sql object, it will also host what your currently playing and other such data at //localhost:8888/api/v1/{ spotifyusername }<br>

```js
const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 8888;

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT_URI,
});
const db = new sqlite3.Database(path.resolve(__dirname, 'tokens.db'));

db.run(`CREATE TABLE IF NOT EXISTS tokens (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  access_token TEXT,
  refresh_token TEXT,
  username TEXT UNIQUE
)`);

function saveTokens(access_token, refresh_token, username) {
  db.run(
    'REPLACE INTO tokens (access_token, refresh_token, username) VALUES (?, ?, ?)',
    [access_token, refresh_token, username],
    (err) => {
      if (err) {
        return console.error('Error saving tokens:', err);
      }
      console.log(`Tokens saved successfully for user: ${username}`);
    }
  );
}

function getTokensFromDb(username) {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM tokens WHERE username = ?', [username], (err, row) => {
      if (err) {
        return reject(err);
      }
      resolve(row);
    });
  });
}

app.get('/login', (req, res) => {
  const scopes = ['user-read-playback-state', 'user-read-currently-playing', 'user-read-email'];
  res.redirect(spotifyApi.createAuthorizeURL(scopes));
});

app.get('/callback', async (req, res) => {
  const code = req.query.code;

  try {
    const data = await spotifyApi.authorizationCodeGrant(code);
    const { access_token, refresh_token } = data.body;

    spotifyApi.setAccessToken(access_token);
    spotifyApi.setRefreshToken(refresh_token);
    const profile = await spotifyApi.getMe();
    const username = profile.body.id;
    saveTokens(access_token, refresh_token, username);

    res.send('Logged in successfully! You can now close this tab.');
  } catch (err) {
    console.error('Error getting tokens:', err);
    res.send('Error logging in.');
  }
});

app.get('/api/v1/:username', async (req, res) => {
  const username = req.params.username;

  try {
    const tokens = await getTokensFromDb(username);

    if (!tokens) {
      return res.status(401).json({ error: 'No tokens found for this user. Please log in first.' });
    }

    spotifyApi.setAccessToken(tokens.access_token);
    spotifyApi.setRefreshToken(tokens.refresh_token);
    const tokenData = await spotifyApi.refreshAccessToken();
    spotifyApi.setAccessToken(tokenData.body['access_token']);
    saveTokens(tokenData.body['access_token'], tokens.refresh_token, username);
    const playbackData = await spotifyApi.getMyCurrentPlaybackState();

    if (playbackData.body && playbackData.body.is_playing) {
      const track = playbackData.body.item;
      const progress_ms = playbackData.body.progress_ms;
      const duration_ms = track.duration_ms;
      const progress_percent = ((progress_ms / duration_ms) * 100).toFixed(2);

      res.json({
        currently_playing: track.name,
        artist: track.artists.map((artist) => artist.name).join(', '),
        album: track.album.name,
        progress: {
          current_position_ms: progress_ms,
          total_duration_ms: duration_ms,
          progress_percent: progress_percent,
        },
      });
    } else {
      res.json({ message: 'Not playing anything at the moment.' });
    }
  } catch (err) {
    console.error('Error fetching currently playing track:', err);
    res.status(500).json({ error: 'Error fetching currently playing track' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
```
## this code will be imrpoved on later, this is simply a proof of concept

update i ditched that code completly and decided on a more elegant solution
it now uses a total of 6 files (ignore node modules, package.json, package-lock.json, readme.md and .gitignore)

* the files are:
    - initialise/
        - database.js => this file makes/opens/updates the database kinda just like a library for it because they scare me
        - server.js => this file starts the server and calls the loops, so like getting the current song etc etc, theres more about this in the actual file so feel free to hop into the git repo and check
        - spotify.js => this file just initalises the spotify api which other files will call upon
    - .env => its a seceretes file so i dont expose somthing like my api key or client secerete
    - database.db => this is the database itself, i have not included this in the git repo for very obvious reasons
    - index.js => starts the server

> i didnt add more code because of how many files there are and the fact you can just go to the git repo

* there are a few things that currently need fixing that id like to bring attention too
    - you need to be added in my developer portal to use the api until i make the app public on spotify and i can only have 25 users so i plan to make a dummy account
    - currently it struggles registering multiple of the same song
    - id like to make it so the recent tracks are at a different endpoint and it displays 5 of them by calling that endpoint so theres a way to get all data
    - id like to make an increment of total time listened and total songs listened and total artists listened
    - i need to add a way to view other people recently played songs and point out ones theyve listened to a ton
    - i also need to find a way to add friends, probably an endpoint that when called it will get the query and add that to a list of friends or send a request? maybe ill have it like following
        - dms will use somthing similar but you both need to follow eachother or you will get an error 403
    - finnaly id like to add a dummy static site to interact with the website