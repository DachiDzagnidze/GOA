
const timeInput = document.getElementById('timeInput');
const messageInput = document.getElementById('messageInput');
const showMessageButton = document.getElementById('showMessageButton');
const messageDisplay = document.getElementById('messageDisplay');


showMessageButton.addEventListener('click', () => {

    const time = parseInt(timeInput.value);
    const message = messageInput.value;

//! es aris OR opertaori da ar aris DA operatori
    if (isNaN(time) || time < 0 || !message) {

        alert("Please enter a valid time and message.");
        return;
    }


    messageDisplay.textContent = '';

    setTimeout(() => {
        messageDisplay.textContent = message;
    }, time);
});