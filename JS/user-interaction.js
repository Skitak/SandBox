var i = 10; 

$(function () {
     $('.button').click(function () {
         --i;
         if (i >= 0)
             $('.compteur').text(i);
         if (i == 0){
             $("p:nth-child(3)").text("tadaaaa");
             $("p:nth-child(5)").css('display', 'none');
             $("#surprise").css('display', 'block');
             $("button").css('display', 'none');
         }
     });
 });

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
