$(function () {
    function scrollDo() {
        var scroll=$(document).scrollTop();
        $("html,body").scrollTop(scroll+1);
        scroll=$(document).scrollTop();
        $("html,body").scrollTop(scroll-1);
    }
    $("#menu_search").click(function () {
        $("#menu_search_button").trigger("click");
    });
    $("#carousel-example-generic").find(".banner").click(function () {
        var link = $("#carousel-example-generic").find(".banner_box").find(".active").find("a").attr("href");
        window.location.href = link;
    });
    $("#carousel-example-generic").find(".banner_box").find(".banner").find("div").click(function (e) {
        e.stopPropagation();
    });
    var xmlx = $("#carousel-example-generic").find(".banner").find(".b1").find("div");
    var banner_b2 = $("#carousel-example-generic").find(".banner").find(".b2");
    var banner_b3 = $("#carousel-example-generic").find(".banner").find(".b3");
    var banner_ms = [
        [//免费验房
            "<h4>已有<strong>8341719</strong>位业主预约量房</h4>",//b2_h4
            "<span class='glyphicon glyphicon-star text-danger'></span>此服务完全免费，不会向您收取任何费用。",//b2_promiss
            "什么是免费量房？",//b3_h1
            "一键申请",//b3_h2
            "<em class='text-danger'>免费</em>量房验房",//b3_h3
            "专业仪器曲察测量，空鼓，脱皮，漏水裂经首房屋质品问题一网打尽，通过精准量房做出准确设计和报价，让装修更省钱",//b3_p
            "http://www.xmfzxw1.com"//提交地址
        ],
        [//免费设计
            "<h4>已有<strong>7891572</strong>位业主申请免费设计</h4>",//b2_h4:
            "<span class='glyphicon glyphicon-star text-danger'></span>明星设计师量房设计，修改到满意为止。",//b2_promiss:
            "什么是免费设计？",//b3_h1:
            "<em class='text-danger'>3</em>套设计方案",//b3_h2:
            "<em class='text-danger'>免费</em>PK",//b3_h3:
            "专业设计师创意大PK，比谁的设计更合意，3套设计方案全面对比，优选最佳采光和空间布局方案，可重复修改，设计到您满意为止。",//b3_p:
            "http://www.xmfzxw2.com"//提交地址
        ],
        [//免费报价
            "<h4>已有<strong>10915352</strong>位业主申请免费报价</h4>",//b2_h4:
            "<span class='glyphicon glyphicon-star text-danger'></span>装修管家严格审核，避免增项漏项。",//b2_promiss:
            "什么是免费报价？",//b3_h1:
            "<em class='text-danger'>详细</em>报价清单",//b3_h2:
            "<em class='text-danger'>公开</em>透明",//b3_h3:
            "报价清单公开透明，了解常用建材行情，避免价格陷阱，严格杜绝漏项和后期恶意增项。",//b3_p:
            "http://www.xmfzxw3.com"//提交地址
        ]
    ]
    xmlx.mouseover(function () {
        banner_b2.stop(true).show(300);
        banner_b3.stop(true).show(300);
        var index = $(this).index();
        switch (index) {
            case 0:
                banner_b3.find('span').css("background-position", "0 -274px");
                break;
            case 1:
                banner_b3.find('span').css("background-position", "0 -75px");
                break;
            case 2:
                banner_b3.find('span').css("background-position", "0 -174px");
                break;
        }
        banner_b2.find('h4').html(banner_ms[index][0]);
        banner_b2.find('.promise').html(banner_ms[index][1]);
        banner_b3.find('h1').html(banner_ms[index][2]);
        banner_b3.find('h2').html(banner_ms[index][3]);
        banner_b3.find('h3').html(banner_ms[index][4]);
        banner_b3.find('p').html(banner_ms[index][5]);
        banner_b2.find("form").attr('action', banner_ms[index][6]);
    });
    $(".banner").mouseleave(function () {
        banner_b2.stop(true).hide(500);
        banner_b3.stop(true).hide(500);
    });
    $("#banner_submit").on("click", function (e) {
        e.preventDefault();
        var name = banner_b2.find("input[name='name']").val();//姓名
        var mobile = banner_b2.find("input[name='mobile']").val();//手机
        var province = banner_b2.find("select[name='province']").find("option:selected").text();//省份
        var province_val = banner_b2.find("select[name='province']").find("option:selected").val();//省份值（用于判断）
        var city = banner_b2.find("select[name='city']").find("option:selected").text();//市区
        var city_val = banner_b2.find("select[name='city']").find("option:selected").val();//市区值（用于判断）
        var area = banner_b2.find("input[name='area']").val();//面积
        if (!name || name == "") {
            alert("请输入您的姓名");
            return false;
        }
        ;
        if (!(/^1[34578]\d{9}$/.test(mobile))) {
            alert('手机号码有误，请重填');
            return false;
        }
        ;
        if (province_val == 0) {
            alert("请选择省份");
            return false;
        }
        ;
        if (city_val == 0) {
            alert("请选择市区");
            return false;
        }
        ;
        if (!area || area == 0) {
            alert("请输入正确的平方数");
            return false;
        }
        ;
        $.ajax({
            url: banner_b2.find("form").attr('action')
        })
    });
    $("#company_area").find("li").find("a").click(function (e) {//ajax获取装修公司
        e.preventDefault();
        var url = $(this).attr("href");
        $.ajax({
            url: url,
            success: function () {
                alert("申请成功");
            }
        })
    });
    var list = $("#owner_list");
    function t() {
        list.animate({
            "margin-top": "-45px"
        }, 500, function () {
            list.find('li').eq(0).appendTo(list);
            list.css("margin-top", "0");
        });
    };
    var timer = setInterval(function () {
        t();
    }, 2000);
    list.mouseenter(function () {
        console.log(1);
        clearInterval(timer);
    });
    list.mouseleave(function () {
        timer = setInterval(function () {
            t();
        }, 2000);
    });
    //用户列表滚动
    var myModal_content = $("#myModal").find(".modal-content").find(".modal-body").find("p");
    $("#apply_submit").on("click", function (e) {
        e.preventDefault();
        var apply = $("#apply");
        var name = apply.find("input[name='apply_name']").val();
        var mobile = apply.find("input[name='apply_mobile']").val();
        var service = apply.find("select[name='apply_service']").find("option:selected").text();
        var content = "";
        if (!name || name == "") {
            content = "请输入您的姓名";
            myModal_content.text(content);
            $('#myModal').modal();
            return false;
        }
        ;
        if (!(/^1[34578]\d{9}$/.test(mobile))) {
            content = "手机号码有误，请重填";
            myModal_content.text(content);
            $('#myModal').modal();
            return false;
        }
        ;
        var url = $("#apply").attr("action");
        console.log(url);
        $.ajax({
            url: url,
            success: function () {
                content = "申请成功";
                myModal_content.text(content);
                $('#myModal').modal();
            }
        })
    });
    $("#picture_type_control").find("ul").find("li").find("a").click(function(e) {
        e.preventDefault();
        $(this).addClass('active').parent().siblings().find('a').removeClass('active').parent().parent().siblings('ul').find('li').find("a").removeClass('active');
        var href=$(this).attr('href');
        $.ajax({
            url:href,
            type:'post',
            success:function(){

            },
            error:function(){

            }
        })
    });
    //效果图切换
    $("#fitment_menu").find("div").click(function () {
        var index=$(this).index();
        $(this).addClass("active").siblings('div').removeClass("active");
        var fitment_main=$(".fitment_main").find(".in_main");
        fitment_main.eq(index).show().siblings(".in_main").hide();
        scrollDo();
    });//学装修切换
    var footer_down_ul=$(".footer_down").find("ul");
    $("#footer_type_control").find("span").click(function () {
       var index=$(this).index();
       $(this).addClass("active").siblings("span").removeClass("active");
       footer_down_ul.eq(index).show().siblings("ul").hide();
    });
    $("img").lazyload({effect: "show"});//图片懒加载 图片不添加src属性，添加data-original属性为src的值即可。
    new WOW().init();
});