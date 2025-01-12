


//! 2) შექმენით პროგრამა რომელიც მომხმარებლის შეტანილი რიხცვს დაუმატებს ერთ ერთს სანამ მოცემული რიცხვი არ შედგება 0-ებისგან ( პირველი რიცხვუს გარდა ), მაგ: 156–> 200, 5678 —> 6000…

function toZeroes(n){  
  let dividion = 10 ** (String(n).length - 1)
  console.log(Math.ceil(n / dividion) * dividion)

}

toZeroes(4783)