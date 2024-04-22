
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


    })

}

