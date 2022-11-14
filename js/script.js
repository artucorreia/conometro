const timer = window.document.querySelector('div#timer');
const btns = window.document.querySelector('div#btns');
const savestxt = window.document.querySelector('div#saves');
let intervalId = null;
let andamento = false;

const button = event => main[event.target.id]();

// displayer 
const displayer = (h, min, seg, ms) => {
    timer.innerHTML = `<p>${h}:${min}:${seg}.${ms}</p>`;
}

// saves displayer
let i = 0;
const savesDisplayer = () => savestxt.innerHTML += `${saves[i]}`;

// save
let saves = [];
const save = (t) => {
    saves.push(t);
    savesDisplayer();
    i++;
}

// time
let time = {
    'ms': 0,
    'seg': 0,
    'min': 0,
    'h': 0,
}

// verification 
let preStart = () => {
    if (!andamento) {
        intervalId = setInterval(start, 10);
        andamento = true;
    }
}

// start timer
const start = () => {
    time.ms+= 1
    if (time.ms > 99) {
        time.ms = 0;
        time.seg++;
    }
    if (time.seg > 59) {
        time.seg = 0;
        time.min++;
    }
    if (time.min > 59) {
        time.min = 0;
        time.h++
    }
    displayer(time.h, time.min, time.seg, time.ms);
}

// pause
const pause = id => {
    clearInterval(id);
    andamento = false;
}
// main
const main = {
    'save':  () => save(timer.innerHTML),
    'start': () => preStart(),
    'pause': () => pause(intervalId)
};

// button   
btns.addEventListener('click', button);