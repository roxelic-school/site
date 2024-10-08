---
layout: '../../../../layouts/md/main.astro'
title: "log"
desc: "The log for my horror game project"
upDate: 01/10/2024
tags: ["initial project","game design","development"]
---
## LOG: 30/09/2-24
With 3 weeks to go, my game is currently unstarted

Today i plan to model a few trees that i intend to use in world gen, as it will be randomly placed on load using a pcg plugin,
It didn't go well, i have no tree and no blender add ones apparently so i had to try using the 2.9 version which had it but its improperly rendering my tree now so.
Originally i tried getting a pre made 3d model of a tree or something from an asset pack but they all turned out to be really high polly which these computers couldn't handle, so then i tried modeling one, originally i used a stick with a curve modifier attached to a curve which worked pretty well but it would have been difficult to animate so next i tried using bones which i found to work. Then i couldn't figure out how to model the tree itself so i asked for help from alex and i was told to follow a tutorial using the blender sapling generator plugin which blender 4 didn't have so im using the pre installed version 2.9 blender. That's where i ended the day,

## LOG: 01/10/2-24
With 3 weeks to go, yesterday i began practicing with the blender 2.9 plugin for sapling tree gen

Today i plan to finish my tree model and import it successfully into my unreal project as well as working on the procedural tree gen and ground textures.
My older unreal project was lost so i started again by making a first person template, once i did this i made a 3d open world level where i tried to import my newly finished tree model but these computers are having a hard time importing it. That was all of today, i attempted to add usage of the PCG plugin to generate my trees but the computer struggled massively attempting to load 20 instances of my tree. Tomorrow i will try and make them less polly and if that doesn't work place them manually

## LOG: 03/10/2-24
With 3 weeks to go, yesterday i finished building a tree and imported it into unreal only to find out it wasn't working.

Today i found a set of low polly trees on the unreal marketplace and imported them into my project. I also added texturing to the ground with a dirt texture from bridge. After importing both of the two new assets i found it struggled when rendering them with lower graphics. When i took it home at the end of the day though it worked without any flaws on my home pc even on low graphics so im going to assume its the PCs causing this issue.

## LOG: 04/10/2-24
With 3 weeks to go, yesterday i learned about the issue with rendering light and reflections on these pcs.

Today I plan to make the player light toggleable and add ambient noises.
The light is toggleable but trying to add sprinting just didnt work at all because unreal blueprints is very bad and evil

## LOG: 07/10/2-24
With 2 weeks to go, last week i just started adding a sprinting and stamina feature to my game.

Today I worked on the stamina feature constantly and got it to a point in which id be able to understand where to continue from tomorrow,
The 2 lessons today where mostly spent learning and understanding how blueprints work

## LOG: 08/10/2-24
with 2 weeks to go, Yesterday i made the foundation for my stamina and sprinting mechanics.

Today the 4 lessons where spent doing 2 things, completing the stamina mechanic as well as adding a visual effect to let the player know using a UI widget, (a blueprint component) and adding a functional minimap which was done by adding a spring arm to the player and adding an orthographic camera view to the end of it, it having solid and flat lighting as well as being able to view the player has made it a perfect minimap, the next goal is to add a way to find the exit.