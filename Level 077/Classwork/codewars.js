
//! first task
function points(games) {
    let totalPoints = 0;
  
  for (let i =0; i < games.length; i++) {
      let xScore = parseInt(games[i][0]); 
      let yScore = parseInt(games[i][2]);
  
      if (xScore > yScore) {
      totalPoints += 3;
      } else if (xScore === yScore) {
        totalPoints += 1;
      }
    }
  
   return totalPoints;
  }

//! second task

function getGrade(s1, s2, s3) {
    let average = (s1 + s2 + s3) / 3; 
  
    if (average >= 90) return 'A';
    if (average >= 80) return 'B';
    if (average >= 70) return 'C';
    if (average >= 60) return 'D';
    return 'F'; 
  }

  
//! third task

function rentalCarCost(d) {
    let cost = d * 40;
    if (d >= 7){   
      cost -= 50;
    } else if (d >= 3){  
      cost -= 20;
    }
    return cost
  }