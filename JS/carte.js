var i = 10;

$(function () {

    var map = L.map('map');
    map.setView([48.841500, 2.268000], 18);

    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2tpdGFrIiwiYSI6ImNqMDNtY3R0ejAwOTEzMnBscHNuZTlhZDkifQ.UZaqCfcejmuDtr5TrlSCjw', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'your.mapbox.project.id',
        accessToken: 'pk.eyJ1Ijoic2tpdGFrIiwiYSI6ImNqMDNtY3R0ejAwOTEzMnBscHNuZTlhZDkifQ.UZaqCfcejmuDtr5TrlSCjw'
    }).addTo(map);
    var marker = L.marker([48.841500, 2.268000]).addTo(map);
    marker.bindPopup("48.841500, 2.268000").openPopup();

    map.on('click', function(e){
        marker.setLatLng(e.latlng);
        marker.bindPopup(e.latlng.lat + ", " + e.latlng.lng).openPopup();
    });
});

//Leaflet et mapquest dans l'ordre.
//Leaflet est une api de haut niveau pour afficher des maps en json.
//Mapquest est une api au dessus de leaflet, et permet de créer des parcours.
