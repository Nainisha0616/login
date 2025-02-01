document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simple validation
  if (username === 'admin' && password === 'password123') {
    alert('Login Successful!');
  } else {
    document.getElementById('errorMessage').innerText = 'Invalid username or password.';
  }
});
