
// Fetch dos dados da api do overlay
const fetchOverlay = async (id_overlay) => {

    const response = await fetch(`http://localhost/MUVIN/backend/api_overlay.php?id=${id_overlay}`);
    const result = await response.json();
    return result;

};



function overlay(dataId) {



    fetchOverlay(dataId).then((data) => {
        console.log(data)

        // Pegando os DOM overlay
        var overlay = document.getElementById('overlay');
        var overlayImagem = document.getElementById('overlayImagem');
        var overlayCloseButton = document.getElementById('overlayCloseButton')
        var overlayContent = document.getElementById('overlayContent')

        overlayCloseButton.addEventListener( 'click', ()=>{overlay.style.display = "none";})
        overlay.style.display = "block";

        overlayContent.textContent = JSON.stringify(data);
        overlayImagem.src = data.urls[0];


    })

}

