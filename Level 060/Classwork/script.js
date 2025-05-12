
document.getElementById("start").addEventListener("click", function () {

    let isBlackScreen = confirm("gindat black screen?");

    let isLargeText = confirm("gindat large text?");

    let isLongText = confirm("gindat long text?");

    let output = document.createElement("div");

    if (isBlackScreen) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white"; 
    }

    if (isLargeText) {
        output.style.fontSize = "2em";
    }

    if (isLongText) {
        output.innerText = "es aris grdzeli texti romelic tqven airchiet";
    } else {
        output.innerText = "es aris mokle texti.";
    }


    document.body.appendChild(output);
});
