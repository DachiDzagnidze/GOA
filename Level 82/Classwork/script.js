const output = document.getElementById('output');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

function getRandomNumber() {
    return Math.ceil(Math.random() * 100);
}

function getRandomLetter() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return letters[Math.ceil(Math.random() * letters.length) - 1];
}

function start() {
    const choices = document.getElementsByName('choice');
    let choice;
    for (let i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
            break;
        }
    }
    interval = setInterval(function() {
        if (choice === 'number') {
            output.textContent = getRandomNumber();
        } else {
            output.textContent = getRandomLetter();
        }
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stop() {
    clearInterval(interval);
    output.textContent = 'Stopped';
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
