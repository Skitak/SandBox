

$(function () {
    $('#envoi').click(function(e){
        e.preventDefault(); // on empêche le bouton d'envoyer le formulaire


        var pseudo = encodeURIComponent( $('#pseudo').val() ); // on sécurise les données

        var message = encodeURIComponent( $('#message').val() );


        if(pseudo != "" && message != ""){ // on vérifie que les variables ne sont pas vides

            $.ajax({

                url : "traitement.php", // on donne l'URL du fichier de traitement

                type : "POST", // la requête est de type POST

                data : "pseudo=" + pseudo + "&message=" + message // et on envoie nos données

            });


           $('#messages').append("<p>" + pseudo + " dit : " + message + "</p>"); // on ajoute le message dans la zone prévue

        }

    });
});

function charger(){
    setTimeout( function(){
        var premierID = $('#messages p:first').attr('id'); // on récupère l'id le plus récent
        $.ajax({
            url : "charger.php?id=" + premierID, // on passe l'id le plus récent au fichier de chargement
            type : GET,
            success : function(html){
               $('#messages').prepend(html);
            }
        });
        charger();
    }, 5000);
}

charger();
 /*$(function () {
       $('#majPremier').click(function () {
           $('#premier').load('bonjour.php');
       });

       $('#action').click(function () {//Comme le prof le voulait
           $.ajax({
               type: 'GET',
               url: 'bonjour.php',
               timeout: 3000,
               success: function (data) {
                   alert(data);
               },
               error: function () {
                   alert('La requête n\'a pas abouti');
               }
           });
       });
   });*/

 //Leaflet et mapquest dans l'ordre.
 //Leaflet est une api de haut niveau pour afficher des maps en json.
 //Mapquest est une api au dessus de leaflet, et permet de créer des parcours.
