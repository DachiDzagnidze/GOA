let timer; 
let timeLeft; 
let currentNumber = 0; 


document.getElementById('startButton').addEventListener('click', startTimer);


document.getElementById('stopButton').addEventListener('click', stopTimer);


function startTimer() {
    const inputTime = parseInt(document.getElementById('timeInput').value);

    if ( inputTime < 0 || inputTime > 10000) {
        alert("Please enter time between 0-10000.");
        return; 
    }

    timeLeft = inputTime;
    currentNumber = 0;

    document.getElementById('message').textContent = '';
    document.getElementById('display').textContent = currentNumber;


    clearTimeout(timer);


    updateTimer();
}

//! stop timer function
function stopTimer() {
    clearTimeout(timer);
    document.getElementById('message').textContent = "time stopped";
}

//! update timer function
function updateTimer() {
    if (timeLeft <= 0) {

        document.getElementById('display').textContent = '';
        document.getElementById('message').textContent = "Time is up!";
        return; 
    }


    timeLeft -= 1000;


    currentNumber++;


    document.getElementById('display').textContent = currentNumber;


    timer = setTimeout(updateTimer, 1000);
}