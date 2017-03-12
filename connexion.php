<?php
// Recherche dans la BDD.
//Si l'utilisateur existe, alors on vérifie son mdp.
//Sinon, on le crée.
// Adresse de la bdd : 	db672391189.db.1and1.com
// Nom d'utilisateur :  dbo672391189
// Nom de la bdd     :  db672391189
// mot de passe      :  123456789

$host_name  = "db672391189.db.1and1.com";
$database   = "db672391189";
$user_name  = "dbo672391189";
$password   = "123456789";

try{
//$bdd = mysqli_connect($host_name, $user_name, $password, $database);
$bdd = new PDO('mysql:hostname=db672391189.db.1and1.com;dbname=db672391189;charset=utf8', 'dbo672391189', '123456789');
echo "Ok";
}
catch (Exception $e){
    echo $e;
}
?>
