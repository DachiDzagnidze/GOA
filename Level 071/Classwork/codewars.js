
function match(usefulness, months) {
  
    let totalUsefulness = 0;
    for (let i = 0; i < usefulness.length; i++) {
      totalUsefulness += usefulness[i];
    }
  
  
    let adjustedNeeds = 100 * Math.pow(0.85, months);
  
  
    if (totalUsefulness >= adjustedNeeds) {
      return "Match!";
    } else {
      return "No match!";
    }
  }