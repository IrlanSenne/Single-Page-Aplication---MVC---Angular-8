<?php

require 'connect.php';
error_reporting(E_ERROR);
$tb_alunos = [];
$sql = "SELECT * FROM tb_alunos";

if($result = mysqli_query($con, $sql)){
    $cr = 0;
    while($row = mysqli_fetch_assoc($result)){
        $tb_alunos[$cr]['cd_aluno'] = $row['id'];
        $tb_alunos[$cr]['endereco'] = $row['endereco'];
        $tb_alunos[$cr]['estado'] = $row['estado'];
        $tb_alunos[$cr]['nome'] = $row['nome'];
        $cr++;
    }
    echo json_encode($tb_alunos);
   // print_r($tb_alunos);
}else{
    http_response_code(404);
}

?>