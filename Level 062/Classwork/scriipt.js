



const textElement = document.getElementById('text');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function() {

    if (textElement.classList.contains('hidden')) {
        textElement.classList.remove('hidden');
        textElement.textContent = "გამარჯობა";
    } else {

        textElement.classList.add('hidden');
        

        setTimeout(() => {
            textElement.textContent = "ნახვამდის";
            textElement.classList.remove('hidden'); 
        }, 1500); 
    }
});
