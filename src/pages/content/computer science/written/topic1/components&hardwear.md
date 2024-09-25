---
layout: '../../../../../layouts/md/main.astro'
title: "components and hardwear"
desc: "components and hardwear of computers and computing software"
upDate: 25/09/2024
tags: ['hardware', 'CPU', 'clock', 'cache', 'cores', 'pipelining', 'embedded systems', 'wordsize']
---
# components of computer hardware
- a computer consists of various hardware components that act as input, processing unity and output.
- the essential hardware components of a computer are cpu and memory, which work together to run programs

### ocr accepted lies (apparently)
- usually mobile devices will use whats known as the `harboured` architexture
- desktop computer will use the `john von neuman` architwxture

## cores
- a cpu consists of multiple processing units. each processing unit is known as a core
- a core consists of a processor (ALU and CU) and registers
- computers may be dual (two), quad (four) or even more cores
- as the number of cores increases the computer has more power to execute multiple programs at a particular insant of time

<br>

- when the number of cores is increased, the communication channels between the cores also use up some of the speed
- hence increasing the number of cores four times will not increase the speed of computer of the computer four times
> just because theres more cores doesnt mean the speed will increase proportinatly

## clock rate
- close rate indicates the number of instructtions processes by a cpu in a second
- it is measured in megahertz (MHz) or gigiaheatz (GHz)
- A 4GHz CPU processes about 4 billion instructions a second
- A faster cpu requires more power and thus, heat is generated. heat is a form of power loss
- the speed of the computer which is set by default can also be changed using BIOS
- increasing the speed of the computer by increasing the CPU clock speed is called over-clocking
- A CPU has circuitry limiations regarding the speed. if a computer is forced to work at a higher speed more than its limit, the instructions might not get executed completely. this leads to data corruptions and overheating

## cache size
- cache is a small memory part located closer to CPU when compared to RAM
- cache temporarily holds the data and instruction that the CPU is likely to use more frequently
- to reduce the access time, the control unit checks cache first before requesting any instruction from RAM or main memory

<br>

- due to the presence of cache, the speed of the cpu increases
- as the cache is near to the cpu it is faster to use a cache than to use RAM

- cach can be classified into three levels as level1, level2, and level3

| lavel | size | location | access time |   |
| ----- | ---- | -------- | ----------- | - |
| 1 | 8kb to 64kb | CPU chip | cpu chip Z fastest (runs at the speed of cpu) | smallest cache in the cpu |
| 2 | bigger than L1 | between cpu and ram. sometimes built into cpu with l1 | slightly longer than L1|   |
| 3 | bigger than l2 | between the cpu and ram but further away from cpu | slightly lonher than l2 | the more memory available with l2 and l3 the faster a computer can run |

> L3 is shared between multiple cores

## pipelining
- in pipelining the instruction required next is placed in a queue so that it can be fetched next
- processor need not wait for the current execution proxess to complete to fetch the next instruction

pipelining is where the output of one stage is the input for the next stage and pipelining is an important computational method as the idea of pipelining can be used to speed up tasks being carried out .<br>
consider the process of watching and drying sets of layndry

> a example of not pipelining

| 10am | 11am | 12pm | 1pm | 2pm | 3pm | 4pm | 5pm |
| ---- | ---- | ---- | --- | --- | --- | --- | --- |
| wash1 | dry1 | wash2 | dry2 | wash3| dry3 | wash4 | dry 4 |

> an example of pipelining

| 10am | 11am | 12pm | 1pm | 2pm | 3pm | 4pm | 5pm |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| wash1 | dry1 | ---- | ---- | ---- | ---- | ---- | ---- |
| ---- | wash2 | dry2 | ---- | ---- | ---- | ---- | ---- |
| ---- | ---- | wash3 | dry3 | ---- | ---- | ---- | ---- |
| ---- | ---- | ---- | wash4 | dry4 | ---- | ---- | ---- |

## types of pipelining
### instruction pipeline
the pipelining with respect to instructions, that involves fetching instructions in a queue to preform fetch - execute - decide cycle

### arithmatic pipeline
Involves breaking an arithmetic instruction into some parts and overlapping them as they are performed.

## pipelining: limitations
- consider branching instructions such as jump if carry (jc)
- in case of carry in an addition operation, the program counter skips certain instructions and points to address specified in js instruction
- in this case, the pipelining feture may not work
- the instructions in the current pipes are flushed off
- flushing pipes and filling them again reduces the positive effects of pipelining

## word size
- each word has its own specific address
- in case of read and write operation, it is important for us to know the address of the memory location
- address bus transmits this address
- the width of the address bus may be 8, 16, 32 or 64 depending upon the type of processor
- the width of the address bus plays an important role in determining the maximum possible memory capacity of the system

<br>

- for example: if the address bus is of width 8 bits, the highest address it will be able to point to is 1111 1111 in binary, which is 255 ub decunal. this irepresents 256 memory locations
- similarly if the address bus is of width 16 bits, it will be able to point to 216 (65536) different memroy locations

## data bus
- data bus transmits instructions and data between processor, memory and peripherals
- an instruction consists of opcode and operand
- the width of the data bus determines the number of different instructions and largest operands of a processor
- let us consider a data bus that is 8 bits wide. it will be able to hold values ranging from 0 to 2^(8)-1 (255)

# embedded computers
- embedded computers are designed to preform a dedicated function within a large mechanical or electrical system
- for example: mp3 players, digital cameras and GPS
- a computer embedded points of sale billing system is also an example

<br>

- an embedded system is programmed durings its manufacturings stage
- users operate these devices using interfaces such as buttons or touch screens provided
- embedded systems are more reliable when compared to general use computers

## wearable gadgets
- wearable gadgets are a category or devices that can be worn by the consumer to track information related to health and fitness
- some wearable gadgets have small motion sensors that take photos and transfer them to smartphones

## raspberry pi
- raspberry pi is a low cost single board computer
- it is available in ram or 256mb, 512mb and 1gb
- it has 1.4GHz. A full linux os can be installed

## arduino
- arduino designs and manufacures single=board microcontrollers
- the hardware and software are open-sourced
- this board is equipped with input and output ports that can be connected to other circuits for incorporating real inputvalues
- programs can be transferred from a computer such as pc to the arduino through a usb connection
- for example: sensing the temperature of a boiler and siwtching an led on and off

## embdded ststems
- as embedded systems are dedicated for a particular cost, its size is reduced and preformance is imporced
- the software in these systems are also dedicated for a single function
- user will not be able to modify the program. user can only unteract with the embedded system using the buttons provided or a touchscreen
- embeed systems are robust and reliable when compared to general-purpose systems. this is due to its dedicated functionality
- embedded systems are low power devices it is also low cost and hence, are advantageous in large scale productions. for example: controller of a washing machine