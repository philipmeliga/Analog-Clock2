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

function updateDigitalDisplay() 
{
const now = new Date();
const hours = now.getHours().toString().padStart(2,'0');
const minutes = now.getMinutes().toString().padStart(2,'0'); 
const seconds = now.getSeconds().toString().padStart(2,'0');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
document.getElementById('day').textContent= days[now.getDay()];
document.getElementById('month').textContent= months[now.getMonth()];
document.getElementById('dayOfMonth').textContent= now.getDate();
document.getElementById('year').textContent= now.getFullYear();
    document.getElementById('hours').textContent=hours;
    document.getElementById('minutes').textContent=minutes; 
    document.getElementById('seconds').textContent=seconds;
}
setInterval(updateDigitalDisplay, 1000);
updateDigitalDisplay();


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
