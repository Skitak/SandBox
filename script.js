  $(function () {
      $('#majPremier').click(function () {
          $('#premier').load('bonjour.php');
      });

  });

  //Leaflet et mapquest dans l'ordre.
  //Leaflet est une api de haut niveau pour afficher des maps en json.
  //Mapquest est une api au dessus de leaflet, et permet de créer des parcours.
