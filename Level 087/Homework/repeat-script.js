function repeatText() {
    const inputText = document.getElementById('inputText').value;
    const repeatCount = parseInt(document.getElementById('repeatCount').value);
    const outputElement = document.getElementById('output');
  
    if (inputText && repeatCount > 0) {
      const result = inputText.repeat(repeatCount);
      outputElement.textContent = result;
    } else {
      outputElement.textContent = 'Please enter valid text and repeat count.';
    }
  }