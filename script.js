document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const validUsername = "usuario";
    const validPassword = "senha123";

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === validUsername && password === validPassword) {
        alert('Login bem-sucedido!');

        window.location.href = 'login.html'; 
    } else {
        
        errorMessage.textContent = 'Usuário ou senha inválidos. Tente novamente.';
    }
});

