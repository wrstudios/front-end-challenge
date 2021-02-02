# W+R Studios Front End Challenge

Hi there!

We're excited that you're interested in joining the W+R Studios Development team. In the past, we've done a mixture of tech interviews, whiteboarding, and more freeform technical conversation. However, we never really felt like we got a good enough sense of a candidate's role-specific programming abilities. Plus, we never liked the idea that a bad day, time pressure, or just general interview jitters could cause an interviewee to falter in ways that would give us a bad impression of his/her skillset.

For those reasons, we've come up with front end programming challenge that will allow you to demonstrate your skills at your own pace and sans interview pressures from wherever you do your best work. This challenge is fairly representative of something you might be tasked with here at W+R Studios once hired.

Finally, we know your time is valuable, so please feel free to use your completed work as a portfolio piece.

Thanks,
W+R Studios

## Overview

We have provided you with a simple node server that serves two purposes:

1. Serves as a JSON API to fetch car data.
2. Hosts static content from the public directory (e.g. images)

We have also provided a design mockup for a grid card view to display the car data and allow users to interact with it. [Public Link to Design Mockups](https://www.figma.com/file/Oiz8zLSGS5Okvqso0H3b4Z/Frontend-Challenge-Sports-Cars?node-id=1%3A2).

We would like you to build a responsive user interface based on these designs, using car data from API. These days, we're partial to React and friends, so we've bootstrapped a simple react app in the client folder using create-react-app. However, you are free to use any front end technologies you would like to build this interface. Please feel free to rework the application as needed.

**If you feel strongly about using a different framework (or no framework at all), feel free to alter as much of the project structure as necessary.**

## Functionality

Users should be able to do the following:
1. "Like" cars (by clicking the heart icon)
1. "Dislike" cars (by clicking the X icon)
1. Filter cars using the dropdown menu. There should be 3 filter options:
    1. "All Cars": Shows all cars
    1. "Liked Cars": Shows only cars that have been "Liked"
    1. "Disliked Cars": Shows only cars that have been "Disliked"

Visual indications for each state are shown in the [design mockup](https://www.figma.com/file/Oiz8zLSGS5Okvqso0H3b4Z/Frontend-Challenge-Sports-Cars?node-id=1%3A2).

## Getting Started

To start developing this application, you'll need to make sure you have a few things installed:

1. [NodeJS](https://nodejs.org/en/) (version 6+, tested on 6.11.0)
1. [Yarn](https://yarnpkg.com/lang/en/docs/install/) (version 1+, tested on 1.1.0)

If you're on mac, the easiest way to install both is probably [Homebrew](https://brew.sh/). Alternatively, for node specifically, [NVM](https://github.com/creationix/nvm#installation) is pretty nice for managing multiple installations/versions regardless of what you're working on.

Once you have the above installed, you should:
1. Fork this repo
1. Git clone your fork

Next, you'll need to install the project dependencies by running the following command in the top-level directory:
```sh
yarn
```

Once the dependencies are installed, you can start the application by running (again in the top-level directory):
```sh
yarn start
```

This is wired up using foreman to run both the api server and the client development server. The browser should automatically open the application start page, but if it doesn't, you can find it at http://localhost:3000.

## Design Assets
Design Mockup: [Invision Link](https://www.figma.com/file/Oiz8zLSGS5Okvqso0H3b4Z/Frontend-Challenge-Sports-Cars?node-id=1%3A2)

Font: [Noto Sans](https://fonts.google.com/specimen/Noto+Sans)
- This font has been included for you in `index.html`, but you are free to include it by any other method you want.

Images: [static/images](static/images)
- Images for the cars. These are statically served by the api from the static folder.

Icons: [static/icons](static/icons)
- Icons for "Like"/"Dislike". These are currently statically served by the api from the static folder. However, you should feel free to move them around, bundle them with your client, etc.

## The Client

As mentioned above, for convenience and setup speed we have bootstrapped a simple react app in the client folder using create-react-app. However, you are free to use any front end technologies you would like to build the interface. To this end, you are free to alter any of the existing project structure. Note that you may have to fiddle around with some of the start scripts if you change the folder structure dramatically. In any event, you will want to make sure that you keep the `static/images` folder (includes images for the cars) and the `static/icons` folder (includes, you guessed it, icons).

You can use any additional state management libraries, styling libraries, etc., that you want, as long as you are prepared to discuss your motivations and justifications.

We recommend using whatever you're most comfortable with.

## The API

The API is exposed at http://localhost:3001. We have taken care of proxying requests from the dev server to the api server if you use the existing project structure.

#### The One and Only Endpoint:

- **/cars**
  - HTTP GET: returns an array of all cars

## Requirements

**We ask that you spend no more than 2-3 hours on this challenge.**

At a minimum, we would like to see these things:
- Responsive design/layout of content based on the [design mockup](https://www.figma.com/file/Oiz8zLSGS5Okvqso0H3b4Z/Frontend-Challenge-Sports-Cars?node-id=1%3A2).
- The ability to like/dislike cars and associated changes to the UI.
- The ability to filter cars with the dropdown menu.

These last 2 items are described above in [Functionality](#functionality).

We will also examine your code for readability, architectural decisions, and modularity. If/when you meet with us, be prepared to talk about why and how you built your interface.

## Bonus

If you have additional time after completing the requirements, we'd love to see what else you can do. Here are some ideas to get you started:
- Sweet animations
- Data loading states
- Filter by search term
- Unit/integration tests (the bootstrapped react app already has jest set up)
- Any other cool things you think up

## Submission

Please do all of your work on a feature branch on your fork named `{your initials}-solution`. Once you have completed the challenge, submit a pull request on **your own forked copy of the repo**.

## IMPORTANT:

*DO NOT* submit a PR to our repository - We would like to keep all solution submissions separate and not in the public view.
Follow these [instructions](https://help.github.com/articles/creating-a-pull-request/) if you are unsure of the process.

## Questions / Problems / Stuck?

Reach out to doug@wrstudios.com. He's a pretty cool dude.

## License

This project is licensed under the MIT license so that you may use it as a portfolio piece (or anything else) in the future.