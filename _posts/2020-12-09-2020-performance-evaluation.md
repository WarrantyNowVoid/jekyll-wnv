---
layout: post
redirect_from: 2020-performance-evaluation
published: true
date: 2020-12-09 10:00:00 -0400
author: pope
title: "2020 Performance Evaluation"
excerpt: "Another year almost over, and we need some help finishing up this self-evaluation thing. Can you give us a hand here?"
category: Junk
tags: ["Automated Human Resources Tool for Human Resource Automation", "doin' it for the shareholders", "human resources", "too busy masturbating", "an interactive thrill ride", "synergy", "choose your own adventure", "WNV", "death by WNV", "evil incorporated", "a discreet yet major surgery", "how are any of us still employed?"]
image:
  headliner: assets/img/lol/2020-performance-evaluation.jpg
  credit: 
      title: Maximalfocus on Unsplash
      link: https://unsplash.com/@maximalfocus
include_scripts:
  - cyoa.js
include_styles:
  - cyoa.css
---

Can you believe we're almost at the end of another year? We very literally can't, and because we're so crunched for time right now ~~jerkin' it~~ creating content we don't have time to fill out this dang Self-Evaluation for our Yearly Performance Review! Can you help us out? No, with the form. Everyone knows these things are basically perfunctory, so just check all the boxes that say we did fine, don't mention anything *too* weird, and everything will work out. Thanks, we really owe you one!

<div id="adventure">
{
  "meta": {
    "start": 0,
    "successes": [17],
    "failures": [18],
    "replay_on_failure": true,
    "replay_on_success": false,
    "hp": 7,
    "on_hp_depleted": 18
  },
  "pages": {
    "0": {
      "caption": "",
      "image": "/assets/img/lol/2020-performance-evaluation/welcome.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Hello? Is anyone here?",
          "goto": 1
        }
      ]
    },
    "1": {
      "caption": "Welcome to HR! We're excited to announce the start of our newest innovation for calendar year 2020: the Automated Human Resources Tool for Human Resource Automation, which has successfully replaced all human HR employees with an ultra-efficient algorithm. <span class=\"tiny\">If you are a now former WNV HR employee, please consider this your letter of termination and notice of revoked access to all WNV offices and systems. Remain where you are; enforcement drones have already been dispatched to your location for trespassing and/or cybercrimes.</span> Our employees are our greatest asset, and our goal is to always put people first! The AHRTHRA will ask a few simple questions, and using its state-of-the-art processing power, find the best ways to improve your career trajectory.",
      "image": "/assets/img/lol/2020-performance-evaluation/hhrthra.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Let's get started!",
          "goto": 2
        }
      ]
    },
    "2": {
      "caption": "What was your greatest accomplishment this year?",
      "image": "/assets/img/lol/2020-performance-evaluation/accomplishment.jpg",
      "ending": false,
      "actions": [
        {
          "title": "I'm still alive",
          "goto": 3
        },
        {
          "title": "I exhausted all resources at my disposal to maximize value for the shareholders",
          "goto": 4
        },
        {
          "title": "I made the Poop Button do multiple poops at once",
          "goto": 3
        },
        {
          "title": "I had a lot of fun and learned a little something along the way",
          "goto": 3
        }
      ]
    },
    "3": {
      "caption": "What do you hope to accomplish next year?",
      "image": "/assets/img/lol/2020-performance-evaluation/accomplishment2.jpg",
      "ending": false,
      "damage": 1,
      "actions": [
        {
          "title": "I want to make some strangers laugh with my posts",
          "goto": 5
        },
        {
          "title": "I want to survive it",
          "goto": 5
        },
        {
          "title": "I want to do more of what I enjoy most",
          "goto": 5
        },
        {
          "title": "I want to subsume all personal desire and need into driving profit for the shareholders",
          "goto": 6
        }
      ]
    },
    "4": {
      "caption": "What do you hope to accomplish next year?",
      "image": "/assets/img/lol/2020-performance-evaluation/accomplishment2.jpg",
      "ending": false,
      "actions": [
        {
          "title": "I want to make some strangers laugh with my posts",
          "goto": 5
        },
        {
          "title": "I want to survive it",
          "goto": 5
        },
        {
          "title": "I want to do more of what I enjoy most",
          "goto": 5
        },
        {
          "title": "I want to subsume all personal desire and need into driving profit for the shareholders",
          "goto": 6
        }
      ]
    },
    "5": {
      "caption": "What position would you like to see yourself move into next?",
      "image": "/assets/img/lol/2020-performance-evaluation/promotion.jpg",
      "ending": false,
      "damage": 1,
      "actions": [
        {
          "title": "I would like to become Chief Shitposting Officer",
          "goto": 7
        },
        {
          "title": "I would like to forfeit my own benefits to pass along the value to the shareholders instead",
          "goto": 8
        },
        {
          "title": "I would like to try a new career track outside of dumb internet jokes",
          "goto": 7
        },
        {
          "title": "I would like to stay where I am because I am perfectly happy with it",
          "goto": 7
        }
      ]
    },
    "6": {
      "caption": "What position would you like to see yourself move into next?",
      "image": "/assets/img/lol/2020-performance-evaluation/promotion.jpg",
      "ending": false,
      "actions": [
        {
          "title": "I would like to become Chief Shitposting Officer",
          "goto": 7
        },
        {
          "title": "I would like to forfeit my own benefits to pass along the value to the shareholders instead",
          "goto": 8
        },
        {
          "title": "I would like to try a new career track outside of dumb internet jokes",
          "goto": 7
        },
        {
          "title": "I would like to stay where I am because I am perfectly happy with it",
          "goto": 7
        }
      ]
    },
    "7": {
      "caption": "Where do you feel there's room for you to improve?",
      "image": "/assets/img/lol/2020-performance-evaluation/working.jpg",
      "ending": false,
      "damage": 1,
      "actions": [
        {
          "title": "I think I've been doing my very best",
          "goto": 9
        },
        {
          "title": "I think I could come up with post ideas before midnight the day before",
          "goto": 9
        },
        {
          "title": "I think I should stop expensing my vape juice on the company card",
          "goto": 9
        },
        {
          "title": "I think I sleep too much, that time would be better spent maximizing revenue for the shareholders",
          "goto": 10
        }
      ]
    },
    "8": {
      "caption": "Where do you feel there's room for you to improve?",
      "image": "/assets/img/lol/2020-performance-evaluation/working.jpg",
      "ending": false,
      "actions": [
        {
          "title": "I think I've been doing my very best",
          "goto": 9
        },
        {
          "title": "I think I could come up with post ideas before midnight the day before",
          "goto": 9
        },
        {
          "title": "I think I should stop expensing my vape juice on the company card",
          "goto": 9
        },
        {
          "title": "I think I sleep too much, that time would be better spent maximizing revenue for the shareholders",
          "goto": 10
        }
      ]
    },
    "9": {
      "caption": "Do you feel that the team is working together collaboratively?",
      "image": "/assets/img/lol/2020-performance-evaluation/teamwork.jpg",
      "ending": false,
      "damage": 1,
      "actions": [
        {
          "title": "The team works together like a well-oiled machine",
          "goto": 11
        },
        {
          "title": "The team is full of shitheads but we have fun",
          "goto": 11
        },
        {
          "title": "The team could use better guidance",
          "goto": 11
        },
        {
          "title": "The team is an unnecessary burden on the shareholders, they should no longer be paid",
          "goto": 12
        }
      ]
    },
    "10": {
      "caption": "Do you feel that the team is working together collaboratively?",
      "image": "/assets/img/lol/2020-performance-evaluation/teamwork.jpg",
      "ending": false,
      "actions": [
        {
          "title": "The team works together like a well-oiled machine",
          "goto": 11
        },
        {
          "title": "The team is full of shitheads but we have fun",
          "goto": 11
        },
        {
          "title": "The team could use better guidance",
          "goto": 11
        },
        {
          "title": "The team is an unnecessary burden on the shareholders, they should no longer be paid",
          "goto": 12
        }
      ]
    },
    "11": {
      "caption": "Are you comfortable with our corporate culture?",
      "image": "/assets/img/lol/2020-performance-evaluation/culture.jpg",
      "ending": false,
      "damage": 1,
      "actions": [
        {
          "title": "I am indifferent: I do not experience such things as they hinder my ability to perform any and all tasks required of me by the shareholders",
          "goto": 14
        },
        {
          "title": "I am comfortable: we have the correct work/life balance",
          "goto": 13
        },
        {
          "title": "I am uncomfortable: we have a culture focused too much on work and not enough on fun",
          "goto": 13
        }
      ]
    },
    "12": {
      "caption": "Are you comfortable with our corporate culture?",
      "image": "/assets/img/lol/2020-performance-evaluation/culture.jpg",
      "ending": false,
      "actions": [
        {
          "title": "I am indifferent: I do not experience such things as they hinder my ability to perform any and all tasks required of me by the shareholders",
          "goto": 14
        },
        {
          "title": "I am comfortable: we have the correct work/life balance",
          "goto": 13
        },
        {
          "title": "I am uncomfortable: we have a culture focused too much on work and not enough on fun",
          "goto": 13
        }
      ]
    },
    "13": {
      "caption": "Where has management helped or hindered your work?",
      "image": "/assets/img/lol/2020-performance-evaluation/manage.jpg",
      "ending": false,
      "damage": 1,
      "actions": [
        {
          "title": "Management has provided excellent guidance on how to make jokes about things like shitting and nipples",
          "goto": 15
        },
        {
          "title": "Management is irrelevant and should be removed, as it only serves as a veil between ourselves and the shareholders' pure message",
          "goto": 16
        },
        {
          "title": "Management stifles our creativity with too much bureaucracy",
          "goto": 15
        }
      ]
    },
    "14": {
      "caption": "Where has management helped or hindered your work?",
      "image": "/assets/img/lol/2020-performance-evaluation/manage.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Management has provided excellent guidance on how to make jokes about things like shitting and nipples",
          "goto": 15
        },
        {
          "title": "Management is irrelevant and should be removed, as it only serves as a veil between ourselves and the shareholders' pure message",
          "goto": 16
        },
        {
          "title": "Management stifles our creativity with too much bureaucracy",
          "goto": 15
        }
      ]
    },
    "15": {
      "caption": "The AHRTHRA will now compile your evaluation results.",
      "image": "/assets/img/lol/2020-performance-evaluation/hhrthra.jpg",
      "ending": false,
      "damage": 1,
      "actions": [
        {
          "title": "I think I nailed it, tbh",
          "goto": 17
        }
      ]
    },
    "16": {
      "caption": "The AHRTHRA will now compile your evaluation results.",
      "image": "/assets/img/lol/2020-performance-evaluation/hhrthra.jpg",
      "ending": false,
      "actions": [
        {
          "title": "I think I nailed it, tbh",
          "goto": 17
        }
      ]
    },
    "17": {
      "caption": "The AHRTHRA has calculated that you are a ${hpPercentage}% ideal employee: Room for improvement. We have identified a few key ways to focus on bettering your career, and they will now be installed directly into your human memory storage. Please relax as the Anesthizine Gas™ filling your cubicle helps us make your transition surgery to a new brain/body synergy quick and painless.",
      "image": "/assets/img/lol/2020-performance-evaluation/gassed.jpg",
      "ending": true,
      "actions": [
        {
          "title": "Wow I can feel my value to corporate increasing already...",
          "href": "https://warrantynowvoid.com/comics/2019/12/18/"
        }
      ]
    },
    "18": {
      "caption": "The AHRTHRA has calculated that you are a 0% ideal employee: Unacceptable. You will be immediately placed on a Performance Improvement Plan; please step directly into the Performance Improvement Meat Grinder to begin.",
      "image": "/assets/img/lol/2020-performance-evaluation/hhrthra.jpg",
      "ending": true,
      "actions": [
        {
          "title": "Wait hold on I don't even actually work he--"
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
  
<a class="unsplashCredit" href="https://unsplash.com/@maximalfocus" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span>Maximalfocus</span></a>

<a class="unsplashCredit" href="https://unsplash.com/@adolfofelix" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span>Adolfo Félix</span></a>

<a class="unsplashCredit" href="https://unsplash.com/@officestock" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span>Sebastian Herrmann</span></a>

<a class="unsplashCredit" href="https://unsplash.com/@adeolueletu" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span>Adeolu Eletu</span></a>

<a class="unsplashCredit" href="https://unsplash.com/@cytonn_photography" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span>Cytonn Photography</span></a>

<a class="unsplashCredit" href="https://unsplash.com/@sctgrhm" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span>Scott Graham</span></a>

<a class="unsplashCredit" href="https://unsplash.com/@krakenimages" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span>krakenimages</span></a>

<a class="unsplashCredit" href="https://unsplash.com/@mimithian" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span>Mimi Thian</span></a>

<a class="unsplashCredit" href="https://unsplash.com/@joszczepanska" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span>Jo Szczepanska</span></a>

</div>