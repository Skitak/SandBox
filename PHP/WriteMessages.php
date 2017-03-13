<?php

$user = $_GET["user"];
$message = $_GET["message"];

    $bdd = new PDO('mysql:host=localhost;dbname=PW;charset=utf8', 'root', '');
    $query = $bdd->prepare("insert into message(message,pseudo) values (?,?)");
    $query->bindParam(1,$message);
    $query->bindParam(2,$user);
    $query->execute();

?>
