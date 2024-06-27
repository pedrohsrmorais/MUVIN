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
                <button onclick="window.open('https://www.ufrgs.br/colegiodeaplicacao/', '_blank')" class="menuButton">Sobre nós</button>
            </li>
            <li>
                <p> </p>
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
            <button onclick="Submenu()" class="subMenuButton">      </button>

            <button onclick="MenuLoad('contato')" class="subMenuButton">Contato</button>

            <button onclick="" class="subMenuButton">Modo escuro</button>

            <button onclick="acessibilidade()" class="subMenuButton">Acessibilidade</button>

            <button onclick="Login()" class="subMenuButton">Login</button>
    </div>

`;

// Função para alternar a visibilidade do submenu

let options = document.createElement("div")
let optionsVisibility = false;
let menuButton = document.getElementById("menuButtonId")

options.className = "options";

rootMenu.appendChild(options)
options.innerHTML = submenu;

let menuButtonX = document.createElement("button")
menuButtonX.className = "menuButtonX";
menuButtonX.textContent = "+";
menuButtonX.onclick = Submenu;
document.body.appendChild(menuButtonX);

function Submenu() {

    if (optionsVisibility == false) {
        options.style.setProperty("animation", "moveLeft 1s forwards");
        options.style.display = "block";

        optionsVisibility = true;
        //  document.getElementById("optionsMenu").style.transform = "rotate(90deg)";



        menuButtonX.style.transform = "rotate(45deg) scale(1.8)";




    } else {
        options.style.setProperty("animation", "moveRight 1s forwards");
        optionsVisibility = false;

        acessib.style.display = 'none';
        login.style.display = 'none';
        acessibVisibility = false;
        //  document.getElementById("optionsMenu").style.transform = "rotate(0deg)";

        menuButtonX.style.transform = "rotate(90deg) scale(1.6)";
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

    <div>
    <p>Cor do menu:</p>
    <input type="color" id="colorMenu" name="colorMenu" value="#001e32">
<br><br>
    <p>Cor da fonte:</p>
    <input type="color" id="colorFonte" name="colorFonte" value="#ffffff">
    </div>
    <div>
    <p>Cor do background:</p>
    <input type="color" id="colorBackground" name="colorBackground" value="#053c50">
<br><br>
    <p>Tamanho das fontes:</p>
    <button class="FontePlus" onclick=fontesPlusFunctionMenu() id="FontePlus">+</button>
    <button class="FonteMinus" onclick=fontesMinusFunctionMenu() id="FonteMinus">-</button>
    </div>
    <div>
    <p>Cor catálogo:</p>
    <input type="color" id="colorCatalogo" name="colorCatalogo" value="#3c7891">
<br><br>
    <p>Cor texto catálogo:</p>
    <input type="color" id="colorCatalogoText" name="colorCatalogoText" value="#000000">

    </div>
    `;

rootMenu.appendChild(acessib)

// Fontes e Paletas dinamicas MENU:


// Função para alterar a paleta de cores:
const colorMenu = document.getElementById('colorMenu');
const colorFonte = document.getElementById('colorFonte');
const colorBackground = document.getElementById('colorBackground');
const colorCatalogo = document.getElementById('colorCatalogo');
const colorCatalogoText = document.getElementById('colorCatalogoText');

colorMenu.addEventListener('input', function () {
    let root = document.documentElement;
    root.style.setProperty('--cor-submenu', colorMenu.value);
});

colorFonte.addEventListener('input', function () {
    let root = document.documentElement;
    root.style.setProperty('--cor-menu', colorFonte.value);
});

colorBackground.addEventListener('input', function () {
    let root = document.documentElement;
    root.style.setProperty('--cor-background', colorBackground.value);
});

colorCatalogo.addEventListener('input', function () {
    let root = document.documentElement;
    root.style.setProperty('--cor-catalogo', colorCatalogo.value);
});

colorCatalogoText.addEventListener('input', function () {
    let root = document.documentElement;
    root.style.setProperty('--texto-catalogo', colorCatalogoText.value);
});




// Função para aumentar o tamanho da fonte
function fontesPlusFunctionMenu() {
    let root = document.documentElement;
    let currentSize = parseFloat(getComputedStyle(root).getPropertyValue('--fonte-menu'));
    root.style.setProperty('--fonte-menu', `${currentSize + 2}px`);
}

// Função para diminuir o tamanho da fonte
function fontesMinusFunctionMenu() {
    let root = document.documentElement;
    let currentSize = parseFloat(getComputedStyle(root).getPropertyValue('--fonte-menu'));
    root.style.setProperty('--fonte-menu', `${currentSize - 2}px`);
}

/*
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
*/

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

