const NAV = document.querySelector('NAV');
const ITEM = document.querySelectorAll('nav ul li');
const HBUTTON = document.querySelector('#menuHamburger');

HBUTTON.onclick = function() {
    this.classList.toggle('trans');
    NAV.classList.toggle('show');
};

function actionMenu() {
    NAV.classList.remove('show');
    HBUTTON.classList.remove('trans');
}

ITEM[0].onclick = actionMenu;
ITEM[1].onclick = actionMenu;
ITEM[2].onclick = actionMenu;
ITEM[3].onclick = actionMenu;
ITEM[4].onclick = actionMenu;

const d = document;
const displayClock = d.querySelector('.display-clock');
const sButton = d.querySelector('.start-clock');
const dButton = d.querySelector('.stop-clock');
const sAlarm = d.querySelector('.start-alarm');
const dAlarm = d.querySelector('.stop-alarm');
const aud = document.querySelector('#audio1');
let audioElement = new Audio('../sound/alarma.mp3');
let t;

function displayTime() {
    let fecha = new Date();
    displayClock.innerHTML = fecha.toLocaleTimeString();
}

sButton.onclick = function() {
    t = setInterval(displayTime, 1000);
    sButton.disabled = true;
    sButton.style.background = 'rgb(120, 92, 146)';
}

dButton.onclick = function() {
    clearInterval(t);
    displayClock.innerHTML = '';
    sButton.disabled = false;
    sButton.style.background = 'rgb(87, 27, 143)';
}

sAlarm.onclick = () => {
    aud.setAttribute('autoplay', 'autoplay');
    aud.muted = false;
    sAlarm.disabled = true;
    sAlarm.style.background = 'rgb(120, 92, 146)';
}

dAlarm.onclick = () => {
    aud.muted = true;
    aud.removeAttribute('autoplay');
    sAlarm.disabled = false;
    sAlarm.style.background = 'rgb(87, 27, 143)';

}