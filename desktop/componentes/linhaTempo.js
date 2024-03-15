
// URL da api da Linha do Tempo
const linha_api = 'http://localhost/MUVIN/backend/api_linhaTempo.php';


// Fetch dos dados da api
const fetchLinhaTempo = async () => {

  const response = await fetch(linha_api);

  const result = await response.json();
  return result;

};



var linhaTempo =
  `<div id='rootLinhaTempo'></div>`;


//Função que cria a linha do tempo
function linhaTempoFunction() {




  //Executa assim que obter os dados da api
  fetchLinhaTempo().then((data) => {

    // Executa quando o doc está totalmente carregado


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
      } else { divDecada.innerHTML = "&nbsp; "; 
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

        // Event Listener do tooltip para abrir e fechar a tooltip completa
        tooltip.addEventListener( 'mouseover', function() {


        })
        tooltip.addEventListener( 'mouseout', function() {

        })



        document.getElementById(data[ano][i].ano_fabricacao).appendChild(tooltip);
      }


    }


  })
}