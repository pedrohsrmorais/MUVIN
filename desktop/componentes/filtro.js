
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
    let tiposUnicos = new Set();


    document.querySelectorAll('[data-dados]').forEach((elemento, index) => {

        const dadosString = elemento.getAttribute('data-dados');
        const dadosObjeto = JSON.parse(dadosString);

        fabricantesUnicos.add(dadosObjeto.fabricante);
        paisUnicos.add(dadosObjeto.país);
        tiposUnicos.add(dadosObjeto.tipo);

    });



    // Criação dos Selects do filtro
    var filtroSelectFabricante = document.createElement("select");
    var filtroSelectPais = document.createElement("select");
    var filtroSelectTipo = document.createElement("select");

    filtroDiv.appendChild(filtroSelectFabricante);
    filtroDiv.appendChild(filtroSelectPais);
    filtroDiv.appendChild(filtroSelectTipo);

    var filtroOptionFabricante = document.createElement("option");
    filtroOptionFabricante.value = '';
    filtroOptionFabricante.textContent = 'Fabricante';
    filtroSelectFabricante.appendChild(filtroOptionFabricante);

    var filtroOptionPais = document.createElement("option");
    filtroOptionPais.value = '';
    filtroOptionPais.textContent = 'País';
    filtroSelectPais.appendChild(filtroOptionPais);

    var filtroOptionTipo = document.createElement("option");
    filtroOptionTipo.value = '';
    filtroOptionTipo.textContent = 'Tipo';
    filtroSelectTipo.appendChild(filtroOptionTipo);

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

    for (const item of tiposUnicos) {
        var filtroOptionTipo = document.createElement("option");
        filtroOptionTipo.value = item;
        filtroOptionTipo.textContent = item;
        filtroSelectTipo.appendChild(filtroOptionTipo);
    }

    // Criação dos botões do filtro
    var filtroSair = document.createElement('button');
    filtroSair.className = "filtroSair";
    filtroSair.textContent = "X";
    filtroSair.addEventListener('click', () => { root.removeChild(filtroDiv) })
    filtroDiv.appendChild(filtroSair);

    var filtroFiltrar = document.createElement('button');
    filtroFiltrar.className = "filtroFiltrar";
    filtroFiltrar.textContent = "Filtrar";
    filtroFiltrar.addEventListener('click', () => {
        const fabricanteSelecionado = filtroSelectFabricante.value;
        const paisSelecionado = filtroSelectPais.value;
        const tipoSelecionado = filtroSelectTipo.value;

        document.querySelectorAll('[data-dados]').forEach(elemento => {
            const dadosString = elemento.getAttribute('data-dados');
            const dadosObjeto = JSON.parse(dadosString);

            const deveOcultar =
                (fabricanteSelecionado && dadosObjeto.fabricante !== fabricanteSelecionado) ||
                (paisSelecionado && dadosObjeto.país !== paisSelecionado) ||
                (tipoSelecionado && dadosObjeto.tipo !== tipoSelecionado);

            if (deveOcultar) {
                elemento.style.display = 'none';
            } else {
                elemento.style.display = '';
            }
        });

    });

    filtroDiv.appendChild(filtroFiltrar);


    document.getElementById('root').appendChild(filtroDiv);

}
