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
        // $(".footer-left ul").eq(index).css("display","block").siblings("ul").css("display","none");
        $(".footer-left ul").eq(index).stop(true).slideDown(500).siblings("ul").stop(true).slideUp(500);
    });
//     function click() {
//         return false;
//     }
//
//     function click1() {
//         if (event.button == 2) {
//             return false;
//         }
//     }
//
//     function CtrlKeyDown() {
//         if (event.ctrlKey) {
//             return false;
//         }
//     }
//     document.onkeydown = CtrlKeyDown;
//     document.onselectstart = click;
//     document.onmousedown = click1;
 })