$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $("header").addClass("sc1");
            $("header p").addClass("sc1");
        } else {
            $("header").removeClass("sc1");
            $("header p").removeClass("sc1");
        }
        if ($(this).scrollTop() > 290) {
            $("nav").addClass("sc2");
            $("header p").addClass("sc2");
            console.log($(this).scrollTop() +"   True   "+$("header p").css("display"));
        } else {
            $("nav").removeClass("sc2");
            $("header p").removeClass("sc2");
        }
    });
});