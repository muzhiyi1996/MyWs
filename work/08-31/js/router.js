


$(function(){


    $("#essay").load("../index/index-essay.html")



    //切换
    $(".three").click(function() {

        $("#essay").load($(this).data("page"))

    })
    // $("#seven").click(function() {
    //     $("#title").hide();
    //     $("#essay").load("solve.html");
    //
    // })


})