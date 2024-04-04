<?php
/**
 * Caminho da imagem é definido em constante no Banco de Dados no inicio do arquivo
 */
require_once(realpath(__DIR__ . "/admin/Persistencia/BancoDeDados.php"));

$banco_de_dados = new BancoDeDados();
$lista_componentes = $banco_de_dados->lista_valores_campos_filtro("pais");
echo json_encode($lista_componentes, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE ) ;