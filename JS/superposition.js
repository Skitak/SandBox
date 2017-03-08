var blocs;

$(function () {
    blocs = $(".bloc").draggable({
        start : function( event, ui ) {
        blocs.css("z-index", "0");
        ui.helper.css("z-index", "1");
    }});
 });