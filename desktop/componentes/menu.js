
var menu =
    `<div class="menu">
        <img id="imgheader" src="../backend/imagens/Logo.png" alt="Descrição da imagem">
        <ul>
            <li>
                <button onclick="MenuLoad('home')">Inicio</button>
            </li>
            <li>
                <button onclick="MenuLoad('catalogo')">Catalogo</button>
            </li>
            <li>
                <button onclick="MenuLoad('about')">Sobre nós</button>
            </li>
            <li>
                <button onclick="MenuLoad('contato')">Contato</button>
            </li>
        </ul>
    </div>
`

var rootMenu = document.getElementById('rootMenu');
var root = document.getElementById('root');

rootMenu.innerHTML = menu;
root.innerHTML = linhaTempo;



function MenuLoad(page) {

    switch (page) {
        case 'home':
            root.innerHTML = linhaTempo;
            break;
        case 'catalogo':
            root.innerHTML = catalogo;
            break;
        case 'about':
            root.innerHTML = about;
            break;
        case 'contato':
            root.innerHTML = contato;
            break;
        default:
            root.innerHTML = linhaTempo;
            break;
    }
}



