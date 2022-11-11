const timer = window.document.querySelector('div#timer');
const btns = window.document.querySelector('div#btns');
const intervalId = null

const button = event => main[event.target.id]();

let time = {
    'ms': 0,
    'seg': 0,
    'min': 0,
    'h': 0,
}

const start = () => {
    time.ms++    
    timer.innerHTML = `0${time.h} : 0${time.min} : 0${time.seg}.${time.ms}`
}

// main
const main = {
    'save':  () => alert('save ok'),
    'start': () => intervalId = setInterval(start, 1),
    'pause': () => alert('pause ok')
};

// button   
btns.addEventListener('click', button);

