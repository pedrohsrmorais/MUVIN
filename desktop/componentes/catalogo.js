
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



    var elementosPaginaBotao = document.createElement('select');
    elementosPaginaBotao.className = 'elementosPaginaBotao'

    var option4 = document.createElement('option');
    option4.value = 4;
    option4.textContent = '4 por página';

    var option6 = document.createElement('option');
    option6.value = 6;
    option6.textContent = '6 por página';

    var option8 = document.createElement('option');
    option8.value = 8;
    option8.textContent = '8 por página';
    option8.selected = true; // Esta opção será selecionada por padrão

    var option10 = document.createElement('option');
    option10.value = 10;
    option10.textContent = '10 por página';

    var option12 = document.createElement('option');
    option12.value = 12;
    option12.textContent = '12 por página';


    // Adiciona as opções ao elemento select
    elementosPaginaBotao.appendChild(option4);
    elementosPaginaBotao.appendChild(option6);
    elementosPaginaBotao.appendChild(option8);
    elementosPaginaBotao.appendChild(option10);
    elementosPaginaBotao.appendChild(option12);

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
        cartaoTexto.innerHTML = "Modelo: <br>" + data[ano][i].modelo + "<br><br> Ano de fabricação: <br>" + data[ano][i].ano_fabricacao
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