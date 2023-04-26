<?php

// incluir a conexão
include("conexao.php");

// query sql
$sql = "SELECT * FROM cursos";

// executa a query no db
$executar = mysqli_query($conexao, $sql);

// vetor para armazenar os cursos
$cursos = [];

// indice para trabalhar com o vetor
$indice = 0;

// laço
while($linha = mysqli_fetch_assoc($executar)){
    $cursos[$indice]['idCurso'] = $linha['idCurso'];
    $cursos[$indice]['nomeCurso'] = $linha['nomeCurso'];
    $cursos[$indice]['valorCurso'] = $linha['valorCurso'];

    $indice++;
}

// encapsula os dados em formato json
json_encode(['cursos'=>$cursos]);

?>