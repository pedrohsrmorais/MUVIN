


// Root da linha do tempo criado em cima da root principal
var linhaTempo =
  `<div id='rootLinhaTempo'></div>`;


// URL da api da Linha do Tempo
const linha_api = 'http://localhost/MUVIN/backend/api_linhaTempo.php';


// Fetch dos dados da api da Linha do Tempo
const fetchLinhaTempo = async () => {

  const response = await fetch(linha_api);


  const result = await response.json();
  return result;

};

//Função que cria a linha do tempo
function linhaTempoFunction() {


  //Executa assim que obter os dados da api
  fetchLinhaTempo().then((data) => {

    var rootLinhaTempo = document.getElementById('rootLinhaTempo');

    // Pega o primeiro e o último ano
    const anos = Object.keys(data);
    const primeiroAno = anos[0];
    const ultimoAno = anos[anos.length - 1];


    // Criando a régua da linha do tempo
    for (var ano = primeiroAno; ano <= ultimoAno; ano++) {

      // Desenhando as décadas
      var divDecada = document.createElement('div');

      let resto = ano % 10;
      if (resto == 0) {
        divDecada.textContent = ano;
      } else {
        divDecada.innerHTML = "&nbsp; ";
      }

      divDecada.id = "Decada: " + ano;
      divDecada.className = 'decadas';

      rootLinhaTempo.appendChild(divDecada)


      // Desenhando os anos
      var divAno = document.createElement('div');

      divAno.textContent = '|';
      divAno.id = ano;
      divAno.className = 'anos';

      divDecada.appendChild(divAno)




    }



    // Criando as tooltips



    for (const ano in data) {

      for (let i = 0; i < data[ano].length; i++) {

        var tooltip = document.createElement("button");
        tooltip.textContent = '';
        tooltip.className = 'tooltip';
        tooltip.id = data[ano][i].id;

        // Event Listener do tooltip para abrir o overley
        tooltip.addEventListener('click', function () {

          overlay(data[ano][i].id);

        });



        document.getElementById(data[ano][i]["ano de fabricação"]).appendChild(tooltip);
      }


    }



    // Fetch do overlay para ser usado com filtro
    const fetchFiltro = async (id_overlay) => {

      const response = await fetch(`http://localhost/MUVIN/backend/api_overlay.php?id=${id_overlay}`);
      const result = await response.json();
      return result;
    };

    // Atribui a cada tooltip seus respectivos dados
    document.querySelectorAll(".tooltip").forEach((tooltip, index) => {
      fetchFiltro(tooltip.id)
        .then((dados) => {
          Object.values(dados).forEach((value) => {
            tooltip.setAttribute('data-dados', JSON.stringify(dados));
          });

        })
    })

  })
}