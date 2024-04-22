
// URL da api do catalogo (mesmo da linha do tempo)
const catalogo_api = 'http://localhost/MUVIN/backend/api_linhaTempo.php';


// Fetch dos dados da api
const fetchCatalogo = async () => {

  const response = await fetch(catalogo_api);

  const result = await response.json();
  return result;

};

var catalogo =
  `<div id='rootCatalogoPaginacao'></div>
  <div id='rootCatalogo'></div>`;



// Função que cria o catálogo
function catalogoFunction() {

  // Executa assim que obter os dados da api
  fetchCatalogo().then((data) => {
 
    // Criando os cartões do catálogo
    for (const ano in data) {

      for (let i = 0; i < data[ano].length; i++) {

        var cartao = document.createElement("div");
        cartao.className = 'cartao';

        document.getElementById('rootCatalogo').appendChild(cartao);

        var cartaoImagem = document.createElement("img")
        cartaoImagem.src = data[ano][i].url;
        cartaoImagem.className = 'cartaoImagem'
        cartao.appendChild(cartaoImagem)
/*
        var cartaoTexto = document.createElement("p")
        cartaoTexto.innerHTML = data[ano][i].modelo
        cartaoTexto.className = 'cartaoTexto'
        cartao.appendChild(cartaoTexto)
*/
        // Event Listener do cartao para abrir o overley
        cartao.addEventListener('click', function () {

          overlay(data[ano][i].id);

        });

        
      }


    }

  })
}