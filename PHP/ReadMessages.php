<?php

header('Content-type: application/json');
    try{
        
$bdd = new PDO('mysql:host=localhost;dbname=PW;charset=utf8', 'root', '');
        $rep = $bdd->prepare("SELECT * FROM message ORDER BY date_envoie DESC limit 10");
        $rep->execute();
        $array = $rep->fetchAll(PDO::FETCH_ASSOC);
        $json=json_encode($array);
        echo $json;
    }
    catch (Exception $e){
        echo $e;
    }


?>
