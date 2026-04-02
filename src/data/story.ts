export type Choice = {
  label: string;
  nextId: string;
};

export type StoryNode = {
  id: string;
  title: string;
  text: string;
  choices?: Choice[];
  nextId?: string;
  isEnding?: boolean;
};

export const storyData: Record<string, StoryNode> = {
  prologue: {
    id: 'prologue',
    title: 'LOG 00 // PROLOGUE: The Diamond Birdcage',
    text: `From the outside, Lin Wan's life looked like a finish line that others could hardly touch even if they tried their best. She came from a wealthy family, growing up in a luxurious high-rise apartment in the city center, with a driver always on standby downstairs. The brands she wore were things others could only afford by living frugally. Her grades never dropped out of the top three.

No one knew that all her 'excellence' came at a price. Her parents had a unique way of raising her. They called it 'freedom.' They never spent time with her, never asked if she was happy—but their demands on her were high enough to crush everything.

Then, during her second year of high school, a transfer student joined her class. Her name was Chen Xin. Chen Xin came from a completely different world. What brought them together was no accident. One afternoon, Chen Xin walked past Lin Wan's desk holding a cup of water. The cup tilted. Water splashed onto Lin Wan's sleeve... No one knew that all of this was planned by her. Chen Xin had dirtied herself on purpose. Just to get close to her. Just to use her.

One afternoon during her senior year... Lin Wan sat behind the bookshelf, the pen in her hand stopped in mid-air. So that was how it was. That splashed cup of water. That flustered apology. All of it was—fake. Not a single person was real.

She was trapped. Trapped in things she had never asked for. Results release day. Her parents stood beside her, beaming with joy. 'Fangda International is the best.' She looked at the report card. Thought of how she had walked step by step to get here.`,
    nextId: 'chapter1'
  },
  chapter1: {
    id: 'chapter1',
    title: 'LOG 01 // CHAPTER ONE: The Compute Barrier and the Sealed Dragon',
    text: `The cramped attic was as stiflingly hot as a steamer. The old Lenovo laptop let out a roar like the dying gasp of an asthma patient. On the screen, countless lines of deep blue terminal code scrolled frantically like a waterfall, the faint light reflecting in Rick's bloodshot yet unusually bright black eyes.

'Final convergence test... run.'

Rick tapped the Enter key lightly. A blood-red warning box slammed into the center of the screen like a heavy punch: FATAL ERROR: CUDA Out of Memory. Process terminated. Compute power deficit: 99.98%.

Compute power. That damn compute power again. The core AI engine 'Aegis', which he had spent three years writing in secret from everyone, possessed a self-evolving neural network architecture that was at least five years ahead of its time. But without the support of massive compute power, this epoch-making engine was like a hydrogen bomb firmly trapped inside a matchbox.

Target: Fangda International University National-Level Hybrid Quantum Supercomputing Center.

Rick's brain instantly entered an overclocked state of absolute rationality. WARNING! INTRUSION DETECTED! Reverse tracking intruder's real IP... 60s... 59s...

Rick didn't panic; instead, a fanatical cold smile curled at the corner of his mouth. 'The defense mechanism is too rigid.' He struck the Enter key heavily! BOOM! This was an 'Asymmetric Logic Deadlock.' The defense line collapsed like deadwood being crushed. Like a torrential flood bursting a dam, the massive, national-level compute power roared through the rift Rick had torn open.

SYSTEM ONLINE. Welcome, Creator.

Thousands of kilometers away, inside a secret data center located five hundred meters underground... 'The group headquarters' database, worth hundreds of billions, would have been casually hacked into a blank slate by the Young Master tonight!' The top security expert codenamed 'Black Ghost' gasped.

Early the next morning. The dazzling sunlight pierced through the city's morning mist onto the magnificent school gate of 'Fangda International University'. A sports car stopped, splashing muddy water onto Rick's faded, cheap shirt. He calmly pulled a tissue and wiped the mud water away bit by bit. 'I've had enough of the middle-class hamster wheel,' he muttered. 'From today on, I will rewrite the underlying code of this world.'`,
    nextId: 'chapter2'
  },
  chapter2: {
    id: 'chapter2',
    title: 'LOG 02 // CHAPTER TWO: The Turing Laboratory and the Canary in the Cage',
    text: `Fangda International University, S-Class Resource Zone - 'Turing' Hybrid Quantum Computing Center. This place possessed the top supercomputer array in all of Asia. Yet at this moment, this quantum terminal costing hundreds of millions was running an unreleased holographic virtual racing game at full power.

Lin Wan sat alone on a pure white Italian leather sofa in the corner, quietly watching this group of people. This was the laboratory donated by her family, but in reality, it was an exclusive private arcade for these scions of wealthy families. She was like a cockatiel trapped in a diamond birdcage.

'Beep - Access granted.' The titanium alloy door slid open. Rick stood there, carrying an old canvas bag. He didn't feel the slightest bit cramped by a room full of luxury goods. He looked at the main terminal screen wasting 80% of its compute power. Then, his line of sight bumped into Lin Wan. In his eyes, there was no fear, no resentment—only an icy rationality looking down on this foolish system.

'Turn off your garbage game,' Rick finally spoke. 'I'm commandeering the compute power of this host.'

The Gucci guy acted as if he had heard the world's biggest joke. He strode up to Rick, pointing down at him condescendingly, 'Do you know whose territory this is? You, a poor wretch, dare to make a scene here? Where's security?'

Rick raised his head slightly. The corners of his mouth slowly curled into a cold arc.`,
    choices: [
      { label: '> [EXECUTE: DIRECT HACK (Absolute Technical Crushing)]', nextId: 'chapter2_hack' },
      { label: '> [EXECUTE: RECITE CLAUSES (Logic and IQ Contest)]', nextId: 'chapter2_clauses' }
    ]
  },
  chapter2_hack: {
    id: 'chapter2_hack',
    title: 'LOG 02.A // BRANCH: Direct Hack',
    text: `Rick didn't even bother to reply. He pulled the worn-out Lenovo laptop from his bag and placed it on the table. 'Ten,' Rick softly uttered a number, his fingers already a blur on the keyboard. He didn't connect to the Wi-Fi; instead, using a homemade Bluetooth sniffing protocol, he forcibly hijacked the laboratory's local area network node.

'Three, two, one.' Rick slammed the Enter key.

BOOM-! Accompanied by the deep sound of a current overload, the lighting switched to glaring blood-red. The virtual Ferrari on the screen dissolved into crashing pixels, replaced by a massive black terminal window: [System Override. Root Access Granted to User: Unknown.]

'Donated by the Lins? Sorry, its ROOT access is now named Rick. Take your garbage game and get the hell out of my compute pool.'`,
    nextId: 'chapter2_convergence'
  },
  chapter2_clauses: {
    id: 'chapter2_clauses',
    title: 'LOG 02.B // BRANCH: Recite Clauses',
    text: `Rick didn't touch the computer. He calmly looked at the finger that was almost poking his nose. 'A laboratory donated by the Lin Group?' His gaze precisely bypassed the Gucci guy and landed on Lin Wan.

'According to Article 3, Section 7 of the Fangda International University 'Lin Academic Fund' donation agreement, the main compute power must be unconditionally open to applications from S-class research projects from 3 PM to 5 PM daily. The current time is 3:20 PM. I hold an S-class core project application form.'

He took a step forward, his aura instantly crushing everyone present. 'According to Chapter Seven of the school rules, those who waste S-class resources face expulsion. So, am I the one getting the hell out, or do I hit the fire alarm right now and let the disciplinary committee see exactly what kind of shady business is going on in this private playground? Pick one.'`,
    nextId: 'chapter2_convergence'
  },
  chapter2_convergence: {
    id: 'chapter2_convergence',
    title: 'LOG 02.C // CONVERGENCE: The Clash',
    text: `The laboratory fell into a deathly silence. Extreme humiliation instantly ignited the Gucci guy's reason. He grabbed Rick's collar and smashed his fist fiercely towards Rick's face! Rick did not dodge. There was not a trace of fear in his deep black eyes.

'Young Master! Wait! Sister Wan is still watching.' A lackey hugged his arm. The Gucci guy jerked his head around to look at Lin Wan. She was quietly observing the scene. For a split second, Lin Wan felt a long-lost thrill. The person in front of her was like a sharp knife, plunging straight into the fake world she had built.

'You all get out first,' Lin Wan put down the coffee cup. Her gaze exuding unquestionable coercion. The rich kids gritted their teeth and left. 

Lin Wan walked slowly in front of Rick. 'What is your name?'

'Rick,' he replied faintly, connecting his laptop to the host. 'Whatever nonsense you want to spout to save your family's face, save your breath. I just want compute power.'

Lin Wan suddenly smiled. She watched him skillfully type on the keyboard. She suddenly had a strong intuition—this madman might be exactly what she had been waiting for. And she, perhaps, could become his accomplice.`,
    nextId: 'chapter3'
  },
  chapter3: {
    id: 'chapter3',
    title: 'LOG 03 // CHAPTER THREE: The Open and Honorable Trojan Horse',
    text: `For the next three days, the Turing Laboratory was calm. Lin Wan quietly watched Rick madly squeeze the computing power of the quantum terminal. On the fourth day, Rick pushed a black module, disguised as an ordinary USB receiver, next to Lin Wan's coffee cup.

'This is a low-level overwrite script based on frequency-hopping acoustic transmission (Air-gapped Audio Malware). As long as this is plugged into any socket within your villa's intranet, it can penetrate the walls of the server room via sound waves, causing logical chaos in the cooling fans, creating a three-minute hardware reboot window for the All-Seeing Eye.'

'I can't touch it,' Lin Wan said coldly. 'The cameras have micro-expression analysis. I would be subjected to a full body search. What I can do is make sure security doesn't search you. How to plug it in is your problem.'

Rick smirked. 'Smart. In that case, I need a legitimate reason to get close to your room.'

Lin Wan pushed a gold-stamped business card toward him. 'Tomorrow night, my parents are hosting a private dinner party. They won't suspect you; they will only treat you as a handy, highly cost-effective tool to show off. Tomorrow night at seven, the Lin Mansion. Remember to dress handsomely, don't let me down, genius.'`,
    nextId: 'chapter4'
  },
  chapter4: {
    id: 'chapter4',
    title: 'LOG 04 // CHAPTER FOUR: The Devil\'s Dinner Party',
    text: `At 7 PM, the Lin Mansion was brightly lit. Rick stood in front of the gates wearing a cheap second-hand black suit, yet he forcibly wore it with a disturbing predator aura. Lin Wan appeared and coldly told the guards he was her hired student assistant, bypassing the bag check perfectly.

Inside, Father Lin showed Rick off to the guests: 'Look, everyone. What top-tier genius? In the face of capital, they are nothing more than a highly cost-effective tool.' Rick stood there expressionless. Their capitalist arrogance was his perfect invisibility cloak.

Rick locked onto his target: a Steinway piano worth tens of millions, playing automatically. It was connected to the villa's internal closed digital circuit. Just as he approached, the Gucci guy, holding a glass of red wine, walked over with malice.

'Weren't you acting arrogant at school? Aren't you still running over to the Lin family to scrounge for food like a dog?' The Gucci guy sneered, deliberately tilting his red wine glass, about to splash it onto Rick—`,
    choices: [
      { label: '> [CALCULATE: PHYSICAL TRAJECTORY]', nextId: 'chapter4_trajectory' },
      { label: '> [CRUSH: PSYCHOLOGICAL DEFENSES]', nextId: 'chapter4_psychological' }
    ]
  },
  chapter4_trajectory: {
    id: 'chapter4_trajectory',
    title: 'LOG 04.A // BRANCH: Calculate Trajectory',
    text: `Rick's brain completed ballistic calculations within a tenth of a second. He precisely sidestepped. At the same time, his elbow seemingly unintentionally nudged an ice-filled champagne bucket on a nearby waiter's tray. 

The red wine splashed, tracing a red arc in the air, perfectly missing Rick and smashing against the rim of the ice bucket. 'Splash—' The liquid and ice cubes rebounded like grapeshot, splashing all over the Gucci guy's white haute couture suit. 

He let out a squeal; the wine glass simultaneously slipped out, smashing toward the nearby piano.`,
    nextId: 'chapter4_convergence'
  },
  chapter4_psychological: {
    id: 'chapter4_psychological',
    title: 'LOG 04.B // BRANCH: Psychological Defense Crush',
    text: `Rick abruptly took a step forward, his hand locking onto the Gucci guy's wrist with terrifying precision. Rick leaned close, his voice icy: 'Dilated pupils, slight muscle tremors. Looks like you're truly afraid of me. You need these designer clothes and a glass of red wine for liquid courage just to dare stand in front of me. Because your intuition tells you if we were born on the same starting line, I would gnaw you down until not even bones remained.'

Rick's fingers tightened, and the bones emitted a subtle crack. 'Let go. Otherwise, I will cripple this hand.'

The Gucci guy's psychological defenses completely collapsed. The severe pain made him instinctively open his fingers. 'Crash—' The wine glass slipped from his powerless hand, accurately smashing onto the nearby piano control console.`,
    nextId: 'chapter4_convergence'
  },
  chapter4_convergence: {
    id: 'chapter4_convergence',
    title: 'LOG 04.C // CONVERGENCE: The Trojan Horse in the Chaos',
    text: `The scarlet wine seeped into the digital control console of the Steinway piano, triggering a harsh short circuit. The entire banquet hall plunged into chaos. During this unnoticed ten-second window, Rick crouched down as if picking up glass shards. With magician-like sleight of hand, he silently pushed the black module into the piano's digital diagnostic port.

Two minutes and fifty-eight seconds later. 'Buzz—' The multi-million-dollar crystal chandelier dimmed for a tenth of a second. The physically isolated 'All-Seeing Eye' servers had suffered a total logical collapse in their cooling fans, forcing a hardware reboot. 'Blinded,' Rick smirked.

On the private terrace, all infrared sensors extinguished. Rick walked into the moonlight and placed a miniature flash drive loaded with a top-privilege backdoor into Lin Wan's palm. 'Plug it into your computer. From now on, this lofty All-Seeing Eye will only obey your commands. Where is my key to the Turing Laboratory?'

Lin Wan handed him a pure black magnetic card. 'Don't get caught... my accomplice.' 

Rick walked out of the carved iron gates, his fingertips rubbing the S-class magnetic card. The prey's resources were in hand. The true dimensional strike was only just beginning.`,
    nextId: 'chapter5'
  },
  chapter5: {
    id: 'chapter5',
    title: 'LOG 05 // CHAPTER FIVE: The Burning Wreckage',
    text: `'Reya Consortium' Supreme Cybersecurity Command, five hundred meters underground.

On the operating console lay a transparent evidence bag with a melted black plastic wreckage intercepted from the Lin Mansion's garbage. 'A routine short-circuit?' The top security expert codenamed 'Black Ghost' sneered. 'Those security directors are blind pigs. The Young Master utilized the piano's resonance to penetrate the walls of the underground vault with audio commands!'

Black Ghost looked at the photo of Lin Wan on the screen. 'The Young Master didn't remove this module... this was a compliance test. And the Lin family's eldest miss didn't expose him. She became his accomplice. The dragon has already begun weaving his own network of power.'

Meanwhile, in the Turing Laboratory. Rick plugged his laptop into the quantum supercomputer host. Execute Aegis_Core. root: override. BOOM! The indicator lights burst into full-load blood-red. The Aegis engine completely awakened, greedily devouring all open-source data and heavily encrypted records of plutocrats' grey assets.

At the Lin Mansion, Lin Wan plugged the flash drive into her vanity table. [Panopticon Local Node Intercepted. Welcome, Administrator.] She listened to a recording of her parents discussing selling her for a 5% stake. With icy eyes, she modified three core financial forecasts in her father's upcoming M&A proposal, creating a fatal multi-billion dollar loophole.

An encrypted pop-up appeared from Rick: 'Are you ready to take over this city, Eldest Miss Lin?' The hunting hour officially began.`,
    nextId: 'chapter6'
  },
  chapter6: {
    id: 'chapter6',
    title: 'LOG 06 // CHAPTER SIX: The Dimensional Massacre',
    text: `Forty-eight hours later, Aegis had completed its third self-iteration. Rick sat in the Turing Lab like a predator in a spider web.

'Bang!' The titanium alloy doors were forcibly unlocked. The Gucci guy, Zhao Ze, and Chu Ming (President of the Student Union) barged in with disciplinary committee members. 'Cut off the host's power!' Chu Ming ordered. 'We are officially confiscating your tools for injecting aggressive algorithms into the campus network.'

Rick hovered his hand over the Enter key, but didn't press it. He heard high heels. Lin Wan walked in like a queen. 'Slap!' She delivered a resounding backhand slap to Zhao Ze's face. 'This Turing Laboratory was fully funded by my family. As for him, he is the Chief Network Architect of the Lin Group. Chu Ming, are you preparing to declare war on our Lin family?'

'Bottom-class?' Rick finally spoke. He tapped the keyboard. The holographic screen displayed bank statements and surveillance videos.

'Chu Ming. Last March, you laundered thirty million in school renovation funds into your father's overseas account. The chain of evidence has already been locked in the cloud by me. Oh, and I have a surprise for you, 3893 9980.'

Rick's gaze turned to Zhao Ze. 'Last month, you drunk-drove and broke a delivery driver's leg. Here is the call recording of your father finding a scapegoat.'

Rick stood up, his high-dimensional predator aura crushing them. 'Did you think grasping a few ridiculous school rules would allow you to judge me? While you bugs are playing house, Aegis has already stripped your families clean of their underwear. Transmission complete. Now get the hell out of my laboratory.'

The rich kids scrambled out in panic. Lin Wan let out a long sigh of relief. 

'School? That was just a warm-up in the beginner's village,' Rick narrowed his eyes. The data stream on the screen formed a massive black totem of a single eye. 'The real prey... has already set its sights on us.'`,
    nextId: 'chapter7'
  },
  chapter7: {
    id: 'chapter7',
    title: 'LOG 07 // CHAPTER SEVEN: The Awakening of the Hidden Dragon',
    text: `Rick walked out of the school gates. An unmarked, pure black custom bulletproof sedan stopped silently in front of him. Four men in black suits surrounded him respectfully: 'Young Master, your graduation exam has been over-fulfilled. The Chairman has been waiting for you.' Rick got into the car without resistance.

Five hundred meters underground, inside the Supreme Cybersecurity Command. The man standing in front of the holographic screen slowly turned around. Rick's rational brain crashed. That was his father. There was no longer the exhaustion of life on his face, replaced by the profoundness of having seen through all worldly rules. 'Welcome to the real world, Rick.'

'This is an eighteen-year Hidden Dragon Project,' his father said. 'I personally acted in this play with you to make you experience the despair of the middle class, to force out the ultimate potential in your brain. You are the sole heir to the Reya Consortium.'

At the same time, in the Lin Mansion. Lin Wan opened a SSS-class Top Secret file exposed by Aegis: [Target: Rick (Sole Heir of the Reya Consortium)]. Her fingers stiffened. It turned out he wasn't a trapped beast in the cage. He was the future supreme master of this iron cage. She was unexpectedly just a handy NPC in his 'game' who actively handed over the key.

Lin Wan closed her eyes. When she opened them, only a deathly stillness remained. She input a string of the highest-level override commands. [Execution: Immediately physically disconnect all connection nodes between the Aegis engine and the quantum supercomputer.]

'Since you are the one making the rules... roll back to your throne.'

Five hundred meters underground, Rick heard a piercing beep from his watch. Aegis was forcibly unplugged. Lin Wan had personally severed the only connection between them.`,
    nextId: 'chapter8'
  },
  chapter8: {
    id: 'chapter8',
    title: 'LOG 08 // CHAPTER EIGHT: Confrontation under the Starry Sky',
    text: `Fangda International University, Top-floor Observatory. Lin Wan stood alone at the edge. The heavy metal door clicked. Rick walked towards her. He was still wearing that washed-out plaid shirt.

'How did you know I was here?' Lin Wan asked with cold mockery.

'The logs of the All-Seeing Eye. When you are unhappy, you like to look at the stars. Lin Wan, the system only records your coordinates, but I saw your loneliness.'

'Don't talk to me in that tone!' Lin Wan whipped around, burning with anger. 'Watching me hand over the key to you like a fool... did I, this NPC, perform wonderfully enough, Young Master?'

Rick didn't avoid her gaze. 'If I were just playing a game, I would have already sat on that throne forged of gold. Instead of walking back here to stand in the cold wind. I refused. My father used eighteen years of real emotions to write a perfect prison for me. But he miscalculated one most important thing—free will. I am not the crown prince of Reya; I am the madman who told you I would bite through this iron cage.'

Rick reached out his right hand to her. 'You locked down the Turing Laboratory, which proves you will not yield. But now, I need you to reopen it. I am going to hack the headquarters of the Reya Consortium. Join me.'`,
    nextId: 'chapter9'
  },
  chapter9: {
    id: 'chapter9',
    title: 'LOG 09 // CHAPTER NINE: Reverse Intrusion and Dual Gambit',
    text: `The night breeze howled. Lin Wan's deathly stillness was shattered. But reason told her this was the biggest gamble of her life. 

'It's fine if you want me to reboot the Turing Laboratory,' Lin Wan looked at him with an extremely calm, scrutinizing gaze. 'But if this is just a final trick you're playing... Rick, I need a guarantee. A guarantee that allows me to drag you down to hell at any time.'

Rick looked into her eyes. He wasn't angry; he felt this was the clear-headed canary he knew. He slowly withdrew his hand. Planning to...`,
    choices: [
      { label: '> [TECHNICAL SURRENDER: Aegis\'s Fatal Weakness]', nextId: 'chapter9_tech' },
      { label: '> [EMOTIONAL SURRENDER: The Truth]', nextId: 'chapter9_emotion' }
    ]
  },
  chapter9_tech: {
    id: 'chapter9_tech',
    title: 'LOG 09.A // BRANCH: Technical Surrender',
    text: `Rick reached into his bag and pulled out a heavily scuffed black flash drive. 'This is Aegis's low-level Root access and self-destruct encapsulated code. As long as you plug it into any terminal and enter the password Canary, Aegis will be completely erased from this world. If I betray you, you kill it. Without Aegis, I'm just an ordinary student.'`,
    nextId: 'chapter9_convergence'
  },
  chapter9_emotion: {
    id: 'chapter9_emotion',
    title: 'LOG 09.B // BRANCH: Emotional Surrender',
    text: `Rick took off the worn digital watch on his wrist and ejected a micro memory card. 'This is the ambient recording I started when I stepped into Reya's underground level. Inside is my father's declaration, and my most genuine breakdown and refusal. Once this recording is exposed, the heir of the Reya Consortium will become a laughingstock, and I will lose my right of inheritance.' He dissected his own weakness and true heart for her to see.`,
    nextId: 'chapter9_convergence'
  },
  chapter9_convergence: {
    id: 'chapter9_convergence',
    title: 'LOG 09.C // CONVERGENCE: The Birth of Accomplices',
    text: `Lin Wan took the item. She backhandedly clenched it tightly in her palm. 'What codename are you planning to give our operation this time?'

'Icarus,' Rick said. 'That madman who made wings of wax, vainly attempted to fly to the sun, and ultimately shocked even the gods.'

[Operation: ICARUS - System Online.] 'Let's go, Icarus,' Lin Wan turned toward the exit. 'Let's go skin him alive.'

Fifteen minutes later, Aegis reconnected to the supercomputer. Rick sat in front of the console. 'I have locked onto Reya's perimeter nodes. But their core defense is the military-grade Aegis Shield. You are my partner; you choose how we fight this battle.'`,
    choices: [
      { label: '> [FRONTAL ASSAULT]', nextId: 'chapter9_frontal' },
      { label: '> [REVERSE PARASITISM (Trojan Horse)]', nextId: 'chapter9_reverse' }
    ]
  },
  chapter9_frontal: {
    id: 'chapter9_frontal',
    title: 'LOG 09.D // BRANCH: Frontal Assault',
    text: `'Since we're going to fight, let's fight so loud that the whole world hears it,' Lin Wan said. 

Rick overloaded the quantum computing power to 120%. The Aegis engine instantly transformed into an unprecedented data tsunami, crashing head-on into the Reya Consortium's Aegis Shield! BOOM-! A terrifying tremor produced across the entire Asian financial network in that instant. Rick forcefully smashed through Reya's gates!`,
    nextId: 'chapter10'
  },
  chapter9_reverse: {
    id: 'chapter9_reverse',
    title: 'LOG 09.E // BRANCH: Reverse Parasitism',
    text: `'Doesn't he like watching you?' Lin Wan sneered. 'Then let him watch to his heart's content.'

Rick understood. Since his father used the Hidden Dragon Project to monitor him, this channel was a backdoor! He disguised Aegis into a routine log of the project. This log carrying a deadly virus followed the network cable his father used, slipping silently past the Aegis Shield like a ghost, directly parasitizing the heart of the Reya Consortium.`,
    nextId: 'chapter10'
  },
  chapter10: {
    id: 'chapter10',
    title: 'LOG 10 // CHAPTER TEN: The World\'s Low-Level Code',
    text: `The defense codes receded like the tide. The Reya Consortium's low-level database had completely opened its doors. The holographic screen lit up with a real-time video feed. Rick's father, the supreme chairman, was sitting alone in front of the massive console.

'You broke through the Aegis Shield twenty minutes earlier than I imagined,' his father said calmly. 'But if you could really press that key to destroy my empire, you wouldn't be here talking to me. You are still that... my son, who would soften his heart because of me.'

These words pierced Rick's deepest vulnerability. He was still human. He couldn't erase the bloodshot eyes his father had over those eighteen years. Lin Wan placed her hand quietly on Rick's shoulder, transmitting her support. Rick took a deep breath and made a decision.`,
    choices: [
      { label: '> [EXECUTE: LOGICAL OVERTHROW]', nextId: 'chapter10_logic' },
      { label: '> [EXECUTE: EMOTIONAL RESONANCE]', nextId: 'chapter10_emotion' }
    ]
  },
  chapter10_logic: {
    id: 'chapter10_logic',
    title: 'LOG 10.A // BRANCH: Logical Overthrow',
    text: `'Dad, you spent billions attempting to forge a flawless heir,' Rick stated like a knife. 'But you made the most fatal mistake—the system's perfection is its biggest loophole. You strangle the most important thing in human evolution: out-of-control freedom. I stand here not because your system is impeccable, but because I chose the variable outside the system. Your code cannot trap me; the only one who can trap me is myself.'`,
    nextId: 'chapter10_convergence'
  },
  chapter10_emotion: {
    id: 'chapter10_emotion',
    title: 'LOG 10.B // BRANCH: Emotional Resonance',
    text: `Rick's hands left the keyboard. The arrogance faded from his eyes. 'Dad, you know what? The first time Aegis calculated Reya's market value, what crossed my mind was actually that if we had this money, you wouldn't have to bow and scrape to that President Wang anymore. I miss that attic; I miss that bowl of noodles you cooked in the middle of the night. In my eyes, that throne simply cannot compare to the warmth of that bowl of noodles.'`,
    nextId: 'chapter10_convergence'
  },
  chapter10_convergence: {
    id: 'chapter10_convergence',
    title: 'LOG 10.C // CONVERGENCE: The Sigh of the God',
    text: `The underground command center plunged into a long silence. His father gave a bitter smile, complex tears glistening in his eyes. 'I spent eighteen years trying to create a capitalist monster... And in the end, I got a real human being.'

He entered a long string of passwords. [System Core: Unlocked. Full Admin Rights Transferred to User: Rick.] 'Reya's underlying code has fully opened to you. Now, the power over life and death is handed to you. Do whatever you want to do.'

The communication feed cut off. Rick won. He shattered his father's control. He turned to Lin Wan. 'I said, I am your accomplice,' she smiled. 'So, no matter what you choose, I will bear it together with you.'

Rick placed his hands on the keyboard. The crossroads of destiny welcomed the final choice.`,
    choices: [
      { label: '> [EXECUTE: PROJECT_REBOOT (Reconstruction)]', nextId: 'endingA' },
      { label: '> [EXECUTE: CORE_LOCKDOWN (The Free Starry Sky)]', nextId: 'endingB' }
    ]
  },
  endingA: {
    id: 'endingA',
    title: 'ENDING A: RECONSTRUCTION (The New God of the Abyss)',
    text: `[Execute: Project_Reboot] [Target: Hidden_Dragon_Protocol -> DELETE] [Target: Reya_Consortium_Ownership -> TRANSFER TO RICK]. 

'I'm not destroying it,' Rick said softly. 'I'm going to tear it apart and reassemble it.' He deleted all codes involving personal control and exploitation, and firmly grasped the highest control of Reya. He sent his father a retirement agreement. 'Since we were born in this prison of capital, running away is the most cowardly choice. Are you willing to ascend this throne with me and rewrite the rules?'

Lin Wan smiled. Without hesitation, she placed her hand in Rick's palm. Half a year later, in the top-floor office of the Reya Building, they stood side by side in haute couture attire, looking down at the city. They did not destroy the iron cage; they became the most clear-headed and ruthless new gods within it. And this time, no one could manipulate them anymore.

// END OF TRANSMISSION`,
    isEnding: true
  },
  endingB: {
    id: 'endingB',
    title: 'ENDING B: THE FREE STARRY SKY (The Burned Eden)',
    text: `[Execute: Core_Lockdown] [Target: Hidden_Dragon_Protocol -> PERMANENT_LOCK] [Target: Reya_Consortium_Ownership -> RETAIN CURRENT]. 

The Aegis engine permanently locked the core code of the Hidden Dragon Project. He didn't touch a single cent of Reya, leaving the multi-billion dollar empire intact for his father. 'Let's go,' Rick tossed the Aegis backup flash drive into the wastebasket and left his watch on the console. 

'You don't want anything anymore?' Lin Wan asked. 

'I've already acquired the most expensive thing in this world,' Rick looked at her, an absolutely pure light in his eyes. 'Freedom. And an accomplice willing to go mad with me.' 

Lin Wan burst into the most uninhibited laughter in eighteen years and tossed her S-class magnetic card onto the desk. 'No matter how much gold is in the cage, it's never as comfortable as the wind blowing outside.' 

At 5:00 AM, the back gate of Fangda International University. Their pockets were empty, having lost everything. But as they held hands and walked into the unknown dawn, their silhouettes from behind were taller and freer than any king in this world.

// END OF TRANSMISSION`,
    isEnding: true
  }
};

export const logOrder = [
  'prologue',
  'chapter1',
  'chapter2',
  'chapter3',
  'chapter4',
  'chapter5',
  'chapter6',
  'chapter7',
  'chapter8',
  'chapter9',
  'chapter10',
  'endingA',
  'endingB'
];