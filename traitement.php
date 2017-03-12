<?php


// on se connecte à notre base de données

try

{

    $bdd = new PDO('mysql:host=localhost;dbname=chat', 'root', '');

}

catch (Exception $e)

{

    die('Erreur : ' . $e->getMessage());

}


if(isset($_POST['submit'])){ // si on a envoyé des données avec le formulaire


    if(!empty($_POST['login']) AND !empty($_POST['text'])){ // si les variables ne sont pas vides

    

        $login = $_POST['login'];

        $text = $_POST['text']; // on sécurise nos données


        // puis on entre les données en base de données :

        $insertion = $bdd->prepare('INSERT INTO message VALUES("", :login, :text)');

        $insertion->execute(array(

            'login' => $login,

            'text' => $text

        ));


    }

    else{

        echo "Vous avez oublié de remplir un des champs !";

    }


}


?>

