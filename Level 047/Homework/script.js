
// წუთში 60 წამია ამიტომაც უნდა გავამრავლოთ 1 წუთი 60 ზე
function MinutesToSecinds(minutes) {
    return minutes * 60;
}

// აბრუნებს ჯამის ნამრავლს მესამე რიცხვზე
function threenumberssum(a, b, c) {
    return (a + b) * c;
}

// if statment ების გარეშე true and false  ასე დაბრუნდება
function numbersTrueFalse(a, b) {
    return a > b; // აქ if არ არის საჭირო, რადგან შედარება უკვე აბრუნებს true ან false-ს
}


// Void function: კონსოლში ბეჭდავს ელემენტს
function printElement(element) {
    console.log("Element: " + element);
}

// Void function: შესაბამისი id ელემენტში ჩასვამს ტექსტს
function insertTextById(id, text) {
    document.getElementById(id).innerText = text;
}
