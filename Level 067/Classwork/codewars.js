
function catMouse(x) {
    let catIndex = -1;
    let mouseIndex = -1;

    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'C') {
            catIndex = i; 
        } else if (x[i] === 'm') {
            mouseIndex = i; 
        }
    }

    if (mouseIndex - catIndex <= 4) {
        return "Caught!";
    } else {
        return "Escaped!";
    }
}