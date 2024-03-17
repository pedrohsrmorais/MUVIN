
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


    var elemento = [];
    var elementosTotais = 0;
    var elementosPagina = 8;
    var paginaAtual = 1;

 
    // Criando os cartões do catálogo
    for (const ano in data) {

      for (let i = 0; i < data[ano].length; i++) {

        var cartao = document.createElement("div");
        cartao.className = 'cartao';
        cartao.id = elementosTotais;
        document.getElementById('rootCatalogo').appendChild(cartao);

        var cartaoImagem = document.createElement("img")
        cartaoImagem.src = data[ano][i].url;
        cartaoImagem.className = 'cartaoImagem'
        cartao.appendChild(cartaoImagem)

        var cartaoTexto = document.createElement("p")
        cartaoTexto.innerHTML = "Modelo: <br>" +data[ano][i].modelo +"<br><br> Ano de fabricação: <br>" + data[ano][i].ano_fabricacao
        cartaoTexto.className = 'cartaoTexto'
        cartao.appendChild(cartaoTexto)

        elemento.push(elementosTotais)
        elementosTotais = elementosTotais + 1;

        // Event Listener do cartao para abrir o overley
        cartao.addEventListener('click', function () {

          overlay(data[ano][i].id);

        });

        
      }


    }


    // Paginação do catálogo
    var paginasTotais = Math.ceil(elementosTotais / elementosPagina);

    function paginacao(pagina) {
      let inicio = (pagina - 1) * elementosPagina;
      let fim = pagina * elementosPagina;
    
      document.querySelectorAll('.cartao').forEach(function(cartao) {
        cartao.style.display = 'none'; 
        if (cartao.id >= inicio && cartao.id < fim) {
          cartao.style.display = 'block'; 
        }
      });
    }

    for (let i = 1; i <= paginasTotais; i++) {
      let buttonPagina = document.createElement('button');
      buttonPagina.textContent = 'Página: ' + i;
      buttonPagina.className = 'buttonPagina'
      buttonPagina.onclick = function() {
        paginacao(i);
      };
      document.getElementById('rootCatalogoPaginacao').appendChild(buttonPagina);
    }

    paginacao(paginaAtual)
    


  })
}