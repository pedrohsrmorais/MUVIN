
var contato =
`
  <div class="formularioContato">
  
    <form action="/">

      <label for="nome" class='contatoLabel'> Nome </label>
      <input class='contatoInput' type="text" id="nome" name="nome" placeholder="Seu nome...">

        <label for="email" class='contatoLabel'> Email </label>
        <input class='contatoInput' type="text" id="nome" name="email" placeholder="exemplo@exemplo.com.br">

          <label for="objetivo" class='contatoLabel'> Objetivo do contato </label>
          <select id="objetivo" name="objetivo">
            <option value="doacao"> Doação </option>
            <option value="exposicao">Pedido de exposição</option>
            <option value="outro">Outro</option>
          </select>

          <label for="descricao" class='contatoLabel'>Explique o motivo do seu contato:</label>
          <textarea id="descricao" name="descricao" placeholder="Escreva algo..."></textarea>
          <input type="submit" value="enviar">

    </form>

  </div>`;
