<?php 

$url = "localhost";
$usuario = "root";
$senha = "";
$base = "api_proway";

$conexao = mysqli_connect($url, $usuario, $senha, $base);

// setando o codificador de caracteres para não ter problemas com caracteres especiais.
mysqli_set_charset($conexao, 'utf8');

?>
