$(document).ready(function () {
    $(".moremenubtn").mouseover(function () {
        $(this).next().stop(true).slideDown(200);
    });
    $(".moremenubtn").mouseout(function () {
        $(this).next().stop(true).slideUp(200);
    });
    $(".moremenubox").mouseover(function () {
        $(this).prev().trigger('mouseover')
    });
    $(".moremenubox").mouseout(function () {
        $(this).prev().trigger('mouseout')
    });
    
    
//    Swiper 
var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
    /*banner*/
    /*精品专题动画*/
    $("#next").click(function () {
        var jpztshow = $(".jpztbox .jpztshow");
        var index = $(".jpztbox .on").index();
        if (index < jpztshow.length - 1) {
            $(jpztshow[index + 1]).addClass("on").siblings(".jpztshow").removeClass("on");
        } else {
            $(jpztshow[0]).addClass("on").siblings(".jpztshow").removeClass("on");
        }
    });
    $("#pre").click(function () {
        var jpztshow = $(".jpztbox .jpztshow");
        var index = $(".jpztbox .on").index();
        if (index == 0) {
            $(jpztshow[jpztshow.length - 1]).addClass("on").siblings(".jpztshow").removeClass("on");
        } else {
            $(jpztshow[index - 1]).addClass("on").siblings(".jpztshow").removeClass("on");
        }
    });
    /*精品专题动画*/
    $("#mtlx span").mouseover(function () {
        $(this).addClass("on").siblings().removeClass("on");
        var index = $(this).index();
        var jxmtlist = $(".jxmt .jxmtlist");
        $(jxmtlist[index]).stop(true).slideDown(500).siblings(".jxmtlist").stop(true).slideUp(500);
    });
    /*精选美图*/
    $('#a').rollSlide({
        orientation: 'left',
        num: 1,
        v: 1000,
        space: 3000,
        isRoll: false
    });
    $('#b').rollSlide({
        orientation: 'right',
        num: 2,
        v: 1500,
        space: 3000,
        isRoll: true
    });
    $('#c').rollSlide({
        orientation: 'top',
        num: 1,
        v: 1500,
        //space: 500,
        isRoll: true
    });
    $('#d').rollSlide({
        orientation: 'bottom',
        num: 3,
        v: 1500,
        space: 1000,
        isRoll: true
    });
    $('#e').rollNoInterval().left();
    $('#f').rollNoInterval().right();
    $('#g').rollNoInterval().top();
    $('#h').rollNoInterval().bottom();
    /*局部之美*/
    $("#jjfgcontrol .next").click(function () {
        var lis = $("#jjfglist").find("li").length;
        var lisw = $($("#jjfglist").find("li")[0]).width() + 10;
        var maxl = -(lisw * (lis - 1) - 10 - 1200);
        var ull = parseInt($("#jjfglist").css("left"));
        if (!$("#jjfglist").is(":animated")) {
            if (ull > maxl) {
                $("#jjfglist").stop().animate({
                    "left": ull - lisw + 'px'
                }, 500);
            } else {
                $("#jjfglist").stop().animate({
                    "left": '0px'
                }, 500);
            }
        }
    });
    $("#jjfgcontrol .pre").click(function () {
        var lis = $("#jjfglist").find("li").length;
        var lisw = $($("#jjfglist").find("li")[0]).width() + 10;
        var maxl = -(lisw * (lis - 1) - 10 - 1200);
        var ull = parseInt($("#jjfglist").css("left"));
        if (!$("#jjfglist").is(":animated")) {
            console.log(ull);
            if (ull >= -3) {
                $("#jjfglist").stop().animate({
                    "left": maxl + 'px'
                }, 500);

            } else {
                $("#jjfglist").stop().animate({
                    "left": ull + lisw + 'px'
                }, 500);
            }
        }
    });
    /*家居风格*/
    var timer = null;
    var flagg = 0;

    function gzxgt() {
        clearInterval(timer);
        var lis = $("#gzxgtgd ul li").length - 4;
        timer = setInterval(function () {
            var ull = parseInt($("#gzxgtgd ul").css("left"));
            var liw = $($("#gzxgtgd ul li")[0]).width();
            if (flagg >= lis) {
                $("#gzxgtgd ul").animate({
                    "left": '0px'
                }, 600);
                flagg = 0;
                return;
            } else {
                $("#gzxgtgd ul").animate({
                    "left": ull - liw - 10 + 'px'
                }, 300);
            }
            ++flagg;
            return flagg;
        }, 2000);
    }
    gzxgt();
    $("#gzxgtgd").mouseover(function () {
        clearInterval(timer);
    });
    $("#gzxgtgd").mouseout(function () {
        gzxgt();
    });
    /*公装效果图*/
})
