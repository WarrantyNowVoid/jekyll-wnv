---
layout: post
redirect_from: super-bowl-liv
published: true
date: 2020-01-29 10:00:00 -0400
author: pope
title: "Get To The Big Game"
excerpt: "It's finally here! The Big Game, the proudest American tradition, is back again for the 54th time this Sunday. Sure, you could watch on TV, but who wants to waste time on that bullshit? You've gotta get to the game, at any cost!"
category: Junk
tags: ["The Big Game", "accepting rides from strangers", "critically important shoe choices", "looking fresh to death", "CTE", "choose your own adventure", "FBI", "sports", "violence", "u dizzy?", "surprise naps", "How it's made"]
image:
  headliner: assets/img/lol/get-to-the-big-game.jpg
  credit: 
      title: Original Photo by Thomas Serer on Unsplash
      link: https://unsplash.com/@jesus
include_scripts:
  - cyoa.js
include_styles:
  - cyoa.css
---

It's here, it's finally here! The <span class="censored">Super Bowl</span> Big Game, the single greatest event of the year, the only thing that keeps you tethered to this dying earth for another 365 nightmarish days, the proudest American tradition, is back again for the 54th time this Sunday. And this year, as luck would have it, both of your favorite teams are playing: The <span class="redacted">redacted due to stringent copyright litigation</span> will take on the <span class="redacted">redacted due to stringent copyright litigation</span> in a showdown that's sure to be <span class="redacted">redacted due to stringent copyright litigation</span>! Sure, you could watch on TV with your close friends and family, sharing in an experience with all of them that brings you closer together and enriches all of your lives, but who wants to waste time on that bullshit? You've gotta get to the game, at any cost!


<div id="adventure">
{
  "meta": {
    "start": 0,
    "successes": [26],
    "failures": [7, 25],
    "replay_on_failure": true,
    "replay_on_success": true,
    "hp": 4,
    "on_hp_depleted": 27
  },
  "pages": {
    "0": {
      "caption": "You're dressed and ready to go, wearing several layers of official jerseys for both teams (hey it's winter after all!), but before you can step outside you'll need to put some shoes on. You slip on:",
      "image": "/assets/img/lol/super-bowl-liv/socks.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Your perfectly sparkling white, newly washed New balance sneakers.",
          "goto": 2
        },
        {
          "title": "Your heaviest work boots. You're a soldier in the war against not being at the game now.",
          "goto": 3
        },
        {
          "title": "Sandals, there's no time to waste!",
          "goto": 1
        }
      ]
    },
    "1": {
      "caption": "You slip into your sandals and step out the front door. It's chilly but your socks are keeping your feet plenty warm. You take one step down the stoop and immediately your sandal falls halfway off under your foot, causing you to stumble and trip face first down your three front steps, breaking your nose and chipping three teeth.",
      "image": "/assets/img/lol/super-bowl-liv/floor.jpg",
      "ending": false,
      "damage": 1,
      "actions": [
        {
          "title": "Go back inside and change shoes.",
          "goto": 0
        },
        {
          "title": "Just like, lay there, bleeding all over the place for a while.",
          "goto": 4
        }
      ]
    },
    "2": {
      "caption": "Hell yeah, you’re looking fresh to death my dude. No way anyone will make fun of you today! Off you go, out into the worl-AHH SHIT it’s February. You’re in for a squishy day if you don’t think fast!",
      "image": "/assets/img/lol/super-bowl-liv/slush.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Go back inside and switch to your heaviest work boots",
          "goto": 3
        },
        {
          "title": "Wrap your legs in trash bags and get gone!",
          "goto": 6
        },
        {
          "title": "NO TIME! YOU CAN BUY NEW SHOES ANOTHER DAY!",
          "goto": 5
        }
      ]
    },
    "3": {
      "caption": "Now fully and properly equipped, you march dramatically out the front door and get into your car. You turn the key only to realize that it won't start. In fact there are no lights or sound at all. Your battery is dead.",
      "image": "/assets/img/lol/super-bowl-liv/steering-wheel.jpg",
      "ending": false,
      "actions": [
        {
          "title": "NO. TIME. FIND. A. RIDE.",
          "goto": 13
        },
        {
          "title": "Ask your neighbor for help",
          "goto": 22
        }
      ]
    },
    "4": {
      "caption": "Ugggggghhhhh oh uuuuuuck my whole faaaaaaace uggggggh whyyyyyyyy",
      "image": "/assets/img/lol/super-bowl-liv/blood.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Ow",
          "goto": 28
        },
        {
          "title": "Fuck",
          "goto": 28
        },
        {
          "title": "Why",
          "goto": 7
        }
      ]
    },
    "5": {
      "caption": "You shuffle through the snow and slush between you and your parked car, finally sighing in relief as you get inside. But to your horror, it won't start. Your battery is dead.",
      "image": "/assets/img/lol/super-bowl-liv/steering-wheel.jpg",
      "ending": false,
      "actions": [
        {
          "title": "NO. TIME. FIND. A. RIDE.",
          "goto": 3
        },
        {
          "title": "Ask your neighbor for help",
          "goto": 23
        }
      ]
    },
    "6": {
      "caption": "You hurriedly step each foot into its own large trash bag, tying them off around your knees with duct tape. Problem solved, now it's time to get going! You shuffle your way through the slush and snow between you and your parked car, smiling smugly at your ingenuity every step of the way. At the end of your street you realize you don't have a plan for getting there.",
      "image": "/assets/img/lol/super-bowl-liv/driving-confused.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Start driving directly to the stadium and don't stop until you arrive.",
          "goto": 8
        },
        {
          "title": "Drive to the airport, find a way to get a flight on your way.",
          "goto": 9
        }
      ]
    },
    "7": {
      "caption": "You lie facedown on the pavement for 22 hours and die.",
      "image": "/assets/img/lol/super-bowl-liv/rip.jpg",
      "ending": true,
      "actions": [
        {
          "title": "Oops!"
        }
      ]
    },
    "8": {
      "caption": "You take a left turn from the end of your street, mentally preparing yourself for the long drive ahead. Luckily, you won't have to worry about it, as your car is immediately T-boned by a large truck that you were too distracted to notice.",
      "image": "/assets/img/lol/super-bowl-liv/truck.jpg",
      "ending": false,
      "damage": 1,
      "actions": [
        {
          "title": "WHAT-",
          "goto": 12
        }
      ]
    },
    "9": {
      "caption": "You turn right from the end of your street and also start opening travel apps on your phone, hoping any nearby flight will still be available. After what seems like an eternity of scrolling and swiping, you find one! And it's only $990! You look away from your phone, elated, only to notice that you're rapidly approaching the car stopped ahead of you at a red light.",
      "image": "/assets/img/lol/super-bowl-liv/stopped-car.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Slam on the brakes",
          "goto": 10
        },
        {
          "title": "Swerve into another lane",
          "goto": 11
        }
      ]
    },
    "10": {
      "caption": "You try to slam on the brakes but your trash-bag covered feet are slipping all over the place and instead you rear-end the car ahead of you at full speed.",
      "image": "/assets/img/lol/super-bowl-liv/rear-end.jpg",
      "ending": false,
      "damage": 1,
      "actions": [
        {
          "title": "Oh fuuuuuu-",
          "goto": 12
        }
      ]
    },
    "11": {
      "caption": "At the last possible second, you swerve away from the stopped car and into the wide open next lane over, only to be immediately hit head on by a truck.",
      "image": "/assets/img/lol/super-bowl-liv/truck.jpg",
      "ending": false,
      "damage": 1,
      "actions": [
        {
          "title": "Yeehaw- OH SHIT!",
          "goto": 12
        }
      ]
    },
    "12": {
      "caption": "You wake up in an unfamiliar room which you quickly realize is in a hospital. You have a number of different medical sensors and tubes connected to your body, but you actually feel pretty great. You immediately start tearing all this crap off of yourself. You've got a game to get to! ",
      "image": "/assets/img/lol/super-bowl-liv/hospital-room.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Ignore the beeping machines and yelling nurses, and stumble your way outside.",
          "goto": 13
        },
        {
          "title": "Ask the first vaguely medical looking person you see how you can get to the game.",
          "goto": 17
        }
      ]
    },
    "13": {
      "caption": "You make your way quickly to the nearest busy street and stick your thumb out. You're getting to this game, no matter what it takes. To your surprise, one of the first cars you see actually pulls over! The driver leans his head out the open window and asks, \"Where ya headed?\"",
      "image": "/assets/img/lol/super-bowl-liv/hitchhike.jpg",
      "ending": false,
      "actions": [
        {
          "title": "\"I need to get to the game. I can't miss it.\"",
          "goto": 14
        },
        {
          "title": "Lift up your coat and show him one of your many jerseys.",
          "goto": 15
        }
      ]
    },
    "14": {
      "caption": "\"Oh hell yea bud, me too! Hop on in!\" You get in the passenger side and the car peels out, speeding its way towards the game. ...Until you realize that it's definitely not. You're headed somewhere else entirely. \"Hey isn't the highway back the--\" you start to ask, but before you can finish, you realize you've been stuck in the arm with a syringe.",
      "image": "/assets/img/lol/super-bowl-liv/car-drug.jpg",
      "ending": false,
      "damage": 1,
      "actions": [
        {
          "title": "\"Aw man I didn't want to start doing drugs until I got to the game...\"",
          "goto": 21
        }
      ]
    },
    "15": {
      "caption": "He looks at your jersey and then back at you with a solemn expression. \"You really like those bastards?\"",
      "image": "/assets/img/lol/super-bowl-liv/jersey.jpg",
      "ending": false,
      "actions": [
        {
          "title": "\"I would die for them.\"",
          "goto": 16
        },
        {
          "title": "\"Haha no, just kidding,\" and you lift that jersey to reveal the other team's beneath it.",
          "goto": 14
        }
      ]
    },
    "16": {
      "caption": "\"Well here's your chance you son of a bitch!\" He shouts and hurls a tire iron at your head.",
      "image": "/assets/img/lol/super-bowl-liv/floor.jpg",
      "ending": false,
      "damage": 1, 
      "actions": [
        {
          "title": "\"No that's my weak spo-\"",
          "goto": 12
        }
      ]
    },
    "17": {
      "caption": "The guy in the white lab coat looks around nervously, then answers,\"Uhhh yeah, don't worry, I can take you there right now, actually. Follow me.\"",
      "image": "/assets/img/lol/super-bowl-liv/normal-doctor.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Follow him to his car.",
          "goto": 18
        },
        {
          "title": "Ask if he's really a doctor.",
          "goto": 19
        }
      ]
    },
    "18": {
      "caption": "\"Boy this sure is helpful, mister, I really appreciate-\" before you can finish your sentence, you realize you've been stuck in the arm with a syringe.",
      "image": "/assets/img/lol/super-bowl-liv/floor.jpg",
      "ending": false,
      "damage": 1,
      "actions": [
        {
          "title": "\"Wait you didn't ask if I have any drug allergies...\"",
          "goto": 21
        }
      ]
    },
    "19": {
      "caption": "\"Yes OBVIOUSLY, of course I am, that's why I need to give you your medicine.\" He pulls a syringe out of his pocket and injects it into your arm.",
      "image": "/assets/img/lol/super-bowl-liv/injection.jpg",
      "ending": false,
      "damage": 1,
      "actions": [
        {
          "title": "\"Oh I don't feel great…\"",
          "goto": 21
        },
        {
          "title": "\"OH SHIT YOU'RE NOT ARE YOU?\"",
          "goto": 20
        }
      ]
    },
    "20": {
      "caption": "As you lose consciousness, you see that your shouts have startled the man and he runs off as other people start to gather around you.",
      "image": "/assets/img/lol/super-bowl-liv/floor.jpg",
      "ending": false,
      "actions": [
        {
          "title": "\"Wait he was gonna give me a ride…\"",
          "goto": 12
        }
      ]
    },
    "21": {
      "caption": "Your recollection is fuzzy at best - bright, painful flashes interspersed with dark periods of blessed unconsciousness. You vaguely remember waking up in a place with the trappings of a hospital, but you know on an instinctive level that it was not a place of healing. The man's dimly lit face drifts through your hazy, half remembered visions, an expression somewhere between pride and hunger beaming down at you. Suddenly, there is light. Bright, blinding light burns spots into your blurry vision, and you're forced to close your eyes. There's shouting; hundreds, possibly thousands of voices raised in a deafening cacophony. The impact is sudden and violent, but you experience no pain as you feel yourself sail upwards into the air. As your eyes finally adjust to the glaring light… sunlight… You begin to understand.",
      "image": "/assets/img/lol/super-bowl-liv/dark-hospital.jpg",
      "ending": false,
      "actions": [
        {
          "title": "\"My god...I'm...I'm...\"",
          "goto": 26
        }
      ]
    },
    "22": {
      "caption": "\"Oh dang, let me grab my jumper cables.\" Your neighbor helpfully moves his car next to yours and hooks jumper cables up to it, handing you the other ends. In your rush to get them connected, you drop one into the puddle you're standing in. \"Wow, good thing I'm safely insulated by my shoes,\" you say, and then finish connecting the cables. Your car successfully starts!",
      "image": "/assets/img/lol/super-bowl-liv/jumper-cables.jpg",
      "ending": false,
      "actions": [
        {
          "title": "\"Thanks for your help!\" you yell out the window as you're already driving away.",
          "goto": 8
        },
        {
          "title": "Give him a firm handshake and ask if he wants any merch from the game.",
          "goto": 24
        }
      ]
    },
    "23": {
      "caption": "\"Oh dang, let me grab my jumper cables.\" Your neighbor helpfully moves his car next to yours and hooks jumper cables up to it, handing you the other ends. In your rush to get them connected, you drop one into the puddle you're standing in. Your thoroughly soaked shoes conduct the charge through your body to the other clip in your hand.",
      "image": "/assets/img/lol/super-bowl-liv/electrocute.jpg",
      "ending": false,
      "damage": 1,
      "actions": [
        {
          "title": "\"NO, NO, NOT LIKE THIS-\"",
          "goto": 12
        }
      ]
    },
    "24": {
      "caption": "\"I would love anything with my beloved San Francisco 49ers on it!\" Oh wait shit oh fuck we didn't block the name shit I hope they don't fin--<br /><br />THIS WEBSITE HAS BEEN CONFISCATED BY THE FBI, AND YOU HAVE BEEN FOUND IN VIOLATION OF COPYRIGHT LAW, STEP AWAY FROM THE COMPUTER IMMEDIATELY.",
      "image": "/assets/img/lol/super-bowl-liv/fbi.jpg",
      "ending": false,
      "actions": [
        {
          "title": "PLEAD GUILTY",
          "goto": 25
        },
        {
          "title": "PLEAD GUILTY",
          "goto": 25
        },
        {
          "title": "PLEAD GUILTY",
          "goto": 25
        },
        {
          "title": "PLEAD GUILTY",
          "goto": 25
        }
      ]
    },
    "25": {
      "caption": "You, the reader of this website, have been found guilty of possessing copyrighted materials and sentenced to a minimum of life in federal prison.",
      "image": "/assets/img/lol/super-bowl-liv/prison.jpg",
      "ending": true,
      "actions": [
        {
          "title": "Goodbye forever, criminal."
        }
      ]
    },
    "26": {
      "caption": "You're at the game. More than that though, you're in it… you are it. You have ascended to a higher form, shedding the tawdry mortal body you were cursed with at birth. What use are legs if you need not walk? What need have you for a mouth; the scoreboard speaks for you now. As your oblong body sails across the sky toward the receiving team, you admire the craftsmanship with which your skin had been tanned and stitched into the ultimate piece of athletic equipment. You just wish maybe they hadn't left the dick - it's affecting your aerodynamics.",
      "image": "/assets/img/lol/super-bowl-liv/football.jpg",
      "ending": true,
      "actions": [
        {
          "title": "Congratulations, you made it!"
        }
      ]
    },
    "27": {
      "caption": "Your body has taken too many devastating blows today and your brain is irreparably damaged. The world feels hazy and confusing…",
      "image": "/assets/img/lol/super-bowl-liv/blur.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Try to wake up…",
          "url": "https://warrantynowvoid.com/junk/2019/09/04/"
        }
      ]
    },
    "28": {
      "caption": "Ugggggghhhhh oh uuuuuuck my whole faaaaaaace uggggggh whyyyyyyyy",
      "image": "/assets/img/lol/super-bowl-liv/blood.jpg",
      "ending": false,
      "actions": [
        {
          "title": "Ow",
          "goto": 4
        },
        {
          "title": "Fuck",
          "goto": 4
        },
        {
          "title": "Why",
          "goto": 7
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
  <div class="card card-body">
    <p>Image by <a href="https://pixabay.com/users/tookapic-1386459/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=933087">tookapic</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=933087">Pixabay</a></p>
    <p>Image by <a href="https://pixabay.com/users/noah210-1369700/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3320917">Noah Newbauer</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3320917">Pixabay</a></p>
    <p>Image by <a href="https://pixabay.com/users/Tama66-1032521/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3367993">Peter H</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3367993">Pixabay</a></p>
    <p>Image by <a href="https://unsplash.com/@markus_gjengaar?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Markus Gjengaar on Unsplash</a></p>
    <p>Image by <a href="https://unsplash.com/@neonbrand?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NeONBRAND on Unsplash</a></p>
    <p>Image by <a href="https://pixabay.com/users/RobVanDerMeijden-3468868/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2036220">Rob van der Meijden</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2036220">Pixabay</a></p>
    <p>Image by <a href="https://pixabay.com/users/flok85-656802/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=587819">Flo K</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=587819">Pixabay</a></p>
    <p>Image by <a href="https://unsplash.com/@julianhochgesang?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Julian Hochgesang on Unsplash</a></p>
    <p>Image by <a href="https://pixabay.com/users/corgaasbeek-905824/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=928653">cor gaasbeek</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=928653">Pixabay</a></p>
    <p>Image by <a href="https://pixabay.com/users/corgaasbeek-905824/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=928653">cor gaasbeek</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=928653">Pixabay</a></p>
    <p>Image by <a href="https://pixabay.com/photos/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=984043">Free-Photos</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=984043">Pixabay</a></p>
    <p>Image by <a href="https://pixabay.com/photos/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1149997">Free-Photos</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1149997">Pixabay</a></p>
    <p>Image by <a href="https://unsplash.com/@mr_brightsides?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Amirhossein Azandarian Malayeri on Unsplash</a></p>
    <p>Image by <a href="https://unsplash.com/@creatorscollective?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Creators Collective on Unsplash</a></p>
    <p>Image by <a href="https://pixabay.com/users/Tama66-1032521/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3361131">Peter H</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3361131">Pixabay</a></p>
    <p>Image by <a href="https://pixabay.com/users/StockSnap-894430/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=926308">StockSnap</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=926308">Pixabay</a></p>
    <p>Image by <a href="https://unsplash.com/@spanic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Damir Spanic on Unsplash</a></p>
    <p>Image by <a href="https://pixabay.com/users/KeithJJ-2328014/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1561519">Keith Johnston</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1561519">Pixabay</a></p>
    <p>Image by <a href="https://unsplash.com/@whileimout?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Gabriel Santiago on Unsplash</a></p>
  </div>
</div>