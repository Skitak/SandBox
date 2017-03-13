<?php

$pass = $_POST["Password"];
$user = $_POST["Login"];


try{
//$bdd = mysqli_connect($host_name, $user_name, $password, $database);
    $bdd = new PDO('mysql:host=localhost;dbname=PW;charset=utf8', 'root', '');
    $rep = $bdd->query("SELECT * FROM utilisateur WHERE Username = '" . $user . "'");
    if ($rep == false){
        $query = $bdd->prepare("insert into utilisateur(Username,Password) values (?,?)");
        $query->bindParam(1,$user);
        $query->bindParam(2,$pass);
        $query->execute();
        echo("Ok");
    }
        
    else{
        $data = $rep->fetch();
        if ($data["Password"] !== $pass){
            echo "Le mot de pass est incorrect.";
        } else echo "Ok";
    }
}
catch (Exception $e){
    echo $e;
}
?>
