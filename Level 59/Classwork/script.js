


function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const agreement = document.getElementById('agreement').checked;

    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Checkbox Status:", agreement);
}
