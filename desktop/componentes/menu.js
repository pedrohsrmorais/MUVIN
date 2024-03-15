
var menu =
    `<div class="menu">
        <img id="imgheader" src="../backend/imagens/Logo.png" alt="Descrição da imagem">
        <ul>
            <li>
                <button onclick="MenuLoad('home')" class="menuButton">Inicio</button>
            </li>
            <li>
                <button onclick="MenuLoad('catalogo')" class="menuButton" >Catalogo</button>
            </li>
            <li>
                <button onclick="MenuLoad('about')" class="menuButton">Sobre nós</button>
            </li>
            <li>
                <button onclick="MenuLoad('contato')" class="menuButton">Contato</button>
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
        case 'about':
            root.innerHTML = about;
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



