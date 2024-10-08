---
layout: '../../../../../layouts/md/main.astro'
title: "CPU architecture"
desc: "the notes i took in lesson 3"
upDate: 02/10/2024
tags: [
    'harvard architecture',
    'cpu',
    'cpu types',
    'cisc',
    'risc',
    'OCR lies',
    'co processor',
    'co-processor',
    'gpu',
    'parallel processor',
    'SISD',
    'SIMD',
    'MISD',
    'MIMD',
    'modified harvard architecture'
]
---
## issues in von neumann architecture
- Data and programs share the same memory.
- a program my overwrite data with programming instructions if not written carefully
- also programming instructions may be overwritten with data
- the programming instructions and data share the same bus. this makes the processor slow as it waits for instructions

<br>

- instructions and data share a single address bus
- the word sizze used for both instructions and data is the same

## harvard architecture
- the issues in the von neumann architecture are overcome in harvard architcture
- harvard architecture uses two seperate memory spaces for program and data
- this also ensures that there are two separeate buses

<br>

- the processor is now able to process both program and data simultaneously
- this improves the processing speed
- the chances of data being overwritten by programming instructions or vice versa are now nullified

<br>

- the characteristics of program memory and data memory may be different
- for example: program memory shall be a read-only memory whereas data memory shall be a read-write memory

|  | von neumann architecture | harvard architecture |
| -- | -- | -- |
| application | PCs, servers and simple embedded systems | digital signal processing, image processing, audio, processing in embedded systems |
| sharing in memory unit | programs and data share the same memory unit | program and data are stored in seperate memory units |
| bus | single bus for transferring data and instructions | program and data have different buses that can be used simulataneously Z
| program | optimised programs are used | programs with larger memory requirements can be used |

* OCR -- harvard architecture is more expensive and used in systems like your mobile phone

## computer architecture
- in modern computers, both harvard and von neumann architectures are used
- the main memory follows the harvward architecture
- whereas, the cache follows the harvard architecture and has instruction cache and data cache
- advanced digital signal processors provide multiple buses for data transmission with separate vuses for read write operations.

## processor type
the two main types of computer processors are:
- complex instruction set computing (CISC)
- reduced instruction set computing (RISC)

|  | complex instruction set computing (CISC) | readuced instruction set computing (RISC) |
| -- | -- | -- |
| architecture | by intel or amd | arm architecture |
| instructions | hundreds of instructions | risc has fewer instructions when compared to CISC to preform complex functions and simple tasks are combined |
| instruction cycle | complex instruction cycle | simple instruction cycle and, hence, is more efficient at simpler tasks |
| physical size | larger cpus and memory to handle the large number of instructions | smaller when compared to CISC |
| speed | higher clock speed. best suited for intensive tasks | lower clock speed, preforms simpler tasks faster |
| energy consumption | larger CPUs need more power | designed for less power consumption |
| design | usually built on a system with colling fan and heatsink | memory and other hardware are combined with cpu on a single chip |
| cost | more expensive than RISK | less expensive |
| examples | desktop and laptop computers | smart phones and tablets |

## Co-processor systems
- the co-processor is an additional processor that preforms certain suppliementaty functions of the primary processor
- responsible for a limited range of functions such as digital signal processing, floating-point arithmatic and others

## graphics processing unit (GPU)
- GPU is a co-processor, made of a specialized electrongic circuit that accelerates computer analysis by offloading computer-intensive instructions while remaining instructions run on the processor
- GPU is used for manipulating images and graphics
- the presence of gpu enhances the preformance of the computer

## GPU
a **cpu** consists of a few cores well suited for sequential serial processing. whereas, a **GPU** consists of several smaller but efficient cores for huge parallel processing
* OCR -- gpu has multiple smaller "cores"

## parallel processor systems
- when executing instructions, the instructions from the main memory flows to the processor and the operands flows to and from the processor
- the instruction and data streams in a simple computer are given in figure

<br>

- there are four different types of processor systems:
- SISD (single instruction single data stream)
- SIMD (single instruction multiple data stream)
- MISD (multiple instruction single data stream)
- MIMD (multiple instruction multiple data stream)

> not come up a massive amount (once), so dont worry too much about this (apparently)

### SISD (single instruction single data stream)
- in this processor system. there is a single processor
- instructions are executed sequentially but pipelining of instructions may occur
- different function units are possible, but all the units are controlled by a single control unit, Example: `intel pentium 4`

### SIMD (single instruction multiple data stream)
- in a SIMD processor system, there is an array of processors
- each processor has its own memory and recives the same instruction
- when executing instructions, each processor uses its own dedicated memory. All the processors are controlled by a single control unit

### MISD (multiple instruction single data streams)
- in this system, there are several processor units and each processor unit has its own control unit
- this is not used in commercial products

### MIMD (multiple instruction multiple data stream)
- in MIMD systems, there are multiple prcessors, and each processor recives a different instruction
- data stream is provided by the memory unit and is partitioned based on the number of processor units. each processor unit also has its own cache memory. **personal computers follow this system of processors**

## modified harvard architecture
- Provides special machine operations to access the contents of the instruction as memory data
- can execute instructions fethced from any memory segment
- builds a memory hirearchy with seperate CPU caches for instructions and data at lower levels of the hirearchy
