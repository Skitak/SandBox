<?php

header('Content-type: application/json');
    
try{
//$bdd = mysqli_connect($host_name, $user_name, $password, $database);
    $bdd = new PDO('mysql:host=localhost;dbname=PW;charset=utf8', 'root', '');
    $rep = $bdd->query("SELECT message, date_envoie, pseudo FROM message ORDER BY date_envoie DESC limit 10");
    $array = $rep->fetchAll(PDO::FETCH_ASSOC);
    $json=json_encode($array);
    echo $json;
}
catch (Exception $e){
    echo $e;
}

?>