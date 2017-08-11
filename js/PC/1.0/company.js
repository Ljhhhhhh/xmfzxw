$(document).ready(function () {
    var banner_menu = $('.banner_menu').find('ul').find('li').find('a');
    banner_menu.click(function(e){
        e.preventDefault();
       $(this).addClass('on').parent().siblings().find('a').removeClass('on');
    });
    var al_menu_btn=$(".zxal").find('.al_menu').find('li');
    al_menu_btn.click(function(){
        var jz=$('.zxal').find(".jz");
        var gz=$('.zxal').find(".gz");
        var gd=$('.zxal').find(".gd");
        var index=$(this).index();
        switch(index){
            case 0:
                jz.show();
                gz.hide();
                gd.hide();
                break;
            case 1:
                jz.hide();
                gz.show();
                gd.hide();
                break;
            case 2:
                jz.hide();
                gz.hide();
                gd.show();
                break;
        }
        var menu_banner=$('.zxal').find('.al_menu').find('.menu_border');
        $(this).addClass('on').siblings().removeClass('on');
        var left=$(this).css('left');
        menu_banner.animate({
           left:left
        },500);
    });
    $("div.left").myScroll({
        speed:100, //数值越大，速度越慢
        rowHeight:40 //li的高度
    });
});