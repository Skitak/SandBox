var blocs;

$(function () {
    $("#messageInput").prop('disabled', true);

    $("form input[type=text]").focus();
    $("input[type=submit]").click(function () {

        $.ajax({
            type: 'POST',
            dataType: "text",
            url: $("form").attr('action'),
            success: function (data) {
                if (data == "Ok") {
                    $("form").css('display', 'none');
                    $("#messageInput").prop('disabled', false);
                } else{
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
        //$('section').load("chat.html");
        return false;
    });


});
