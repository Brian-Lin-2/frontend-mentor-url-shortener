# Frontend Mentor - Shortly URL shortening API Challenge solution

![Design](./design/desktop-preview.jpg)

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Live Site](#live-site)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

Simple homepage of a website with a working link shortener, hover states, and error states. Interactive mobile navigation menu. Links are saved until the session ends using Session Storage.

API Used: shrtcode API

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

Desktop Design:
<br /> <img width="600" src="./design/desktop-active-states.jpg" alt="image">

Mobile Design:
<br /> <img width="300" alt="image" src="https://github.com/Brian-Lin-2/frontend-mentor-url-shortener/assets/19761406/48a16816-705f-4ab8-b14e-432bd23ec42f">
<br /> <img width="300" alt="image" src="https://github.com/Brian-Lin-2/frontend-mentor-url-shortener/assets/19761406/de23ade3-1e33-4e71-b983-8d2513820cbb">

### Live Site

- Live Site URL: [Vercel](https://frontend-mentor-url-shortener-five.vercel.app)

## My process

Started with breaking down the design into components. Then I added to basic HTML structure. After that, I transitioned into styling with css (first mobile then desktop). Once the css was all finished, I added the active states before adding some basic JS. Finally, I used the shrtcode API and session storage to finish my project.

### Built with

- HTML5
- Tailwind CSS
- React JS
- Mobile First Workflow

### What I learned

I learned a lot about asynchronous functions and how they interact with APIs. Also learned how to implement APIs into my projects.

```jsx
const convertLink = async (link) => {
  const data = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
  const short = await data.json();

  // This will trigger the useEffect() hook.
  setShortLink(short.result.full_short_link);
};
```

I also learned a lot about how storage on a website works and when to use cookies, local storage, and system storage.

```jsx
// Import history, if it exists.
const getStorage = () => {
  return JSON.parse(sessionStorage.getItem("history")) || [];
};

// Saves links in local memory for future use.
useEffect(() => {
  sessionStorage.setItem("history", JSON.stringify(history));
});
```

### Continued development

I want to work more with APIs and get more practice using React. Right now everything is basically decorative, but in the future I would like to add other pages and create a working sign up and login interface.

### Useful resources

- [Storage](https://youtu.be/GihQAC1I39Q) - Great video to get you started with cookies, local storage, and session storage.
- [Async](https://youtu.be/li7FzDHYZpc) - Really helped me understand the difference between promises and asynchronous functions.
