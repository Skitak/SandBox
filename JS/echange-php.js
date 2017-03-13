var blocs;
var user = "";
$(function () {
    $("#messageInput").prop('disabled', true);

    $("form input[type=text]").focus();
    $("input[type=submit]").click(function () {

        $.ajax({
            type: 'POST',
            dataType: "text",
            url: $("form").attr('action'),
            data: jQuery.param({
                Login: $("#Login").val(),
                Password: $("#Password").val()
            }),
            success: function (data) {
                if (data == "Ok") {
                    $("form").css('display', 'none');
                    $("#messageInput").prop('disabled', false);
                    $("#chat").css('display', 'flex');
                    showMessages();
                } else {
                    alert(data);
                    $("#error").fadeIn("slow", function () {
                        $("#error").text(data);
                        $("#error").delay(2000).fadeOut("slow")
                    });
                }
            },
            error: function (data) {
                alert("Error");
            }
        });
        return false;
    });
    $("#messageInput").keypress(function (e) {
        if (e.which == 13 && $("#messageInput").val() != "") {
            registerMessage();
        }
    });


});

function showMessages() {
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: "PHP/ReadMessages.php",
        success: function (data) {
            var div = $("#messages");
            div.html("");
            var i = 0;
            while (typeof data[i] !== "undefined"){
                div.append("<p><em>" + data[i].pseudo + "</em> - " + data[i].message + "</p>");
                ++i;
            }
            
            setTimeout(showMessages,5000);
        },
        error: function (e) {
            alert("pb when reading messages");
        }

    });
}

function registerMessage(){
    $.ajax({
        type : 'GET',
        dataType: "text",
        url : "PHP/WriteMessages.php",
        data : jQuery.param( {
                user : $("#Login").val(),
                message : $("#messageInput").val()}),
        success : function(data){
            showMessages();
            $("#messageInput").val("");
        },
        error : function(e){
            alert("pb when writing message");
        }
        
    });
}
