
const catImageUrl = ''; 
const dogImageUrl = ''; 


const catButton = document.getElementById('catButton');
const dogButton = document.getElementById('dogButton');
const animalImage = document.getElementById('animalImage');


catButton.addEventListener('click', () => {
    animalImage.src = catImageUrl;
    animalImage.alt = 'katisshvili';
});


dogButton.addEventListener('click', () => {
    animalImage.src = dogImageUrl;
    animalImage.alt = 'dzaglishvili';
});