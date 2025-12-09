
//მომხმარებელს შემოაყვანინეთ ტექსტი -prompt-ის მეშვეობით, თუ ეს ტექსტი შეიცავს რაიმე ნიშანს ან რიცხვს გამოიტანეთ "ერორი", სხვა შემხვევაში სიტყვა "წარმატებული ოპერაცია"
//ერრორის მესიჯთან ერთად გამოიგტანეთ რა ინდექსებზე შეინიშნა რიცხვ(ები)

let text = prompt("შეიყვანეთ ტექსტი");
let errors = "!@#$%^&*():"
let hasErrors = false

for (let i = 0; i < text.length; i++){  
    for(let j = 0; j < text.length; j++){   
        if (text[i] === errors[j]){ 
            alert(`Error: inavlit Characters found - ${i}`)
            hasErrors = true
        }
    }

}

if(!hasErrors){ 
    alert("sucssesfull opeartion")
}