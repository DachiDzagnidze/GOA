


const people = [
    { name: 'bondo', age: 25, height: 182, gender: 'kaci' },
    { name: 'demuri', age: 44, height: 169, gender: 'kaci' },
    { name: 'poliaqtori', age: 188, height: 178, gender: 'kaci' },
    { name: 'zvezdana', age: 22, height: 160, gender: 'qali' },
];


people.forEach(function(person, index) {
    console.log((index + 1) + ') adamiani:');
    console.log('saxeli: ' + person.name);
    console.log('asaki: ' + person.age);
    console.log('simagle: ' + person.height);
    console.log('sqesi: ' + person.gender);
    console.log('-----------------------------');
});
