<?php
// obter conexão com o db
include('conexao.php');

// obter os dados
$obterDados = file_get_contents('php://input');

// extrair os dados 
$extrair = json_decode($obterDados);

// separar os dados do Json
$idCurso = $extrair->cursos->idCurso;

// sql [como nomeCurso ser uma string, é bom colocar entre apostrofe]
$sql = "DELETE FROM cursos WHERE idCurso = $idCurso";
// executa a query
mysqli_query($conexao, $sql);

?>