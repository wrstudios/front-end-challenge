# Front End Challenge

Hi there!

We're excited that you're interested in joining our front end development team. In the past, we've done a mixture of tech interviews, whiteboarding, and more freeform technical conversation. However, we never really felt like we got a good enough sense of a candidate's role-specific abilities. Plus, we never liked the idea that a bad day, time pressure, or just general interview jitters could cause an interviewee to falter in ways that would give us a bad impression of their skillset.

For those reasons, we've come up with a front end programming challenge that will allow you to demonstrate your skills at your own pace and sans interview pressures from wherever you do your best work. This challenge is fairly representative of something you might be tasked with once hired.

Finally, we know your time is valuable, so please feel free to use your completed work as a portfolio piece.

Thanks.

## Overview

We would like you to build a responsive user interface which involves liking, disliking, and filter of cars. You'll obtain car data through the provided GraphQL server. The front end app is bootstraped using Create React App along with TailwindCSS.

Designs for the challenge can be found here: [Car Mockup](https://www.figma.com/file/Oiz8zLSGS5Okvqso0H3b4Z/Frontend-Challenge-Sports-Cars?node-id=1%3A2).

## Getting Started

To start developing this application, you'll need to make sure you have a few things installed:

1. [NodeJS](https://nodejs.org/en/) (version 16+)
   1. We recommend [NVM](https://github.com/creationix/nvm#installation) for managing node versions
2. [Yarn](https://yarnpkg.com/lang/en/docs/install/) (version 1+)
   1. You can install yarn using `npm install --global yarn`

Once you have the above installed, you should:
1. Fork this repo
2. Git clone your fork

Next, you'll need to install the project dependencies by running the following command:
```sh
yarn
```

Once the dependencies are installed, you can start the application by running:
```sh
yarn start
```

The browser should automatically open the application, but if it doesn't, you can find it at [http://localhost:3000](http://localhost:3000). The GraphQL server will be located at [http://localhost:4000](http://localhost:4000).

## Functionality

Users should be able to do the following:
1. "Like" cars (by clicking the heart icon)
1. "Dislike" cars (by clicking the X icon)
1. Filter cars using the dropdown menu. There should be 3 filter options:
    1. "All Cars": Shows all cars
    1. "Liked Cars": Shows only cars that have been "Liked"
    1. "Disliked Cars": Shows only cars that have been "Disliked"

Visual indications for each state are shown in the [car mockup](https://www.figma.com/file/Oiz8zLSGS5Okvqso0H3b4Z/Frontend-Challenge-Sports-Cars?node-id=1%3A2).

## Design Assets
Figma: [Car Mockup](https://www.figma.com/file/Oiz8zLSGS5Okvqso0H3b4Z/Frontend-Challenge-Sports-Cars?node-id=1%3A2)

Images: [src/images](src/images)
- Images for the cars.

Icons: [src/icons](src/icons)
- Icons for "Like"/"Dislike".

## Requirements

**We ask that you spend no more than 2-3 hours on this challenge.**

At a minimum, we would like to see these features:
- The ability to like/dislike cars and associated changes to the UI.
- The ability to filter cars with the dropdown menu.
- Responsive design/layout of content based on the [design mockup](https://www.figma.com/file/Oiz8zLSGS5Okvqso0H3b4Z/Frontend-Challenge-Sports-Cars?node-id=1%3A2).

These first 2 items are described above in [Functionality](#functionality).

We will also examine your code for readability, architectural decisions, and modularity. If/when you meet with us, be prepared to talk about why and how you built your interface.

## Bonus

If you have additional time after completing the requirements, we'd love to see what else you can do. Here are some ideas to get you started:
- Sweet animations
- Data loading states
- Filter by search term
- Unit/integration tests (the bootstrapped react app already has jest set up)
- Any other cool things you think up

## Submission

Once complete, open a PR and assign DennisMartinez as the reviewer.

## License

This project is licensed under the MIT license so that you may use it as a portfolio piece (or anything else) in the future.
