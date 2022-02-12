$(function() {
    $(".carousel").carousel( { interval: 6000, pause: "false" } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    })
    //reserve
    $("#reserveButton").on("click", function () {
        $("#reserveModal").modal("toggle");
    });

    //reserve
    $("#loginButton").on("click", function () {
        $("#loginModal").modal("toggle");
    });

    //reserve
    $("#donateButton").on("click", function () {
        $("#donateModal").modal("toggle");
    });
});