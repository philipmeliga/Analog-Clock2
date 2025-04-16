let hourHand = document.querySelector('.hour-hand');
let minuteHand = document.querySelector('.minute-hand');
let secondHand = document.querySelector('.second-hand');
let clockFace= document.querySelector('.clock');

for (let i=0; i<60; i++){
    const dot = document.createElement(`div`);
    dot.classList.add('minute-dot');
    dot.style.transform=`rotate(${i*6}deg) translate(140px)`;
    clockFace.appendChild(dot);
}


function updateClock() {
    let now = new Date();
    let hours = now.getHours() % 12;
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let hourAngle = (hours * 30) + (minutes * 0.5);
    let minuteAngle = minutes * 6;
    let secondAngle = seconds * 6;

    hourHand.style.transform = `rotate(${hourAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    secondHand.style.transform = `rotate(${secondAngle}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
