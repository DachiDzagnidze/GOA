document.getElementById("submitBtn").addEventListener("click", function() {
    // mivigot useris valueebi
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;
    var responseMessage = document.getElementById("responseMessage");

    // gadavikvanot asami mteli ricxvebidan parseintis gamokenebit
    age = parseInt(age);

    // Check if all fields are filled out
    if (firstName && lastName && !isNaN(age)) {
        if (age >= 18) {
            responseMessage.textContent = `Hello, ${firstName} ${lastName}! You are an adult.`;
            responseMessage.style.color = "green";  // es es masage zrdasrulebze
        } else {
            responseMessage.textContent = `Hello, ${firstName} ${lastName}! You are not allowed to use this program.`;
            responseMessage.style.color = "red";  // es witeli underageze
        }
    } else {
        responseMessage.textContent = "Please fill in all the fields.";
        responseMessage.style.color = "orange";  // mesigi gamotvebuli fieldebistvis
    }
});
