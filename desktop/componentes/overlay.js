
// Fetch dos dados da api do overlay
const fetchOverlay = async (id_overlay) => {

    const response = await fetch(`http://localhost/MUVIN/backend/api_overlay.php?id=${id_overlay}`);
    const result = await response.json();
    return result;

};



function overlay(dataId) {

/*    document.getElementById('overlay').style.display = "block"; */

    fetchOverlay(dataId).then((data) => {
        console.log(data)
    })

}

