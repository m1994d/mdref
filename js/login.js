document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Credenciales predefinidas (en un proyecto real, usa un servidor o base de datos)
    const validUsername = "admin";
    const validPassword = "12345";
  
    if (username === validUsername && password === validPassword) {
      // Redirige al panel de administración
      window.location.href = "admin.html";
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  });
  