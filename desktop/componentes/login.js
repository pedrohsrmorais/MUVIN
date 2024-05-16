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

function Login(){
    if (loginVisibility == false) {

        login.style.display = 'block'
        loginVisibility = true;

        //acessib
        acessib.style.display = 'none';
        acessibVisibility = false;

    } else if (loginVisibility == true){

        login.style.display = 'none'
        loginVisibility = false;
    }
}
