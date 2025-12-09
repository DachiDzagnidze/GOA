
var submitButton = document.getElementById("submitButton");

// davmatot gilakze daweris funqcia
submitButton.addEventListener("click", function () {
    // avigot titoeuli velis mnishvneloba
    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var terms = document.getElementById("terms").checked;

    // shec=vamowmot tu kvvela veli shevsebulia 
    if (firstName === "" || lastName === "" || email === "" || password === "" || !terms) {
        alert("გთხოვთ, შეავსოთ ყველა ველი"); // tu romelime ariqneba shevsebuli gamotanos teqtsi
        return; 
    }

    // monacacemebis gamotana comnsolshi
    console.log("სახელი: " + firstName);
    console.log("გვარი: " + lastName);
    console.log("ელფოსტა: " + email);
    console.log("პაროლი: " + password);
    console.log("ეთანხმება წესებს: " + terms);

    // alertit gamogvaq texti
    alert("ფორმა წარმატებით გაიგზავნა!");
});
