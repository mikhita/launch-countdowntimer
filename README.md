# Frontend Mentor - launch-countdowntimer solution

This is a solution to the [launch-countdowntimer challenge on Frontend Mentor](https://www.frontendmentor.io/). Frontend Mentor challenges help me improve my coding skills by building realistic projects. 

## Table of contents


  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)



### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![](./preview.jpg)

### Links

- Solution URL: [ solution URL here](https://mikhita.github.io/launch-countdowntimer/)
- Live Site URL: [ live site URL here](https://mikhita.github.io/launch-countdowntimer/)

## My process
I start with mobile-first workflow and finish mark-up in 5 hours intensive job, it was super good and responsible but I lost a lot of time doing the timecounter for div, I didnt had before that kind of experience, but after I use that it was more easy to write the logic of function for eventlistener.
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript
### What I learned

The more specific you are with your questions the more likely it is that another member of the community will give you feedback.
I learn how to create multiusefull functions.

To see how you can add code snippets, see below:


```js
let countDownDate = new Date ("Oct 23, 2022 00:00:00").getTime();

console.log(countDownDate);

let x = setInterval(function(){

//get today's date and time


let now = new Date().getTime();

// find the distance between now and future dates


let distance = countDownDate - now;
```

### Useful resources

- [Resource 1](https://www.youtube.com/) - This helped me for understand how to create countdowner. I really liked this pattern and will use it going forward.
- [Resource 2](https://stackoverflow.com/questions) - This is an amazing article which helped me finally understand regex. I'd recommend it to anyone still learning this concept.


