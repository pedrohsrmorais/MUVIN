
var filtro =
    `<div>

    <h1> FUNÇÃO FILTRO BUSCA </h1>
    
</div>`;

function FiltroFunction() {

    var filtroDiv = document.createElement("div");
    filtroDiv.className = `filtroDiv`;

    // Componentes filtráveis
    let fabricantesUnicos = new Set();
    let paisUnicos = new Set();


    document.querySelectorAll('[data-dados]').forEach((elemento, index) => {

        const dadosString = elemento.getAttribute('data-dados');
        const dadosObjeto = JSON.parse(dadosString);

        fabricantesUnicos.add(dadosObjeto.fabricante);
        paisUnicos.add(dadosObjeto.pais);

    });

    

    // Criação dos Selects do filtro
    var filtroSelectFabricante = document.createElement("select");
    var filtroSelectPais = document.createElement("select");

    filtroDiv.appendChild(filtroSelectFabricante);
    filtroDiv.appendChild(filtroSelectPais);

    var filtroOptionFabricante = document.createElement("option");
    filtroOptionFabricante.value = '';
    filtroOptionFabricante.textContent = '--';
    filtroSelectFabricante.appendChild(filtroOptionFabricante);

    var filtroOptionPais = document.createElement("option");
    filtroOptionPais.value = '';
    filtroOptionPais.textContent = '--';
    filtroSelectPais.appendChild(filtroOptionPais);

    // Criação das opções possíveis de serem filtradas
    for (const item of fabricantesUnicos) {
        var filtroOptionFabricante = document.createElement("option");
        filtroOptionFabricante.value = item;
        filtroOptionFabricante.textContent = item;
        filtroSelectFabricante.appendChild(filtroOptionFabricante);
    }

    for (const item of paisUnicos) {
        var filtroOptionPais = document.createElement("option");
        filtroOptionPais.value = item;
        filtroOptionPais.textContent = item;
        filtroSelectPais.appendChild(filtroOptionPais);
    }

    // Criação dos botões do filtro
    var filtroSair = document.createElement('button');
    filtroSair.className = "filtroSair";
    filtroSair.textContent = "X";
    filtroSair.addEventListener('click',()=>{ root.removeChild(filtroDiv) })
    filtroDiv.appendChild(filtroSair);

    var filtroFiltrar = document.createElement('button');
    filtroFiltrar.className = "filtroFiltrar";
    filtroFiltrar.textContent = "Filtrar";
    filtroFiltrar.addEventListener('click', () => {
        console.log('Filtrando com fabricante:', filtroSelectFabricante.value, 'e país:', filtroSelectPais.value);
    });
    filtroDiv.appendChild(filtroFiltrar);


    document.getElementById('root').appendChild(filtroDiv);

}
