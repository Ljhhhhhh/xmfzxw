$(document).ready(function () {
    //装修案例进度选择
    var input = $('.schedule_input').find('span').find('i');
    input.click(function(){
        var schedule_input=$(this).parent().parent();
        var this_input=schedule_input.find('span').find('i');
        var length=this_input.length;
        var index=$(this).parent().index();
        this_input.removeClass('icon-circle').addClass('icon-circle-blank');
        for(var i= 0;i<index+1;i++){
            schedule_input.find('span').eq(i).find('i').removeClass('icon-circle-blank').addClass('icon-circle');
        }
    });
});