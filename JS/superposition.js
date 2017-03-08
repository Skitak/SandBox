var blocs;

$(function () {
    blocs = $(".bloc").draggable({
        start: function (event, ui) {
            blocs.css("z-index", "0");
            ui.helper.css("z-index", "1");
        }
    });
    blocs.click(function () {
        blocs.css("z-index", "0");
        $(this).css("z-index", "1");
        var R = Math.floor((Math.random() * 256));
        var G = Math.floor((Math.random() * 256));
        var B = Math.floor((Math.random() * 256));
        $(this).css("background-color", "rgb(" + R + "," + G + "," + B + ")" );
        $(this).css("box-shadow", "0px 0px 50px rgb(" + R + "," + G + "," + B + ")" );
    })
});
