
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
    var filtroSelectFabricante = criarSelect(filtroDiv, fabricantesUnicos, 'Fabricante');
    var filtroSelectPais = criarSelect(filtroDiv, paisUnicos, 'País');
    var filtroSelectTipo = criarSelect(filtroDiv, tiposUnicos, 'Tipo');

    // Botão de sair do filtro
    var filtroSair = document.createElement('button');
    filtroSair.className = "filtroSair";
    filtroSair.textContent = "X";
    filtroSair.addEventListener('click', () => { root.removeChild(filtroDiv) })
    filtroDiv.appendChild(filtroSair);

    // Botão de redefinição
    var filtroReset = document.createElement('button');
    filtroReset.className = "filtroReset";
    filtroReset.textContent = "Reset";
    filtroReset.addEventListener('click', () => {

        // Resetar os selects
        filtroSelectFabricante.value = '';
        filtroSelectPais.value = '';
        filtroSelectTipo.value = '';

        // Mostrar todos os elementos
        document.querySelectorAll('[data-dados]').forEach(elemento => {
            elemento.style.display = '';
        });
    });
    filtroDiv.appendChild(filtroReset);

    document.getElementById('root').appendChild(filtroDiv);

    function criarSelect(container, opcoes, textoPadrao) {
        var filtroSelect = document.createElement("select");
        container.appendChild(filtroSelect);
        var filtroOption = document.createElement("option");
        filtroOption.value = '';
        filtroOption.textContent = textoPadrao;
        filtroSelect.appendChild(filtroOption);
        opcoes.forEach(item => {
            var filtroOption = document.createElement("option");
            filtroOption.value = item;
            filtroOption.textContent = item;
            filtroSelect.appendChild(filtroOption);
        });
        filtroSelect.addEventListener('change', () => {
            const fabricanteSelecionado = filtroSelectFabricante.value;
            const paisSelecionado = filtroSelectPais.value;
            const tipoSelecionado = filtroSelectTipo.value;

            document.querySelectorAll('[data-dados]').forEach(elemento => {
                const dadosString = elemento.getAttribute('data-dados');
                const dadosObjeto = JSON.parse(dadosString);

                const mostrar =
                    (fabricanteSelecionado === '' || dadosObjeto.fabricante === fabricanteSelecionado) &&
                    (paisSelecionado === '' || dadosObjeto.país === paisSelecionado) &&
                    (tipoSelecionado === '' || dadosObjeto.tipo === tipoSelecionado);

                if (mostrar) {
                    elemento.style.display = '';
                } else {
                    elemento.style.display = 'none';
                }
            });
        });
        return filtroSelect;
    }
}





