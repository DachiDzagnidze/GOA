function calculateSum() {
    const array = [1, 2, 3, 4, 5]; // Example array
    let sum = 0;
    array.forEach((num) => {
      sum += num;
    });
    document.getElementById('arraySumResult').textContent = sum;
  }