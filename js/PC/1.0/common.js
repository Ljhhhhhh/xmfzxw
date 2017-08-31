$(document).ready(function(){
    $(".header-nav>ul>li").mouseover(function(){
        $(this).find("ul").stop(true).slideDown(500);
    });
    $(".header-nav>ul>li").mouseout(function(){
        $(this).find("ul").stop(true).slideUp(500);
    });
    $("#wxewm").mouseover(function(){
        $(this).next().stop(true).slideDown(500);
    });
    $("#wxewm").mouseout(function(){
        $(this).next().stop(true).slideUp(500);
    });
    $(".footer-left ul").eq(0).css("display","block");
    $(".footer-left p span").mouseover(function(){
        $(this).addClass("on").siblings().removeClass("on");
        var index=$(this).index();
        $(".footer-left ul").eq(index).stop(true).slideDown(500).siblings("ul").stop(true).slideUp(500);
    });
 })