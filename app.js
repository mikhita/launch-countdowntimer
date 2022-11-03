

let daysHead = document.querySelector('.days');
let hourHead = document.querySelector('.hours');
let minuteHead = document.querySelector('.minutes');
let secondHead = document.querySelector('.seconds');
let secondCard = document.querySelector('#second');
let minuteCard = document.querySelector('#minute');
let hourCard = document.querySelector('#hour');


let days;
let hours;
let minutes;
let seconds;

//

console.log(seconds);
let countDownDate = new Date ("Oct 23, 2024 00:00:00").getTime();

console.log(countDownDate);

let x = setInterval(function(){

//get today's date and time


let now = new Date().getTime();

// find the distance between now and future dates


let distance = countDownDate - now;

// time calculations for days , hours, minutes , and seconds


days = Math.floor(distance/(1000*60*60*24));
hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));

minutes = Math.floor((distance % (1000*60*60))/(1000*60));

seconds= Math.floor((distance % (1000*60))/(1000));

daysHead.innerHTML = days;
hourHead.innerHTML = hours;
minuteHead.innerHTML = minutes;
secondHead.innerHTML = seconds;

secondHead.addEventListener('onChange',()=>{


secondCard.classList.add('active');

})

// if countdown is over


if(distance<0){
   
daysHead.innerText = "EX";
hourHead.innerText = "PI";
minuteHead.innerText = 'R';
secondHead.innerText = 'ED';

}

},1000);


let y = setInterval(function(){


 secondCard.classList.toggle('active')

}, 1000);

let now = new Date().getTime();

// find the distance between now and the future date;

let distance = countDownDate-now;

//time calculations for days, hours, minutes and seconds


days = Math.floor(distance/(1000*60*60*24));
hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));

minutes = Math.floor((distance % (1000*60*60))/(1000*60));

seconds= Math.floor((distance % (1000*60))/(1000));

console.log(minuteCard);

let a =  setInterval(function() {
    if (seconds<1) {minuteCard.classList.toggle('active')}
    
}, 1000);

let b =  setInterval(function() {
    if (minutes<1) {hourCard.classList.toggle('active')}
    
}, 1000);




