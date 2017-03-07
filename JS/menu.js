 $(function () {
     $('nav li:nth-child(1)').click(function () {
         $('section').load("blocs.html");
     });

     $('nav li:nth-child(2)').click(function () {
         $('section').load('echange-client-serveur.html');
     });
     $('nav li:nth-child(3)').click(function () {
         $('section').load('json.html');
     });

     $('nav li:nth-child(4)').click(function () {
         $('section:first-child').load('echange-php.html');
     });

     $('nav li:nth-child(5)').click(function () {
         $('section').load('carte.html');
     });

     $('nav li:nth-child(6)').click(function () {
         $('section').load('superposition.html');
     });

     $('nav li:nth-child(7)').click(function () {
         $('section').load('user-interaction.html');
     });
 });
