
// სამი ობიექტის შექმნა const-ით
const friend1 = {
    name: "Natali",
    age: 25,
    city: "Tbilisi",
    hobby: "Photography",
    profession: "Developer"
};

const friend2 = {
    name: "Dachi",
    age: 27,
    city: "Batumi",
    hobby: "Music",
    profession: "Web Developer"
};

const friend3 = {
    name: "Zaala",
    age: 26,
    city: "Kutaisi",
    hobby: "Painting",
    profession: "Designer"
};

// სამივე ობიექტის დაბეჭდვა
console.log(friend1);
console.log(friend2);
console.log(friend3);

// თითოეული ობიექტიდან ერთი თვისების დაბეჭდვა
console.log(friend1.name); 
console.log(friend2.age);  
console.log(friend3.city); 

// თვისების შეცვლა
friend1.city = "Paris"; 
friend2.hobby = "Traveling"; 
friend3.profession = "Illustrator"; 

// შეცვლილი ობიექტების თვისების დაბეჭდვა
console.log(friend1);
console.log(friend2);
console.log(friend3);



