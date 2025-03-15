const logos = {
    react: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    javascript: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    html: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    css: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'
  };
  
  function changeLogo(lang) {
    const logoElement = document.getElementById('logo');
    logoElement.src = logos[lang];
  }