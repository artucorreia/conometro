const timer = window.document.querySelector('div#timer');
const btns = window.document.querySelector('div#btns');
const savestxt = window.document.querySelector('div#saves');
let intervalId = null;
let andamento = false;

// direciona para a main
const button = event => main[event.target.id]();

// exibir tempo
const displayer = (h, min, seg, ms) => {
    if (h < 1) {
        timer.innerHTML = `<p>${min}:${seg}.${ms}</p>`;
    } else {
        timer.innerHTML = `<p>${h}:${min}:${seg}.${ms}</p>`;
    }
}

// exibir salvos
const savesDisplayer = () => savestxt.innerHTML += `${saves[i]}`;

// salvos
let saves = [];
let i = 0;
const save = (t) => {
    saves[i] = t;
    savesDisplayer();
    i++;
}

// tempo
let time = {
    'ms': 0,
    'seg': 0,
    'min': 0,
    'h': 0,
}

// verificação  
let preStart = () => {
    if (!andamento) {
        intervalId = setInterval(start, 10);
        andamento = true;
    }
}

// iniciar 
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

// pausar
const pause = id => {
    clearInterval(id);
    andamento = false;
}

// zerar tempo
const stopTimer = () => {
    timer.h = 0;
    timer.min = 0;
    timer.seg = 0;
    timer.ms = 0;
}

// limpar exibir 
const clearDisplay = () => timer.innerHTML = '<p>00:00.00</p>'

// limpar salvos
const clearSaves = () => {
    savestxt.innerHTML = '';
    i = 0;
}

// parar
const stop = () => {
    pause(intervalId);
    clearSaves();
    clearDisplay();
    stopTimer();
}

// principal, direciona para as outras funcoes
const main = {
    'save':  () => save(timer.innerHTML),
    'start': () => preStart(),
    'pause': () => pause(intervalId),
    'stop':  () => stop()
};

// botao 
btns.addEventListener('click', button);