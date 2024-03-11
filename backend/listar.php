<?php
require_once(realpath(__DIR__ . "/admin/Persistencia/BancoDeDados.php"));
require_once(realpath(__DIR__ . "/admin/Negocio/Componente.php"));
require_once(realpath(__DIR__ . "/admin/Negocio/config.php"));

function listarComponentes($filtro = null)
{
  $banco_de_dados = new BancoDeDados();
  $componentes = $banco_de_dados->listar("componente", $filtro, 'ano_fabricacao');
  $lista_componentes = [];
  $ano = "";
  foreach ($componentes as $componente)
  {
    foreach ($componente->getCampos() as $campo)
    {
      
      $auxiliar[$campo->getNome()] =  $campo->getValor();
    }
    $imagens = pegarImagens($auxiliar["id"]);
    if(isset($imagens[0]))
    {
      $auxiliar["imagem"] =  $imagens[0];
    }
    else
    {
      $auxiliar["imagem"] =  "";
    }
    $ano = $auxiliar["ano_fabricacao"];
    
    $lista_componentes[$ano][]= $auxiliar;
    unset($auxiliar);
    unset($imagens);
  }
  return $lista_componentes;
}


function mostrarInformacoes($id){
  Componente::imprimirDadosComponente($id);
}

function pegarImagens($id){
  $caminhos = [];
  $banco_de_dados = new BancoDeDados();
  $filtro = "componente_id = " . $id;

  $imagens = $banco_de_dados->listar("imagem", $filtro);

  foreach($imagens as $imagem)
  {
      $caminho = URL . "imagens/"
                  . $imagem->getCampoEspecifico("componente_id")->getValor() . "/"
                  . $imagem->getCampoEspecifico("nome")->getValor();
      $caminhos[] = $caminho;
  }
  return $caminhos;
}