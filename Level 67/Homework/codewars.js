
function digitalRoot(n) {
    while (n >= 10){  
      let sum = 0
      for (let d of String(n)){
        sum += Number(d)
    
    
    }
      n = sum
  }
    return n
    
  }