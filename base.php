<?php
	$abonnes = array(
					array("name" => "Gimenez", "firstname" => "Renan", "mail" => "renan.gimenez@etu.parisescartes.fr"),
					array("name" => "Bouquin", "firstname" => "Bastien", "mail" => "bastien.bouquin@etu.parisescartes.fr"),
					array("name" => "Illié", "firstname" => "Jean-Michel", "mail" => "jean-michel.illie@parisescartes.fr"),
	           );
	
	function getAbonnes(){
		return json_encode($abonnes);
	}
	
	function addAbonnes($name, $firstname, $mail){
		array("name" => $name, "firstname" => $firstname, "mail" => $mail);
	}
?>