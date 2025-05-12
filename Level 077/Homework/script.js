
function createObject(keys, values) {
    let obj = {};
    for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i];
    }
    return obj;
}


const keys = ["name", "age", "city"];
const values = ["bondo", 321, "gldani"];

console.log(createObject(keys, values)); 

