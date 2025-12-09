let score = 0;
let multiplier = 1;  // დაწყების მხრივ multiplier არის 1
let level = 1;  // პირველ ლეველზე ვარ
const cookie = document.getElementById('cookie');
const scoreElement = document.getElementById('score');
const resetButton = document.getElementById('reset');
const gameTitle = document.getElementById('game-title');

cookie.addEventListener('click', function() {
    score += multiplier;  // ყოველი კლიკი მრავლდება multiplier-ით
    scoreElement.textContent = score;

    scoreElement.classList.add('animated');
    setTimeout(() => {
        scoreElement.classList.remove('animated');
    }, 500);

    while (score >= level * 100) {
        level++;  
        multiplier *= 2;  
        scoreElement.textContent = score;

        cookie.classList.add('new-level');
        setTimeout(() => {
            cookie.classList.remove('new-level');
        }, 1000);

        gameTitle.classList.add('new-level-animation'); 
        setTimeout(() => {
            gameTitle.classList.remove('new-level-animation');
        }, 1000); 
    }

    cookie.classList.add('clicked');
    setTimeout(() => {
        cookie.classList.remove('clicked');
    }, 600);
});

resetButton.addEventListener('click', function() {
    score = 0;
    multiplier = 1;  
    level = 1;  
    scoreElement.textContent = score;
});
