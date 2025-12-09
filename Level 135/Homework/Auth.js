// Auth.js
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');

if (registerForm) {
  registerForm.addEventListener('submit', e => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    localStorage.setItem('user', JSON.stringify({ username, password }));
    window.location.href = 'index.html';
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (savedUser && savedUser.username === username && savedUser.password === password) {
      window.location.href = 'index.html';
    } else {
      alert('მონაცემები არასწორია');
    }
  });
}
