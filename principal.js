
const usuario = 'Gabriel';
const senha = '131723';

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === usuario && password === senha) {
    window.location.href = 'formulariopix.html';
  } 
  
  else {
    alert('Usuário ou senha incorretos. Tente novamente.');
  }
}