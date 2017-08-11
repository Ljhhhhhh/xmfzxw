$(document).ready(function () {
    var menu = $('.case_zxal').find('.menu');
    var top = menu.offset().top;
    $(document).scroll(function () {
        var winTop = $(document).scrollTop();
        if (winTop > top) {
            menu.animate({top: winTop - top + 20}, 10)
        } else {
            menu.animate({top: 0}, 10)
        }
    });
});