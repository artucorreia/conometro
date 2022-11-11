const timer = window.document.querySelector('div#timer');
const btns = window.document.querySelector('div#btns');

const button = event => main[event.target.id]();

// main
const main = {
    'save':  () => alert('save ok'),
    'start': () => alert('start ok'),
    'pause': () => alert('pause ok')
};

// button   
btns.addEventListener('click', button);

