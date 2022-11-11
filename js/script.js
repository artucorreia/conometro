const timer = window.document.querySelector('div#timer');
const btns = window.document.querySelector('div#btns');
let intervalId = null;
let andamento = false;

const button = event => main[event.target.id]();

// time
let time = {
    'ms': 0,
    'seg': 0,
    'min': 0,
    'h': 0,
}

// displayer 
const display = (h, min, seg, ms) => {
    timer.innerHTML = `${h}:${min}:${seg}.${ms}`;
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
    display(time.h, time.min, time.seg, time.ms);
}

// pause
const pause = id => {
    clearInterval(id);
    andamento = false;
}
// main
const main = {
    'save':  () => save(),
    'start': () => preStart(),
    'pause': () => pause(intervalId)
};

// button   
btns.addEventListener('click', button);