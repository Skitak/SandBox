  $(function () {
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
  });

  //Leaflet et mapquest dans l'ordre.
  //Leaflet est une api de haut niveau pour afficher des maps en json.
  //Mapquest est une api au dessus de leaflet, et permet de créer des parcours.
