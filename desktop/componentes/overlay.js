
// Fetch dos dados da api do overlay
const fetchOverlay = async (id_overlay) => {

    const response = await fetch(`http://localhost/MUVIN/backend/api_overlay.php?id=${id_overlay}`);
    const result = await response.json();
    return result;

};



// Criação do overlay
function overlay(dataId) {

    fetchOverlay(dataId).then((data) => {

        // Pegando os DOM overlay
        var overlay = document.getElementById('overlay');
        var overlayImagemDiv = document.getElementById('overlayImagemDiv');
        var overlayCloseButton = document.getElementById('overlayCloseButton')
        var overlayContent = document.getElementById('overlayContent')

        // Lógica do fechamento do overlay
        overlayCloseButton.addEventListener('click', () => {

            document.body.removeChild(divConfigOverlay)
            overlay.removeChild(buttonConfigOverlay)

            overlay.style.display = "none";
            overlayContent.textContent = null;
            while (overlayImagemDiv.firstChild) {
                overlayImagemDiv.removeChild(overlayImagemDiv.firstChild);
            }
        })

        // Lógica da abertura do overlay
        overlay.style.display = "block";

        for (let i = 0; i < data.urls.length; i++) {

            // Criação das imagens
            var overlayImagem = document.createElement("img");
            overlayImagem.id = `imagem${i}`;
            overlayImagem.src = data.urls[i]
            overlayImagem.className = "overlayImagem"
            overlayImagem.style['z-index'] = i;

            overlayImagemDiv.appendChild(overlayImagem);


        }

        for (var chave in data) {
            if (chave != 'urls' && chave != 'id') {
                var div = document.createElement("div");
                div.textContent = chave + ": " + data[chave];
                overlayContent.appendChild(div);
            }
        }


        let divConfigOverlay = document.createElement("div")
        divConfigOverlay.className = 'divConfigOverlay'
        divConfigOverlay.innerHTML = `
        <button id="closeConfigOverlay">X<button>

        <p>Cor do overlay:</p>
        <input type="color" id="colorOverlay" name="colorOverlay" value="#3c7891">

    `;
        divConfigOverlay.style.display = 'none';
        document.body.appendChild(divConfigOverlay);

        let buttonConfigOverlay = document.createElement("button")
        buttonConfigOverlay.className = 'ConfigOverlayButton'
        buttonConfigOverlay.addEventListener("click", openConfigOverlay);
        overlay.appendChild(buttonConfigOverlay)

        function openConfigOverlay() {
            divConfigOverlay.style.display = 'block'
        }

        // Fontes e Paletas dinamicas overlay:

        // Função para aumentar o tamanho da fonte
        function fontesPlusFunction() {
            let root = document.documentElement;
            let currentSize = parseFloat(getComputedStyle(root).getPropertyValue('--fonte-overlay'));
            root.style.setProperty('--fonte-overlay', `${currentSize + 2}px`);
        }

        // Função para diminuir o tamanho da fonte
        function fontesMinusFunction() {
            let root = document.documentElement;
            let currentSize = parseFloat(getComputedStyle(root).getPropertyValue('--fonte-overlay'));
            root.style.setProperty('--fonte-overlay', `${currentSize - 2}px`);
        }

        // Function to close the configuration overlay
        function closeConfigOverlay() {
            divConfigOverlay.style.display = 'none';
        }
        document.getElementById("closeConfigOverlay").addEventListener("click", closeConfigOverlay);

        // Cria o botão para diminuir a fonte
        let fontesPlus = document.createElement("button");
        fontesPlus.className = "fontesPlus";
        fontesPlus.textContent = "+";
        fontesPlus.onclick = fontesPlusFunction;
        divConfigOverlay.appendChild(fontesPlus);

        // Cria o botão para diminuir a fonte
        let fontesMinus = document.createElement("button");
        fontesMinus.className = "fontesMinus";
        fontesMinus.textContent = "-";
        fontesMinus.onclick = fontesMinusFunction;
        divConfigOverlay.appendChild(fontesMinus);

        const colorOverlay = document.getElementById('colorOverlay');
        colorOverlay.addEventListener('input', function () {
            let root = document.documentElement;
            root.style.setProperty('--cor-overlay', colorOverlay.value);
        });


    })

}

