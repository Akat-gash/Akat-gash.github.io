"use strict";

$(document).ready(function () {

    // var start = $("#start");
    // var end = $("#end");
    // var maze = $("#maze");
    // var boundary = $(".$(".boundary")");
    var gameStart = false;


    $("#start").click(function () {
        $("#status").text('Move mouse from "S" to "E" without touching the walls in order to win ');
        gameStart = true;
        if ($(".boundary").hasClass('youlose')) {
            $(".boundary").removeClass('youlose');
        }
        $(".boundary").mousemove(function () { loss(); })
        $("#maze").mouseleave(function () { loss() });
    });

    $("#end").mousemove(function () {
        if (gameStart == true) won();
        else if (gameStart && $(".boundary").hasClass('youlose')) loss();

    });

    function won() {
        // alert("You win! :]");
        gameStart = false;
        $("#status").text("You win! :]");
    }

    function loss() {

        if (gameStart) {
            gameStart = false;
            $(".boundary").addClass('youlose');
            $("#status").text('Sorry, you lost. :[');
        }
    }
})