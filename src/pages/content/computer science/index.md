---
layout: '../../../layouts/md/main.astro'
title: "Initial design planning"
desc: "The initial ideas for my computer science project"
upDate: 17/09/2024
tags: ["project", "computer science"]
---
## task
The task is currently to make 3 or more problems that could be solved with code based solutions, the official languages are limiting in what kinds of project i can undertake and it must solve an issue. Above all, it must be within the scope of my abilities and be possible in the 2 years i have. (Which looking at what ive done with the website in 3 days is a pretty large scope)

* idea 1
    - A device which follows a similar build structure as a 3ds/ds from nitnedo, It will solve the issue of portable technology. With this feild being largly populated by phones which are made so you can do as little thinking as possible before making a purchase and even though they are capeable of more in deph processes developers wont let them. One reason for this is because of the cpu arcitecture, but my device will solve this by being open source, easy to carry and easy to make.
    - The scope of this project will entail:
        - finding a way to make a small sized keyboard
        - programming a custom version of linux to be built for its dimensions
        - programming utility software for limitations such as keyboard or size
        - creating a website explaining how this works and why so that anyone can make or use it freely
    - I do want to do this idea probably the most but it has been explained to me it wouldnt be adviseable so im probably gonna do a batman and do it by myself for myself
    - sources
        - [programmer-books.com](https://www.programmer-books.com/wp-content/uploads/2019/08/Raspberry-Pi-Computer-Architecture-Essentials.pdf "Dennis, A.K., 2016. Raspberry pi computer architecture essentials. Packt Publishing Ltd.")
        - [cloudfront.net](https://d1wqtxts1xzle7.cloudfront.net/107497753/Matthews2018-libre.pdf?1700325846=&response-content-disposition=inline%3B+filename%3DPortable_Parallel_Computing_with_the_Ras.pdf&Expires=1726064537&Signature=Zmh-Lv7AWRP09n7eG~MLVX8VuZ5RGwEf0kcMRYdifLKsazyijnM2htC9P7hxy1A6kAtt7q~DAvrS0aIiv9WeuyCnxavqJKgR9AhcSNBogEOOajPMpSgJsJ1TVOtGH3f15hG0vVxsP6vxENAHX04gF8gSN356ukeNnR9u3fGpYF9aTdRQmgGciHhNMpoJP~vdSMfArC-3SGQ3gPC7LdYrutje8sK-ItxEvMQQHSxjS5EThuclSNmh8hbSR70hE24suwerECirPgmMHMXcWozgCRTXIuQD3tuzlNbM8LqbUbdayZCy7qyLjcTvr3yo0ETWL660aEvfc57b1O1f-vdq-g__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA "Matthews, S.J., Adams, J.C., Brown, R.A. and Shoop, E., 2018, February. Portable parallel computing with the Raspberry Pi. In Proceedings of the 49th ACM Technical Symposium on Computer Science Education (pp. 92-97).")
        - [reseatchgate.net](https://www.researchgate.net/profile/Vladimir-Vujovic/publication/280344140_ELI16_Maksimovic_Vujovic_Davidovic_Milosevic_Perisic/links/55b3368608ae9289a08594aa/ELI16-Maksimovic-Vujovic-Davidovic-Milosevic-Perisic.pdf "Maksimović, M., Vujović, V., Davidović, N., Milošević, V. and Perišić, B., 2014. Raspberry Pi as Internet of things hardware: performances and constraints. design issues, 3(8), pp.1-6.")

* idea 2
    - A device based on somthing like a `pi Zero` which is a cheap and lightweight device and it will have 2 components added to it, a weight sensor and a bluetooth radio. The device will respond to a mobile app which can be used as a util software to controll its state of being "armed" and once it is it will be placed under a drink at a bar or another public place, if the weight changes it will communicate this to the app causing a push notifactation which will tell the user to not drink it as something could have been done to it. This kind of device could also be used in situations that could need to check if something has been moved/opened like a wallet or purse, medication even
    - The scope of this project will entail:
        - building and configuring the pi and the radio
        - creating the base software it would use
        - developing an app to communicate with this device
    - I dont really wont to do this idea even though it sounds good on paper because it sounds really simple and i feel like i could do it in maybe a few days causing me to not be able to demonstraite my full abilities and not get as many marks as i feel possible for someone like me
    - sources
        - [researchportal.murdoch.edu.au](https://researchportal.murdoch.edu.au/view/pdfCoverPage?instCode=61MUN_INST&filePid=13158184870007891&download=true "Lynam, M.C., 2023. Beyond drink spiking: The prevalence of alcohol, psychoactive substances, and medications in drug facilitated sexual assaults.")
        - [s3-ap-southeast-1.amazonaws.com](https://s3-ap-southeast-1.amazonaws.com/ap-st01.ext.exlibrisgroup.com/61RMIT_INST/storage/alma/C3/8A/55/15/72/A4/CB/B1/7F/9D/A0/F2/11/5E/B4/8F/McPherson.pdf?response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240911T130801Z&X-Amz-SignedHeaders=host&X-Amz-Expires=119&X-Amz-Credential=AKIAJN6NPMNGJALPPWAQ%2F20240911%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=60aa86326980f43e20ba9608902a02e4e77bcd16d728feef489fec243b423b7f "McPherson, B., 2007. Drink spiking: An investigation of its occurrence and predictors of perpetration and victimisation (Doctoral dissertation, RMIT University).")
        - [ncbi.nlm.nih.gov](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2658214/ "Hughes, H., Peters, R., Davies, G. and Griffiths, K., 2007. A study of patients presenting to an emergency department having had a “spiked drink”. Emergency Medicine Journal, 24(2), pp.89-91.")

* idea 3
    - Messaging app using ai for language improvements, this would be usefull for a multitude of people. Those with difficulty understanding social queues, people who speak differnt langauges and some people who have issues with fowl langauge, the app will conntect people over http or ssh server, the app addresses/friendcodes will be randomly generated and stored on a node server meaning no two people can have the same code also allowing for people to use whatever names they want or feel comfortable with, the server itself will store the data in an sql object
    - The scope of this project will entail:
        - building the server programs
        - building the json network it will send data over/ api
        - learning how to use an ai network/system
    - I also wouldnt really like to do this because i feel like it has been done before, theres even minecraft servers which do this exact thing
    - sources
        - [digital.library.txst.edu](https://digital.library.txst.edu/server/api/core/bitstreams/63d07b91-8071-44ff-b902-ca7d85ac4d89/content "Smith, P.H., 2019. Digital Literacies And The Construction of The “Language Barrier”.")
        - [ncbi.nlm.nih.gov](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7201401/ "Al Shamsi, H., Almutairi, A.G., Al Mashrafi, S. and Al Kalbani, T., 2020. Implications of language barriers for healthcare: a systematic review. Oman medical journal, 35(2), p.e122.")
        - [arxiv.org](https://arxiv.org/pdf/2401.13136 "Shen, L., Tan, W., Chen, S., Chen, Y., Zhang, J., Xu, H., Zheng, B., Koehn, P. and Khashabi, D., 2024. The language barrier: Dissecting safety challenges of llms in multilingual contexts. arXiv preprint arXiv:2401.13136.")

* idea 4
    - Nfc idea reader, this device will be simply a pi and an nfc reader, when an nfc enabled chip is placed to the reader it will register that and request the data for that persons information over a private http server on the network, possibly using the tailscale magic dns technology.
    - the scope of this project will entail:
        - building the software for the pi
        - learning how the schools data system works to request or building a similar dummy system
    - This project also feels way to simple for something that i could do
    - sources
        - [iopscience.iop.org](https://iopscience.iop.org/article/10.1088/1742-6596/1196/1/012042/pdf "Widiyanto, A., 2019, March. Prototype of NFC Reader as a Attendance Sign at The Presence System. In Journal of Physics: Conference Series (Vol. 1196, No. 1, p. 012042). IOP Publishing.")
        - [kgmtu.ru](https://www.kgmtu.ru/documents/nauka/SbornikEng2020.pdf#page=166 "Savochkin, A., Koptsev, P. and Abdulgaziev, O., 2020. Development of NFC reader for access control system. In Recent Achievements and Prospects of Innovations and Technologies: матер. IX Всерос. науч.-практ. конф. студентов, аспирантов и молодых учёных к (pp. 166-169).")
        - [is.muni.cz](https://is.muni.cz/th/v28rw/nemec.pdf "NĚMEC, M., Client Identification via ID Card with NFC for iOS.")

## my opinion
So for i beleive none of these ideas that are "plausible" are up to the standerd of which i can preform to, since almost evreything ive made/learned has been done in the span of 2 years i feel like i could do something way bigger than any of the ones that are "plausible". Something which I feel would be more up to my abilitie is something challanging that ive never attempted before but im unable to think of somthing like that because i have attempted everything before. I do have a small idea about a portible music player/maker which will use a pi as a base with a touchscreen and could either play mp3 files, have a possible spotify client deppending on how i do it (i could use lineage os and build a music based android app) but the idea is not fully flushed out yet, it would also solve the issue of many people not being able to make music due to not having the time, knoledge, money or space which is a lot more comman than people think, having something which fits in your pocket allowing you to play music would be amazing. also i could develop the app in android studio using java which is an approved language but so far i am unsure but it is the best and most plausible idea i have so far.