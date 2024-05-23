var menu = `
    <div class="menu">
        <img id="imgheader" src="../backend/imagens/Logo.png" alt="Imagem Muvin">
        <ul>
            <li>
                <button onclick="MenuLoad('home')" class="menuButton">Linha do Tempo</button>
            </li>
            <li>
                <button onclick="MenuLoad('catalogo')" class="menuButton" >Catálogo</button>
            </li>
            <li>
                <button onclick="MenuLoad('contato')" class="menuButton">Contato</button>
            </li>
            <li>
                <button onclick="Submenu()" name="optionsMenu" class="menuButton"><<</button>
            </li>
        </ul>
    </div>
`;

var rootMenu = document.getElementById('rootMenu');
var root = document.getElementById('root');

rootMenu.innerHTML = menu;
root.innerHTML = linhaTempo;
linhaTempoFunction();

function MenuLoad(page) {
    switch (page) {
        case 'home':
            root.innerHTML = linhaTempo;
            linhaTempoFunction();
            break;
        case 'catalogo':
            root.innerHTML = catalogo;
            catalogoFunction();
            break;
        case 'contato':
            root.innerHTML = contato;
            break;
        default:
            root.innerHTML = linhaTempo;
            linhaTempoFunction();
            break;
    }
}

// Opções extras (submenu)
var submenu = `
    <div class="submenu">
            <button onclick="Submenu()" class="subMenuButton"> >> </button>

            <button onclick="window.open('https://www.ufrgs.br/colegiodeaplicacao/', '_blank')" class="subMenuButton">Sobre nós</button>

            <button onclick="modoEscuro()" class="subMenuButton">Modo escuro</button>

            <button onclick="acessibilidade()" class="subMenuButton">Acessibilidade</button>

            <button onclick="Login()" class="subMenuButton">Login</button>
    </div>

`;

// Função para alternar a visibilidade do submenu

let options = document.createElement("div")
let optionsVisibility = false;
options.className = "options";

rootMenu.appendChild(options)
options.innerHTML = submenu;

function Submenu() {

    if (optionsVisibility == false) {
        options.style.setProperty("animation", "moveLeft 1s forwards");
        options.style.display = "block";

        optionsVisibility = true;
        //  document.getElementById("optionsMenu").style.transform = "rotate(90deg)";

    } else {
        options.style.setProperty("animation", "moveRight 1s forwards");
        optionsVisibility = false;

        acessib.style.display = 'none';
        login.style.display = 'none';
        acessibVisibility = false;
        //  document.getElementById("optionsMenu").style.transform = "rotate(0deg)";

    }
}

// Modo Escuro
isBackgroundBlue = true;
function modoEscuro() {

    if (isBackgroundBlue) {
        document.body.style.background = "linear-gradient(#273e49, rgb(2, 57, 94))";

    } else {
        document.body.style.background = "linear-gradient(#013952, rgb(47, 114, 143))";
    }
    isBackgroundBlue = !isBackgroundBlue;

}

// Acessibilidade
let acessib = document.createElement('div')
acessib.className = "acessibilidadeDiv";
acessib.innerHTML = `
    <button class="acessibButton" id="deuteranopiaBtn">Deuteranopia</button> 
    <button class="acessibButton" id="tritanopiaBtn">Tritanopia</button> 
    <button class="acessibButton" id="acromaticoBtn">Acromático</button>
    <button class="acessibButton" id="padraoBtn">Padrão</button>
    `;

rootMenu.appendChild(acessib)


document.getElementById("deuteranopiaBtn").addEventListener("click", function () {

    // Cor do menu
    var menuButtons = document.getElementsByClassName("menuButton");
    for (var i = 0; i < menuButtons.length; i++) {
        menuButtons[i].style.color = "rgb(255, 200, 40)";
    }

    // Cor do background
    document.body.style.background = "linear-gradient(#0f3ca0, #0a288c)";


});

document.getElementById("tritanopiaBtn").addEventListener("click", function () {

    // Cor do menu
    var menuButtons = document.getElementsByClassName("menuButton");
    for (var i = 0; i < menuButtons.length; i++) {
        menuButtons[i].style.color = "rgb(255, 200, 40)";
    }

    // Cor do background
    document.body.style.background = "linear-gradient(#0f3ca0, #0a288c)";


});

document.getElementById("acromaticoBtn").addEventListener("click", function () {
    
    // Cor do menu
    var menuButtons = document.getElementsByClassName("menuButton");
    for (var i = 0; i < menuButtons.length; i++) {
        menuButtons[i].style.color = "rgb(255, 255, 255)";
    }

    // Cor do background
    document.body.style.background = "linear-gradient(rgb(25, 25, 25), rgb(255, 255, 255))";

});

document.getElementById("padraoBtn").addEventListener("click", function () {

    // Cor do menu
    var menuButtons = document.getElementsByClassName("menuButton");
    for (var i = 0; i < menuButtons.length; i++) {
        menuButtons[i].style.color = "rgb(255, 255, 255)";
    }

    // Cor do background
    document.body.style.background = "linear-gradient(#013952, rgb(47, 114, 143))";

});


let acessibVisibility = false;

function acessibilidade() {
    if (acessibVisibility == false) {

        acessib.style.setProperty("animation", "slideLR 0.5s ease-out forwards");
        acessib.style.display = 'grid'; 
        acessibVisibility = true; 

        //loginvisibi
        login.style.display = 'none'
        loginVisibility = false;

    } else if (acessibVisibility == true) {

        acessib.style.setProperty("animation", "slideRL 0.5s ease-out forwards"); 

        acessibVisibility = false;
    }

}

// Login -> login.js