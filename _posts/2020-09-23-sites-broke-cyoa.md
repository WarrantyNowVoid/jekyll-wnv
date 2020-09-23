---
layout: post
redirect_from: sites-broke
published: true
date: 2020-09-23 10:00:00 -0400
author: pope
title: "Ah Shit, Site's Broke; Can You Give Us a Hand?"
excerpt: "Aw, geez we really goofed up this one. The whole dang site’s broke! Look at this mess. Are you busy? Can you help us out here for a minute?"
category: Junk
tags: ["NO VIRUSEZ", "an interactive thrill ride", "go vote", "ohh thank you that pipeline's been blocked up since 2013", "choose your own adventure", "make website", "Russia", "Russian Hackers", "Putin", "WNV", "death by WNV", "computers", "#poopGuy2013", "PFFFFT NERD", "post-apocalyptic hellscapes", "democracy in action"]
image:
  headliner: assets/img/lol/science-wires.jpg
  credit: 
      title: Martijn Baudoin on Unsplash
      link: https://unsplash.com/@martijnbaudoin
include_scripts:
  - cyoa.js
  - hackers.js
include_styles:
  - cyoa.css
  - hackers.css
---

<div id="adventure">
{
  "meta": {
    "start": "0",
    "successes": [12, 24],
    "failures": [5, 13, 16],
    "replay_on_failure": true,
    "replay_on_success": true
  },
  "pages": {
    "0": {
      "caption": "Aw, geez we really goofed up this one. The whole dang site’s broke! Look at this mess. Are you busy? Can you help us out here for a minute?",
      "backgroundEffect": "static",
      "image": "/assets/img/lol/sites-broke/science.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Sure, I have literally nothing better to do with my life",
          "goto": 1
        },
        {
          "title": "NO! LEAVE ME ALONE I DON'T KNOW YOU!",
          "goto": 16
        }
      ]
    },
    "1": {
      "caption": "Okay so the last thing I remember was plugging this USB drive that I found on the sidewalk into the server, and then things got...weird. Should I take it out?",
      "backgroundEffect": "static",
      "image": "/assets/img/lol/sites-broke/USB.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Yes! Take it out now!",
          "goto": 2
        },
        {
          "title": "No! Leave it in!",
          "goto": 3
        }
      ]
    },
    "2": {
      "caption": "Ahhh! Okay! I'm yanking it out now! Uhh... did all the lights just go out for you too?",
      "backgroundEffect": "black",
      "image": "/assets/img/lol/sites-broke/black-none.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Nope, sounds like a \"you\" problem.",
          "goto": 4
        },
        {
          "title": "Yes and I am terrified of the dark please put it back immediately.",
          "goto": 3
        }
      ]
    },
    "3": {
      "caption": "You're right, bad USB drives are exactly like shrapnel wounds, if I pull it out all our data might bleed out. It stays in. So what should I try next?",
      "backgroundEffect": "static",
      "image": "/assets/img/lol/sites-broke/science.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Ctrl+Alt+Del",
          "goto": 6
        },
        {
          "title": "Turn it off and on again. The whole thing.",
          "goto": 20
        }
      ]
    },
    "4": {
      "caption": "Oh okay that's good, I'm glad it's not affecting everyone. Thank you, our precious audience, for being honest with me. I don't know where we'd be without you. Your honesty and help has truly made us the site we are today.",
      "backgroundEffect": "black",
      "image": "/assets/img/lol/sites-broke/black-none.jpg",
      "ending": false,
      "actions": [
        {
          "title": "FINE OKAY I LIED ITS DARK",
          "goto": 5
        },
        {
          "title": "Wow maybe you should get some better fans, because it looks like shit dude",
          "goto": 5
        }
      ]
    },
    "5": {
      "caption": "I knew you people would pull this kind of shit. You know what? I'm leaving it like this. New content is only going on my private LiveJournal. Bye forever!",
      "backgroundEffect": "black",
      "image": "/assets/img/lol/sites-broke/black-none.jpg",
      "ending": true,
      "actions": [
        {
          "title": "No! My posts! I didn't appreciate what I had until I lost it! If only I could somehow start over!"
        }
      ]
    },
    "6": {
      "caption": "Well this is...different. Maybe we're getting somewhere. Should I do what it says or try something else?",
      "backgroundEffect": "bsod",
      "image": "/assets/img/lol/sites-broke/bsod.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Press Ctrl+Alt+Del again",
          "goto": 7
        },
        {
          "title": "TURN IT <em>ALL</em> OFF AND ON AGAIN!",
          "goto": 20
        }
      ]
    },
    "7": {
      "caption": "<span class=\"russian\">Привет, американский mудак! We have taken control of your American jokes website until you agree to our demands.</span>",
      "backgroundEffect": "gopnik",
      "image": "/assets/img/lol/sites-broke/hacker.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Oh no Russian hackers, I knew this day would come. What do you want from us?",
          "goto": 8
        },
        {
          "title": "I mean...why though? Have you seen this website? People will probably think it's just another goddamn Putin joke.",
          "goto": 14
        }
      ]
    },
    "8": {
      "caption": "<span class=\"russian\">You will direct all of many devoted W.N.V. followers to vote in upcoming election for Donald Trump President America!</span>",
      "backgroundEffect": "gopnik",
      "image": "/assets/img/lol/sites-broke/hacker.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Yeah, okay sure man.",
          "goto": 9
        },
        {
          "title": "Listen, no one reads this website let alone their tweets. I don't think this is a good use of resources, honestly.",
          "goto": 17
        }
      ]
    },
    "9": {
      "caption": "<span class=\"russian\">Whoa, like, really? That's it? That was way easy.</span>",
      "backgroundEffect": "gopnik",
      "image": "/assets/img/lol/sites-broke/hacker.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Yeah, sure, big time. You got us good, chief.",
          "goto": 10
        },
        {
          "title": "Listen, no one reads this website let alone their tweets. I don't think this is a good use of resources, honestly.",
          "goto": 17
        }
      ]
    },
    "10": {
      "caption": "<span class=\"russian\">Excellent! Another successful day undermining feeble western democracy! We are unstoppable!</span>",
      "backgroundEffect": "gopnik",
      "image": "/assets/img/lol/sites-broke/hacker.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Cool.",
          "goto": 11
        }
      ]
    },
    "11": {
      "caption": "Whoa! Everything's fixed! What happened? Anything we should know about?",
      "image": "/assets/img/lol/sites-broke/wnvatar.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Yeah I lied to some Russians but they left, so...you're welcome.",
          "goto": 12
        },
        {
          "title": "Yeah we all have to vote for Trump now.",
          "goto": 13
        }
      ]
    },
    "12": {
      "caption": "Nice work, you're now an expert in cybersecurity!",
      "image": "/assets/img/lol/sites-broke/cybersecurity.jpg",
      "ending": true,
      "actions": [
        {
          "title": "Click here to print out your degree!",
          "href": "https://vote.org"
        }
      ]
    },
    "13": {
      "caption": "Well, you've saved your favorite website, but at what cost...",
      "backgroundEffect": "hellscape",
      "image": "/assets/img/lol/sites-broke/apocalypse.jpg",
      "ending": true,
      "actions": [
        {
          "title": "Click here to prevent the end of the world",
          "href": "https://vote.org"
        }
      ]
    },
    "14": {
      "caption": "<span class=\"russian\">...to undermine feeble western democracy? Wait, what is this about Putin joke? We will review website content now for first time ever.</span>",
      "backgroundEffect": "gopnik",
      "image": "/assets/img/lol/sites-broke/hacker.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Uhhhh...maybe actually...don't...",
          "goto": 15
        }
      ]
    },
    "15": {
      "caption": "<span class=\"russian\">Ггандоны! You will pay for these many insults with the blood of your precious website datas! Goodbye forever American dogs.</span>",
      "backgroundEffect": "gopnik",
      "image": "/assets/img/lol/sites-broke/hacker.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Okay, see ya!",
          "goto": 16
        }
      ]
    },
    "16": {
      "caption": "Thanks to your utter failure to help when it was needed the most, WNV was destroyed. Without WNV to uplift the people of the world, civilization slowly crumbled. The Earth was no more, and it was your fault, specifically.",
      "backgroundEffect": "hellscape",
      "image": "/assets/img/lol/sites-broke/apocalypse.jpg",
      "ending": true,
      "actions": [
        {
          "title": "Oops!"
        }
      ]
    },
    "17": {
      "caption": "<span class=\"russian\">Oooof, bro. We checked traffic stats and that is just...bleak, which really means something coming from us. We are feeling bad now for this. We will undo hacking and restore website. These people are too depressing to hurt. Goodbye.</span>",
      "backgroundEffect": "gopnik",
      "image": "/assets/img/lol/sites-broke/hacker.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Okay, see ya!",
          "goto": 18
        }
      ]
    },
    "18": {
      "caption": "Whoa! Everything's fixed! What happened? Anything we should know about?",
      "image": "/assets/img/lol/sites-broke/wnvatar.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Absolutely not, you just keep doing what you do best, champ.",
          "goto": 19
        }
      ]
    },
    "19": {
      "caption": "Uh, okay. Thanks? You know, we could really use someone like you around here to help with this kind of surprisingly common problem...",
      "image": "/assets/img/lol/sites-broke/wnvatar.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Anything to help my favorite website!",
          "goto": 24
        },
        {
          "title": "No, I've read your work, I need to clear my browser history and pretend I've never been here.",
          "goto": 16
        }
      ]
    },
    "20": {
      "caption": "Okay well let's flip the breaker off and wait a minute before turning it back on.<br /> Sooo... <br /><br />Aaaanyway...how we doin'? Things going okay over there? Keepin' on keepin' on?",
      "backgroundEffect": "dark-basement",
      "image": "/assets/img/lol/sites-broke/lighter.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Come on I don't have time for this, make with the jokes funny boy.",
          "goto": 21
        },
        {
          "title": "Have you looked around recently? Why do you think I'm on this website if not to dissociate entirely from the waking nightmare of reality?",
          "goto": 21
        }
      ]
    },
    "21": {
      "caption": "Okay, okay, god, I get it. I'm turning it back on now. Hey that's, well...that's not something I've seen before. What should we press?",
      "backgroundEffect": "dos",
      "image": "/assets/img/lol/sites-broke/pressure.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Y",
          "goto": 22
        },
        {
          "title": "N",
          "goto": 25
        }
      ]
    },
    "22": {
      "caption": "What could that possib-- OH GOD!",
      "backgroundEffect": "dos",
      "image": "/assets/img/lol/sites-broke/take-cover.jpg",
      "ending": false,
      "triggerFunc": "poopGuyArmy",
      "actions": [
        {
          "title": "...what the fuck just happened to me?",
          "goto": 23
        }
      ]
    },
    "23": {
      "caption": "Phew, we did it! Everything is back to normal! Except for, you know, all these human shits all over the place. Well, that's what interns are for, am I right? Speaking of which, I happen to have a new unpaid position available...",
      "image": "/assets/img/lol/sites-broke/wnvatar.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Anything to help my favorite website!",
          "goto": 24
        },
        {
          "title": "Get fucked, weirdos! I'm outta here!",
          "goto": 16
        }
      ]
    },
    "24": {
      "caption": "With your (both uncompensated and uncredited) help over the next decades, WNV grew into a powerhouse, eventually consuming Facebook, Google, and the entire internet, eventually pushing society into creating the perfect utopia based entirely on dick and fart jokes.",
      "image": "/assets/img/lol/sites-broke/utopia.jpg",
      "ending": true,
      "actions": [
        {
          "title": "You're welcome, WNV!"
        }
      ]
    },
    "25": {
      "caption": "I'll just press in the 'N' key here on my-- FUCK!",
      "image": "/assets/img/lol/sites-broke/explosion.jpg",
      "ending": false,
      "backgroundEffect": "explosion",
      "actions": [
        {
          "title": "FUCK!",
          "goto": 16
        },
        {
          "title": "FUCK!",
          "goto": 16
        },
        {
          "title": "FUCK!",
          "goto": 16
        }
      ]
    }
  }
}
</div>


<p>
  <button class="btn btn-outline-primary" type="button" data-toggle="collapse" data-target="#collapsibleCredits" aria-expanded="false" aria-controls="collapsibleCredits">
    Show Image Credits
  </button>
</p>
<div class="collapse" id="collapsibleCredits">
  
  <a class="unsplashCredit" href="https://unsplash.com/@scienceinhd" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span>Science in HD</span></a>
  
  <a class="unsplashCredit" href="https://unsplash.com/@cbarbalis" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span>Chris Barbalis</span></a>
  
  <a class="unsplashCredit" href="https://unsplash.com/@charlesdeluvio" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span>Charles Deluvio</span></a>
  
  <a class="unsplashCredit" href="https://unsplash.com/@markusspiske" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span>Markus Spiske</span></a>
  
  <a class="unsplashCredit" href="https://unsplash.com/@lazycreekimages" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span>Michael Dziedzic</span></a>
  
  <a class="unsplashCredit" href="https://unsplash.com/@aperiosdesign01" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span>Alex Aperios</span></a>
  
  <a class="unsplashCredit" href="https://unsplash.com/@mat_graphik" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span>Jordane Mathieu</span></a>

  <p><a href="https://vk.com/frm46" target="_blank">Evgeny Zubkov</a></p>

  <p><a href="https://www.artstation.com/leontukker" target="_blank">Leon Tukker</a></p>

  <p><a href="https://pixabay.com/users/ArtTower-5337/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2459465">ArtTower</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2459465">Pixabay</a></p>

  <p><a href="https://pixabay.com/users/geralt-9301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=422746">Gerd Altmann</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=422746">Pixabay</a></p>

  <p><a href="https://pixabay.com/users/code404-1282089/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2273069">code404</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2273069">Pixabay</a></p>

  <p><a href="http://deathgenerator.com/#bsod" target="_blank">The Death Generator</a> by <a href="https://twitter.com/Foone" target="_blank">@Foone</a></p>
</div>