---
layout: post
redirect_from: monsters
published: true
date: 2019-10-22 10:00:00 -0400
author: pope
title: "Which Classic Spooky Character Are You?"
excerpt: "It's finally Halloween again, and time to debut the new WNV Labs Neural Net which uses thousands of detailed data points to tell you which classic spooky character most accurately represents you!"
category: Junk
tags: ["Dracula", "Frankenstein", "zombies", "guaranteed accurate results", "choose your own adventure", "2spooky4me", "Spooky Behavior", "spooky scary skeletons", "Halloween"]
image:
  headliner: assets/img/lol/monsters-halloween.jpg
  credit: 
      title: NeONBRAND on Unsplash
      link: https://unsplash.com/@neonbrand
include_scripts:
  - cyoa.js
include_styles:
  - cyoa.css
  - spooky.css
---

<link href="https://fonts.googleapis.com/css?family=DM+Serif+Display|Nosifer&display=swap" rel="stylesheet">

There's a spooky chill in the air that can only mean one thing: the Halloween season is finally upon us. Since last year, we've been hard at work building our patented WNV Labs Neural Net to carefully analyze your behaviors based on thousands of data points and tell you exactly which classic spooky character most accurately represents you. Help it start building a personality profile below by answering some specially crafted questions.

<div id="adventure">
{
  "meta": {
    "start": "random[0, 1, 2, 3, 4, 5, 6, 7]",
    "successes": [8, 9, 10, 11, 12, 13, 14, 15],
    "failures": [],
    "replay_on_failure": false,
    "replay_on_success": false
  },
  "pages": {
    "0": {
      "caption": "Have you often been found <span class=\"spooky\">working in your lab late one night</span>?",
      "image": "/assets/img/lol/monsters/lab.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Yes",
          "goto": 8
        },
        {
          "title": "No",
          "goto": "random[1, 2, 3, 4, 5, 6, 7]"
        }
      ]
    },
    "1": {
      "caption": "Do you develop an <span class=\"spooky\">eerie urge</span> whenever you see an <span class=\"spooky\">exposed neck</span>?",
      "image": "/assets/img/lol/monsters/bats.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Yes",
          "goto": 9
        },
        {
          "title": "No",
          "goto": "random[0, 2, 3, 4, 5, 6, 7]"
        }
      ]
    },
    "2": {
      "caption": "Are you driven by an <span class=\"spooky\">uncanny desire for brains</span>?",
      "image": "/assets/img/lol/monsters/zombies.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Yes",
          "goto": 10
        },
        {
          "title": "No",
          "goto": "random[0, 1, 3, 4, 5, 6, 7]"
        }
      ]
    },
    "3": {
      "caption": "Does the thought of some <span class=\"spooky\">spooky little ghouls and goblins</span> ringing your doorbell at night to demand a <span class=\"spooky\">trick or a treat</span> excite you?",
      "image": "/assets/img/lol/monsters/trickortreat.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Yes",
          "goto": 11
        },
        {
          "title": "No",
          "goto": "random[0, 1, 2, 4, 5, 6, 7]"
        }
      ]
    },
    "4": {
      "caption": "If you had a child, would they call you <span class=\"spooky\">Mummy</span>?",
      "image": "/assets/img/lol/monsters/mummy.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Yes",
          "goto": 12
        },
        {
          "title": "No",
          "goto": "random[0, 1, 2, 3, 5, 6, 7]"
        }
      ]
    },
    "5": {
      "caption": "Do you have a <span class=\"spooky\">shocking urge</span> to prove yourself to your father?",
      "image": "/assets/img/lol/monsters/frankenstein.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Yes",
          "goto": 13
        },
        {
          "title": "No",
          "goto": "random[0, 1, 2, 3, 4, 6, 7]"
        }
      ]
    },
    "6": {
      "caption": "Is it almost <span class=\"spooky\">scary</span> how persuasive you can be to your friends?",
      "image": "/assets/img/lol/monsters/hypnotist.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Yes",
          "goto": 14
        },
        {
          "title": "No",
          "goto": "random[0, 1, 2, 3, 4, 5, 7]"
        }
      ]
    },
    "7": {
      "caption": "Do people around you have a <span class=\"spooky\">chilling</span> tendency to <span class=\"spooky\">disappear</span>?",
      "image": "/assets/img/lol/monsters/invisibleman.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Yes",
          "goto": 15
        },
        {
          "title": "No",
          "goto": "random[0, 1, 2, 3, 4, 5, 6]"
        }
      ]
    },
    "8": {
      "caption": "<span class=\"unspooky\">You are: Josef Mengele</span> Oh god, wow, that's really fucked up, we didn't even put that one in here. What the hell did you tell it to make it think that about you? Maybe take a little break from the internet for a while. Maybe start with our site. Maybe just please leave. Great, our server is crying now after what you said to it. Haven't you done enough? Just get out.",
      "image": "/assets/img/lol/monsters/mengele.jpg",
      "ending": true,
      "actions": [
        {
          "title": "Share my result on Facebook!",
          "alert": "You know what? No. Think about what you're doing here. Think hard."
        }
      ]
    },
    "9": {
      "caption": "<span class=\"unspooky\">You are: Ted Bundy</span> Oh god, wow, that's really fucked up, we didn't even put that one in here. What the hell did you tell it to make it think that about you? Maybe take a little break from the internet for a while. Maybe start with our site. Maybe just please leave. Great, our server is crying now after what you said to it. Haven't you done enough? Just get out.",
      "image": "/assets/img/lol/monsters/bundy.jpg",
      "ending": true,
      "actions": [
        {
          "title": "Share my result on Facebook!",
          "alert": "You know what? No. Think about what you're doing here. Think hard."
        }
      ]
    },
    "10": {
      "caption": "<span class=\"unspooky\">You are: Jeffrey Dahmer</span> Oh god, wow, that's really fucked up, we didn't even put that one in here. What the hell did you tell it to make it think that about you? Maybe take a little break from the internet for a while. Maybe start with our site. Maybe just please leave. Great, our server is crying now after what you said to it. Haven't you done enough? Just get out.",
      "image": "/assets/img/lol/monsters/dahmer.jpg",
      "ending": true,
      "actions": [
        {
          "title": "Share my result on Facebook!",
          "alert": "You know what? No. Think about what you're doing here. Think hard."
        }
      ]
    },
    "11": {
      "caption": "<span class=\"unspooky\">You are: Jeffrey Epstein</span> Oh god, wow, that's really fucked up, we didn't even put that one in here. What the hell did you tell it to make it think that about you? Maybe take a little break from the internet for a while. Maybe start with our site. Maybe just please leave. Great, our server is crying now after what you said to it. Haven't you done enough? Just get out.",
      "image": "/assets/img/lol/monsters/epstein.jpg",
      "ending": true,
      "actions": [
        {
          "title": "Share my result on Facebook!",
          "alert": "You know what? No. Think about what you're doing here. Think hard."
        }
      ]
    },
    "12": {
      "caption": "<span class=\"unspooky\">You are: Casey Anthony</span> Oh god, wow, that's really fucked up, we didn't even put that one in here. What the hell did you tell it to make it think that about you? Maybe take a little break from the internet for a while. Maybe start with our site. Maybe just please leave. Great, our server is crying now after what you said to it. Haven't you done enough? Just get out.",
      "image": "/assets/img/lol/monsters/casey.jpg",
      "ending": true,
      "actions": [
        {
          "title": "Share my result on Facebook!",
          "alert": "You know what? No. Think about what you're doing here. Think hard."
        }
      ]
    },
    "13": {
      "caption": "<span class=\"unspooky\">You are: Kim Jong Un</span> Oh god, wow, that's fucked up, we didn't even put that one in here. What the hell did you tell it to make it think that about you? Maybe take a little break from the internet for a while. Maybe start with our site. Maybe just please leave. Great, our server is crying now after what you said to it. Haven't you done enough? Just get out.",
      "image": "/assets/img/lol/monsters/kim.jpg",
      "ending": true,
      "actions": [
        {
          "title": "Share my result on Facebook!",
          "alert": "You know what? No. Think about what you're doing here. Think hard."
        }
      ]
    },
    "14": {
      "caption": "<span class=\"unspooky\">You are: Jim Jones</span> Oh god, wow, that's really fucked up, we didn't even put that one in here. What the hell did you tell it to make it think that about you? Maybe take a little break from the internet for a while. Maybe start with our site. Maybe just please leave. Great, our server is crying now after what you said to it. Haven't you done enough? Just get out.",
      "image": "/assets/img/lol/monsters/jones.jpg",
      "ending": true,
      "actions": [
        {
          "title": "Share my result on Facebook!",
          "alert": "You know what? No. Think about what you're doing here. Think hard."
        }
      ]
    },
    "15": {
      "caption": "<span class=\"unspooky\">You are: Josef Stalin</span> Oh god, wow, that's really fucked up, we didn't even put that one in here. What the hell did you tell it to make it think that about you? Maybe take a little break from the internet for a while. Maybe start with our site. Maybe just please leave. Great, our server is crying now after what you said to it. Haven't you done enough? Just get out.",
      "image": "/assets/img/lol/monsters/stalin.jpg",
      "ending": true,
      "actions": [
        {
          "title": "Share my result on Facebook!",
          "alert": "You know what? No. Think about what you're doing here. Think hard."
        }
      ]
    }
  }
}
</div>