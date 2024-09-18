---
layout: '../../../layouts/md/main.astro'
title: "Section One [0]"
desc: "The notes I took on the first lesson of Section One"
upDate: 18/09/2024
tags: ['buses', 'John von Neumann', 'CPU']
---
## Intro
John von Neumann made the memory architecture used in computers.

### CPU
The processor? Pretty sure this is going over the basics right now.  
> 4GHz == 4,000,000,000

### The John von Neumann Architecture
It shows the connection between the processor, memory, and input-output devices.

Also, I/O is short for input-output—don’t get confused.

> Remember these, I forgot them in my GCSE exam.

#### These are called buses
- Address bus
- Control bus
- Data bus

- **Address bus** => Transmits the address from the processor to memory or I/O controller => Unidirectional: from the processor to memory and input-output devices.
- **Data bus** => Sends data between the processor, memory, and input-output devices => Bidirectional.
- **Control bus** => Signals sent by the processor to control the memory and peripheral devices => Bidirectional: from the processor to memory and input-output devices.

Memory is divided into several fixed segments called words.  
The words may be 16, 32, or 64 bits depending on the processor type.  
The address bus is a unidirectional bus that transmits the address from the processor to memory and input-output devices.  
In a program, the addresses of operands are sent via the address bus.  
The results calculated by the processor are stored in a particular memory location, the address of which is transmitted via the address bus.

### Data Bus
- A bidirectional bus consisting of 8, 16, 32, or 64 parallel lines.
- This bus is used to transmit data and instructions between the processor, memory, and input-output devices.

### Control Bus
- A bidirectional bus that transmits timing, status signals, and commands between the processor, memory, and input-output devices.
- The different control signals are:
    - **Clock**: Synchronizes operations on a computer.
    - **Memory Read**: The contents at the specified address are copied to the data bus.
    - **Memory Write**: The contents on the data bus are copied to the specified address.
    - **Bus Request**: A device requests to use the data bus so that it can perform the read/write operation.
    - **Bus Grant**: The signal from the processor indicating that the device is granted access to use the data bus.
    - **Interrupt Request**: A signal sent from a device or software to the processor that temporarily stops the current process and initiates an interrupt service routine.

- **MAR** => Memory Address Register—holds the address of the register from which data is read or to which data is to be written.
- **MDR** => Memory Data Register—temporarily stores the data being read from or written to the memory.
- **ACC** => Accumulator.
- **PC** => Program Counter—holds the address of the next instruction to be registered.
- **SR** => Status Register—holds the bits that are set or cleared based on the result of an instruction, e.g., overflow in the case of addition, carry in the case of addition.
- **CIR** => Current Instruction Register—holds the current instruction being executed.

### Memory Unit
- A memory unit consists of a number of partitions.
- Each partition consists of data and an address.
- The address uniquely identifies every location in memory, and the contents are in binary form.
- An example of data addresses stored in a memory unit is shown.

### Read Operation
- To read the contents from any location, the registers MAR (Memory Address Register) and MDR (Memory Data Register) are used. To read the contents from the address 11010000, the address is copied to the MAR.

| Register    | Contents  |
| ----------- | --------- |
| MAR         | 11010000  |

- A read signal is sent by the processor to the memory. The contents are then copied to the MDR (Memory Data Register).

| Register    | Contents  |
| ----------- | --------- |
| MDR         | 10010001  |

### Write Operation
- To write data into a particular address, the data is first written to the MDR. Let us consider writing the data 10111011 to the address 11111111.

| Register    | Contents  |
| ----------- | --------- |
| MDR         | 10111011  |

- The address is written to the MAR register.

| Register    | Contents  |
| ----------- | --------- |
| MAR         | 11111111  |

- A write signal is sent by the processor to the memory unit through the control bus, and the location is written with the data in the MDR.

### Processor: ALU
- The ALU (Arithmetic Logic Unit) is responsible for arithmetic functions such as addition, subtraction, multiplication, etc., and logic operations such as AND, OR, NOT, etc.
- The accumulator is the register that stores the result of arithmetic and logical operations performed by the processor.

### Processor: CU
- The Control Unit (CU) is responsible for controlling the memory, processor, and input-output devices.
- It contains the CIR (Current Instruction Register) and PC (Program Counter).
- The CIR contains the current instruction being executed by the processor.
- The PC contains the location of the instruction that is to be executed next.
- The control unit reads the instructions from the memory, decodes them, and sends control signals to the memory and input-output devices.

### Input-Output Devices
- Input gives instructions.
- Output shows results.

### I/O Controller
- An I/O controller is a device that interfaces an input or output device with the processor.
- Each device has its own controller, which is connected to a control bus. The I/O controller is responsible for receiving requests from the processor and sending control signals to the specified device.
- It consists of:
    - An interface to connect it to the system or I/O bus.
    - A set of data, command, and status registers.
    - An interface that connects it to the cable between the device and the processor.

## The Fetch-Decode-Execute Cycle
- To carry out the instructions, the processor fetches the data and instructions from the memory and stores them in suitable registers.
- These instructions are then decoded and executed.

### The Fetch-Decode-Execute Cycle: Fetch
- The program counter contains the location of the instruction that is to be executed next. This address is copied to the MAR.
- The instruction is fetched from the memory and copied to the MDR.
- Then, the contents of the MDR are copied to the CIR (Current Instruction Register).
- The value of the program counter is incremented by 1, and hence, the instruction in the next memory location is processed.

### The Fetch-Decode-Execute Cycle: Decode and Execute
* **Decode**:  
    - The instructions are decoded so they can be executed.
* **Execute**:  
    - The processor sends appropriate control signals to the memory unit and input-output devices according to the decoded instruction.

### What Is an Interrupt?
- An interrupt is a signal sent from a device or software to the processor.
- The processor will temporarily stop its current process and service the interrupt signal.
- For example: when paper is jammed in a printer, the CPU prompts the user to check the status.

## Interrupts
- Interrupts allow the computer to carry out many tasks at the same time.
- When the interrupt is serviced, the status of the current job is saved. The contents of the PC and CIR registers are saved onto the system stack.
- Once the interrupt is serviced using the interrupt service routine, the current job is resumed according to its saved status before the interrupt.

> Everything is an interrupt, even your keyboard and mouse inputs, game controllers, or mic—everything is an interrupt.

### Vectored Interrupt Mechanism
- Each interrupt is associated with a vector, which points to the code associated with that interrupt.
- When an interrupt occurs, the current values of the registers are saved to a stack, and the processor identifies the type of interrupt.
- Then, the processor points to the vector and processes the interrupt service routine. This technique is called the vectored interrupt mechanism.

### Interrupts
- Sometimes, when an interrupt is being serviced, another interrupt may occur.
- The processor may save the status of the current interrupt processing and proceed to service the new interrupt.
- Another methodology that can be used is to assign priorities. Based on the priority of the interrupts, the processor can decide whether the current interrupt should be paused or not.

> Just showing that example about the cat-killing machine that MoistCr1TiKaL covered.  
[Cat video](https://www.youtube.com/watch?v=1B4InQ1Ymcg&pp=ygUXbW9pc3QgY3JpdGthbCBjYXQgdmlkZW8%3D)  
This is an example of what ignoring CPU interrupts can do.
