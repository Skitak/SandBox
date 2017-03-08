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
                } else
                    $("#error").fadeIn("slow", function () {
                        $("#error").delay(2000).fadeOut("slow")
                    });
            },

            error: function (data) {
                alert(data);
            }
        });
        return false;
    })


});
