
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
    var elementosPagina = 16;
    var paginaAtual = 1;



    var elementosPaginaBotao = document.createElement('select');
    elementosPaginaBotao.className = 'elementosPaginaBotao'



    var option16 = document.createElement('option');
    option16.value = 16;
    option16.textContent = '16 por página';
    option16.selected = true;

    var option32 = document.createElement('option');
    option32.value = 32;
    option32.textContent = '32 por página';

    var option64 = document.createElement('option');
    option64.value = 64;
    option64.textContent = '64 por página';

    var option128 = document.createElement('option');
    option128.value = 128;
    option128.textContent = '128 por página';



    //Excluir 4,6. realizar multiplos de 8. 

    // Adiciona as opções ao elemento select
    elementosPaginaBotao.appendChild(option16);
    elementosPaginaBotao.appendChild(option32);
    elementosPaginaBotao.appendChild(option64);
    elementosPaginaBotao.appendChild(option128);

    document.getElementById('rootCatalogoPaginacao').appendChild(elementosPaginaBotao);

    elementosPaginaBotao.addEventListener('change', () => {
      elementosPagina = elementosPaginaBotao.value;
      PaginacaoPrincipal();
    })

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
        cartaoTexto.innerHTML = "Modelo: <br>" + data[ano][i].modelo + "<br><br> Ano de fabricação: <br>" + data[ano][i]["ano de fabricação"]
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
    function PaginacaoPrincipal() {
      var rootCatalogoPaginacao = document.getElementById('rootCatalogoPaginacao');

      // Remove os botões de página existentes, se houver
      var botoesPagina = document.getElementsByClassName('buttonPagina');
      while (botoesPagina.length > 0) {
        rootCatalogoPaginacao.removeChild(botoesPagina[0]);
      }

      // Oculta todos os cartões
      document.querySelectorAll('.cartao').forEach(function (cartao) {
        cartao.style.display = 'none';
      });

      var paginasTotais = Math.ceil(elementosTotais / elementosPagina);

      function paginacao(pagina) {
        let inicio = (pagina - 1) * elementosPagina;
        let fim = pagina * elementosPagina;

        document.querySelectorAll('.cartao').forEach(function (cartao) {
          cartao.style.display = 'none';
          if (cartao.id >= inicio && cartao.id < fim) {
            cartao.style.display = 'block';
          }
        });
      }

      // Adiciona novos botões de página
      for (let i = 1; i <= paginasTotais; i++) {
        let buttonPagina = document.createElement('button');
        buttonPagina.textContent = i;
        buttonPagina.className = 'buttonPagina';
        buttonPagina.onclick = function () {
          paginacao(i);
        };

        rootCatalogoPaginacao.appendChild(buttonPagina);
      }

      paginacao(paginaAtual);
    }


    PaginacaoPrincipal();




  })
}