var loginhtml =
    `
<div class="login-container">
<h2>Login</h2>
<form action="/login" method="POST">
    <input type="text" name="username" placeholder="Usuário" required>
    <input type="password" name="password" placeholder="Senha" required>
    <button type="submit">Entrar</button>
</form>
</div>
`

// Login
let login = document.createElement('div')
login.className = "loginDiv";
login.innerHTML = loginhtml;
rootMenu.appendChild(login)
let loginVisibility = false;

function Login() {
    if (loginVisibility == false) {

        login.style.setProperty("animation", "slideLR 0.5s ease-out forwards");
        login.style.display = 'block'
        loginVisibility = true;

        //acessib
        acessib.style.display = 'none';
        acessibVisibility = false;

    } else if (loginVisibility == true) {
        login.style.setProperty("animation", "slideRL 0.5s ease-out forwards");
        loginVisibility = false;
    }
}

// LOGIN REALIZADO
document.querySelector('form').addEventListener('submit', function (event) {
    var username = document.querySelector('input[name="username"]').value;
    var password = document.querySelector('input[name="password"]').value;

    event.preventDefault();
    alert('Usuário e/ou senha inválidos');

});