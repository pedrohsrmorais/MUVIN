
var menu =
    `<div class="menu">

        <ul>
            <li>
                <button onclick="MenuLoad('home')" class="menuButton">Linha do tempo</button>
            </li>
            <li>
                <button onclick="MenuLoad('catalogo')" class="menuButton" >Catalogo</button>
            </li>
            <li>
                <button id="optionsMenu" class="menuButton" > |||</button>
            </li>
        </ul>
    </div>
`

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

/// Opções extras
let options = document.createElement("div")
let optionsVisibility = false;
options.className = "options";
rootMenu.appendChild(options);


document.getElementById("optionsMenu").addEventListener('click', () => {

    if (optionsVisibility == false){

        options.style.display = "block";
        options.style.setProperty("animation", "moveMenuDown 1s forwards");
        optionsVisibility = true;
        document.getElementById("optionsMenu").style.transform = "rotate(90deg)";




    }else{
        options.style.setProperty("animation", "moveMenuUp 1s forwards");
        optionsVisibility = false;
        document.getElementById("optionsMenu").style.transform = "rotate(0deg)";


    }
})

