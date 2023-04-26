<?php
// obter conexão com o db
include('conexao.php');

// obter os dados
$obterDados = file_get_contents('php://input');

// extrair os dados 
$extrair = json_decode($obterDados);

// separar os dados do Json
$idCurso = $extrair->cursos->idCurso;
$nomeCurso = $extrair->cursos->nomeCurso;
$valorCurso = $extrair->cursos->valorCurso;

// sql [como nomeCurso ser uma string, é bom colocar entre apostrofe]
$sql = "UPDATE cursos SET nomeCurso='$nomeCurso', valorCurso=$valorCurso WHERE idCurso = $idCurso";
// executa a query
mysqli_query($conexao, $sql);

// exportar os dados cadastrados
// aqui será exportado um objeto jason com os dados do curso, possivelmente para validação?
// não entendi bem esta parte
$curso = [
    'idCurso' => $idCurso,
    'nomeCurso' => $nomeCurso,
    'valorCurso' => $valorCurso
];
json_encode(['curso']=>$curso);

?>