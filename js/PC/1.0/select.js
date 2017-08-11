$(document).ready(function() {
    $('.my-select').click(function(e) {
        $('.my-select').find('ul').hide();
        $(this).find('ul').show();
        e.stopPropagation();
    });
    $('.my-select li').click(function(e) {
        var val = $(this).text();
        $(this).parents('.my-select').find('input').val(val);
        $('.my-select ul').hide();
        e.stopPropagation();
    });
    $(document).click(function() {
        $('.my-select ul').hide();
    });
    $(".form-p i.schedule_control em").click(function() {
        var index = $(this).index("em");
        var ems = $(".form-p i.schedule_control em");
        ems.removeClass("on");
        for (var i = 0; i < index + 1; i++) {
            ems.eq(i).addClass("on");
        }
    });
})