$(document).ready(function () {
    var baojia_jg_box=$('.baojia_jg_box');
    var bj_menu_btn = $('.leibie').find('em');
    bj_menu_btn.click(function () {
        var baojia_box = $('.baojia_box');
        var index = $(this).index();
        bj_menu_btn.eq(index).addClass('on').siblings().removeClass('on');
        var bj_box = $('.baojia_box').children('ul').children('li');
        bj_box.eq(index).css('display', 'block').siblings('li').css('display', 'none');
    });
    var zxlx = $('.baojia_box').find('p.zxlx');
    var zxzl=$('.baojia_box').find('p.zxzl');
    zxlx.find('span').click(function () {
        var index = $(this).index();
        $(this).addClass('on').siblings('span').removeClass('on');
    });
    zxzl.find('span').click(function () {
        var index = $(this).index();
        $(this).addClass('on').siblings('span').removeClass('on');
    })
    var zxbj_btn = $(".zxbj_btn");
    zxbj_btn.click(function (e) {//在线报价
        $('p.tishi').css('display', 'none');
        e.preventDefault();
        var flag = true;
        var this_box = $(this).parent('form');
        var name = this_box.find('.name').val();
        var mobile = this_box.find('.mobile').val();
        var sheng = this_box.find('.sheng').val();
        var shi = this_box.find('.shi').val();
        var zxlx = this_box.find('.zxlx').find('span.on').index();
        var zxzl=this_box.find('.zxzl').find('span.on').index();
        var zxmj = this_box.find('.mianji').val();
        var patrn = /^\s*[\u4e00-\u9fa5]{1,15}\s*$/;
        if (!patrn.exec(name)) {
            this_box.find('.name').next('p.tishi').css('display', 'block');
            flag = false;
        }
        if (!(/^1[34578]\d{9}$/.test(mobile))) {
            this_box.find('.mobile').next('p.tishi').css('display', 'block');
            flag = false;
        }
        if (sheng == '选择省份' || shi == '选择市区') {
            this_box.find('.my-select').next('p.tishi').css('display', 'block');
            flag = false;
        }
        if (zxzl == -1) {
            this_box.find('.zxzl').next('p.tishi').css('display', 'block');
            flag = false;
        }
        if (zxlx == -1) {
            this_box.find('.zxlx').next('p.tishi').css('display', 'block');
            flag = false;
        }
        if (!(/^[0-9]*$/.test(zxmj)) || zxmj == '') {
            // alert(zxmj);
            this_box.find('.mianji').next().next('p.tishi').css('display', 'block');
            flag = false;
        }
        if (!flag)return false;//如果输入有误，不继续执行
        const RG=0.58;
        const CL=0.42;
        var danjia=0;
        var total=0;
        if(zxzl==0){//家装
            switch(zxlx){
                case 0: danjia=588;break;//简装
                case 1: danjia=688;break;//精装
                case 2: danjia=888;break;//豪装
            }
        }else if(zxzl==1){//公装
            switch(zxlx){
                case 0:danjia=498;break;//简装
                case 1:danjia=698;break;//精装
                case 2:danjia=1080;break;//豪装
            }
        }
        var total=(danjia*zxmj/10000).toFixed(1);//总价
        var clf=(danjia*zxmj*CL).toFixed(0);//材料费
        var rgf=(danjia*zxmj*RG).toFixed(0);//人工费
        baojia_jg_box.find('p.biaoyu').find('em.total').text(total);
        baojia_jg_box.find('.bj_jieguo').find('em.clf').text(clf);
        baojia_jg_box.find('.bj_jieguo').find('em.rgf').text(rgf);
        $('.baojia_box').css('display', 'none');
        $('.baojia_jg_box').css('display', 'block');
        // $.ajax();和后台进行交互
    });
    var mfsj_btn=$('.baojia_box').find('form').find('input.mfsj_btn');
    mfsj_btn.click(function (e) {//免费设计
        e.preventDefault();
        $('p.tishi').css('display', 'none');
        e.preventDefault();
        var flag = true;
        var this_box = $(this).parent('form');
        var name = this_box.find('.name').val();
        var mobile = this_box.find('.mobile').val();
        var sheng = this_box.find('.sheng').val();
        var shi = this_box.find('.shi').val();
        var zxlx = this_box.find('.zxlx').find('span.on').index();
        var zxzl=this_box.find('.zxzl').find('span.on').index();
        var zxmj = this_box.find('.mianji').val();
        var patrn = /^\s*[\u4e00-\u9fa5]{1,15}\s*$/;
        if (!patrn.exec(name)) {
            this_box.find('.name').next('p.tishi').css('display', 'block');
            flag = false;
        }
        if (!(/^1[34578]\d{9}$/.test(mobile))) {
            this_box.find('.mobile').next('p.tishi').css('display', 'block');
            flag = false;
        }
        if (sheng == '选择省份' || shi == '选择市区') {
            this_box.find('.my-select').next('p.tishi').css('display', 'block');
            flag = false;
        }
        if (zxzl == -1) {
            this_box.find('.zxzl').next('p.tishi').css('display', 'block');
            flag = false;
        }
        if (zxlx == -1) {
            this_box.find('.zxlx').next('p.tishi').css('display', 'block');
            flag = false;
        }
        if (!(/^[0-9]*$/.test(zxmj)) || zxmj == '') {
            // alert(zxmj);
            this_box.find('.mianji').next().next('p.tishi').css('display', 'block');
            flag = false;
        }
        if (!flag)return false;//如果输入有误，不继续执行
        $(this).css('background','#999').val('申请成功,稍后会有客服与您联系').attr('disabled','disabled').css('cursor','no-drop');
        // $.ajax();和后台交互
    });
    var zxqd_list=$('.zxqd_list');
    var zxqd_list_ul=$('.zxqd_list').find('ul');
    var lis=zxqd_list_ul.find('li').length;
    var li_allow=240-parseInt(zxqd_list_ul.css('height'));
    function zxqd() {
        var ul_top=parseInt(zxqd_list_ul.css('top'));
        if(ul_top>li_allow){
            zxqd_list_ul.animate({
                'top':ul_top-30+'px'
            },500);
        }else {
            zxqd_list_ul.animate({
                'top':'0px'
            },500);
        }


    }
    function zxqd_go() {
        setInterval(function () {
            zxqd();
        },2000);
    }
    zxqd_go();
})