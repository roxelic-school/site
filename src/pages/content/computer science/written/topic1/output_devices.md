---
layout: '../../../../../layouts/md/main.astro'
title: "Output devices"
desc: "the notes i took in lesson 5"
upDate: 16/10/2024
tags: [
    'output',
    'output devices',
    'dot matrix',
    'dot matrix printers',
    'laser printers',
    'laser',
    'printers',
    '3d',
    '3D',
    '3d printers',
    '3D printers',
    'cutters',
    '2d cutters',
    '3d cutters',
    ''
]
---
## output devices
- Output devices help transfer processed data to users
- the output data can be images, videos, sound and machining code

### inkjet printers
used to print high-quality photographic images<br>
A disadvantage of this type of printer is that ink cartridges need to be refilled frequently

| part | function |
| ---- | -------- |
|print head | consists of nozzles that spray drops of ink onto the paper to form different characters |
| ink cartridges | each cartridge consists of a group for each colour (blue, yellow and magenta) and a black cartridge |
| stepper motor and belt | moves the print head assembly across the page side to side |
| paper feed | automatically feeds the printer with pages as required |

### technologies to produce ink droplets
#### thermal bubble:
tiny resistors produce localised heat that vaporises the ink, the bubble of ink is ejected from the paper head onto the paper. when the bubble of ink collapses, a vacuum is created to draw fresh ink from the print head.
#### piezoelectruc
A crystal at the back of the ink reservoir is given an electric charge and vibration is created.<br>
This vibration forces the ink to be ejected onto the paper.

### printing process
data is sent to the printer driver, printer drier checks the format and availability of the printer. data->buffer<br>
the sensor checks the paper feed tray. the printer head moves from side to side and the ink of four colours are sprayed in correct proportion to get the desiered color<br>
once a line is completed, the paper moves slightly to print a new line. the previous process is repeated until the buffer is empty<br>

once the buffer is empty, the printer sends an interrupt to the processor and requests more data. the whole process continues until the document is printed.

### laser printers
- A laser printer uses dry powder ink rather than liquid ink as in inkjet printers
- uses static electricity to print
- prints the whole page in one go
- carries large print jobs at a good speed and does not run out of ink half way
- laser printers are effeciient when the content has a lot of text

### dot matrix printers
- dot matrix printer, also called an impact printer, has a printhead consisting of a matrix of pins
- it produces characters and images by striking pins agains an ink rubbon to print closely spaced dots in appropriate shapes
- this type of printer is expensive and works even in damp enviroments
- but, this type of printer is also noisy, slow and offers a poor print quality
- suitables for mulipart stationary

## 3d printers
3d printers are widely used in computer-aided design to produce solid objects of various materials, such as powedered mag, resin, ceramic powder, plastic etc.

<br>

A design is made using computer-aided design software<br>
the final drawing is imported to a 3d printer<br>
the 3d printer is set-up according to the features of the 3D object,<br>
the 3d object is built layer by layer<br>
the final object is prepared after processing the 3D object.<br>

In 3d printers, the objects are built layer by layer. 0.1mm?

## 2d and 3d cutters
laser cutters can cut through materials such as glass, crystal, metal, polymers and wood

- very complex intricated designs can be cut through the materials using sophisticated software
- the coordinates are used to recognise the object

## speakers
digital data stored in the computer is converted to analogue data that can vibrate a cone in a speaker (DAC)<br>
the sound wave is passed through the amplifier<br>
<finish this>

## digital to analogue converter
- the DAC converts digital data to analogue data at a rate called the sampling rate
- the sampling rate for a 16 big DAC is 44100 samples per second. This means that the DAC can convert 44100 values in the range
<finish this>

## LCD and LED monitors
- liquid crystal diode/display (LCD) monitors have replaced cathode-ray monitors
- LCD monitors consist of tiny diodes grouped in threes or fours for a pixel. the three basic diode colours are red, green and blue
- an extra yellow diode is included to make colours more vivid
- early LCD monitors used cold cathode fluorescent lamps (CCFL) for backlighting
- modern LCDs use groups of LEDs for backlighting

<br>

the advanted of LEDs over CCFL technology are:
- LEDs reach maximum brightness almost immediately
- LED gives a whiter light that sharpens the image and makes the color more vivid
- monitors using LEDs are thinner compared to CCFLs
- LEDs have a long ligetime, lasting almost indefinately
- LEDs consume very little power

<br>

Futuristic LED technology uses organic compounds to create semiconductors that are flexible. This technology is called Organic Light emmiting diodes (OLEDs) No backlighting is required in these types of LEDs as they can produce their own light, Hence the screens are much thinner
<br>
LED and LCD screens are widely used in hand-held devices such as mobile phones, rablets, game consoles, etc. these screens are thin, light weight and very responsive to touch.

## light projectors
### Digital light projector:
a digital light projector consists of millions of micro-mirrors.
when a micro-mirror is tilted towards the light source, it is ON. When it is tilted away it is OFF. millions of micro-mirrors combine to create dark and bright pxiels on the screen.
These mirrors can switch several thousand times a second to produce 1024 different gray shades.

### LCD projectors
LCD projectors are older technologies compared to DLP
a high-intensity light beam passes through an LCD display and then falls on a screen

## coloured images in DLP
- colored images are projected by using a passing white light through a colour filter on its way to a DLP chip
- the white light is split into different primary colors and over 16 million different colors can be produced
- the state of each micro mirror is linked to the color filter to determine the pixels of the colored image