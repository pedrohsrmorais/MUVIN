// Substitua a URL abaixo pela URL real da API que você deseja acessar
const apiUrl = 'http://localhost/MUVIN/backend/api_linhaTempo.php';

// Fazendo uma requisição GET para a API usando o Fetch
fetch(apiUrl)
  .then(response => {
    // Verifica se a resposta da API está ok (status 200-299)
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    // Converte a resposta para JSON
    return response.json();
  })
  .then(data => {
    // Faça algo com os dados obtidos da API
    console.log(data);
  })
  .catch(error => {
    // Trata erros de requisição
    console.error('Erro na requisição:', error);
  });

  

var linhaTempo = 

`<div>
    <h1>Linha do Tempo</h1>
</div>`;