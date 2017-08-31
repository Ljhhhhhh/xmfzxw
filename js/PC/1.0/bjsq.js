$(document).ready(function () {
    $("#zxzl em").click(function () {
        $(this).addClass('on').siblings().removeClass("on");
    });
    $("#zxdc em").click(function () {
        $(this).addClass('on').siblings().removeClass("on");
    });
    $("#form-btn").click(function () {
        $("span.tishi").hide();
        var flag = 0;
        if (!$("#zxzl em").hasClass("on")) {
            flag = 1;
            $("#zxzl").find("span.tishi").css("display", "block");
        } else {
            var zxzl = $("#zxzl em.on").text();
        };
        if (!$("#zxdc em").hasClass("on")) {
            flag = 1;
            $("#zxdc").find("span.tishi").css("display", "block");
        } else {
            var zxdc = $("#zxdc em.on").text();
            var province = $("#province option:selected").text();

        }
        ;
        if (province == "" || province == 0 || province == null || province == "选择省份") {
            flag = 1;
            $("#szcs").find("span.tishi").css("display", "block");
        } else {
            var city = $("#city option:selected").text();
            var G_provinceID = $("#provinceDiv").val();
        }
        ;
        if (city == "" || city == 0 || city == null || city == "选择市区") {
            flag = 1;
            $("#szcs").find("span.tishi").css("display", "block");
        } else {
            var area = $("#area option:selected").text();
            var G_cityID = $("#cityDiv").val();
        }
        ;

        if (area == "" || area == 0 || area == null || area == "选择地区") {
            flag = 1;
            $("#szcs").find("span.tishi").css("display", "block");
        } else {
            var G_areaID = $("#countyDiv").val();
        }
        ;

        if (!$("#zxmj input").val()) {
            flag = 1;
            $("#zxmj").find("span.tishi").css("display", "block");
        } else {
            var mianji = $("#zxmj input").val();

        }
        ;//姓名验证正则

        // var patrn = /^\s*[\u4e00-\u9fa5]{1,15}\s*$/;
        var patrn = /[\u4e00-\u9fa5a-zA-Z]{1,15}/;//验证中英文
        if (!patrn.exec($("#xm input").val())) {
            flag = 1;
            $("#xm").find("span.tishi").css("display", "block");
        } else {
            var xm = $("#xm input").val();
        }
        ;


        if (!(/^1[34578]\d{9}$/.test($("#sjhm input").val()))) {
            flag = 1;
            $("#sjhm").find("span.tishi").css("display", "block");
        } else {
            var sjhm = $("#sjhm input").val();
        }
        ;

        if (flag == 1) {
            return false;
        }

        var money = null;
        var RG = 0.58;
        var CL = 0.42;
        if (zxzl == "家装") {
            if (zxdc == "简装") {
                money = 588;
                G_DC = 1;
            }
            ;
            if (zxdc == "精装") {
                money = 688;
                G_DC = 2;
            }
            ;
            if (zxdc == "豪装") {
                money = 888;
                G_DC = 3;
            }
            ;
            var G_lx = 1;
        } else if (zxzl == "公装") {
            if (zxdc == "简装") {
                money = 498;
                G_DC = 1;
            }
            ;
            if (zxdc == "精装") {
                money = 698;
                G_DC = 2;
            }
            ;
            if (zxdc == "豪装") {
                money = 1080;
                G_DC = 3;
            }
            ;
            var G_lx = 2;
        }
        var total = (money * mianji / 10000).toFixed(1);
        $("#total").text(total);
        $("#cl").text((money * mianji * CL).toFixed(0));
        $("#rg").text((money * mianji * RG).toFixed(0));
        $("#sj").text("0");
        $(".jieguo .shuoming").slideDown(1000);
        $("#zxbtn").slideDown(1000);

        var G_Input = $("#form-btn").attr('rel');
        var G_province = $("#province").val();
        var G_city = $("#city").val();
        var G_area = $("#are").val();
        var G_mianji = mianji;
        var G_xm = xm;
        var G_tel = sjhm;
        var G_AjaxURL = $("#ajaxUrl").val();
        var G_ThisURL = $("#thisUrl").val();
        if (G_Input == 1) {
            $("#form-btn").attr('rel', 2);
            //$("#sjhm").hide();
            $.ajax({
                url: G_AjaxURL + "?" + new Date().getTime(),
                data: {lx: G_lx, dc: G_DC, ProvinceID: G_provinceID, CityID: G_cityID, AreaID: G_areaID, mianji: G_mianji, cname: G_xm, tel: G_tel, ThisUrl: G_ThisURL},
                //data : {lx: lx},
                type: 'post',
                success: function (res) {
                    if (res == 'succ') {

                    } else {
                        //todo false
                    }
                }
            });
        }
    });

    setInterval(function () {
        var lih = parseInt($("#ysgd ul li").height());
        var ult = parseInt($("#ysgd ul").css("top"));
        var sygd = parseInt($("#ysgd ul").height()) - (-ult);
        $("#ysgd ul").animate({
            "margin-top": -lih
        }, function () {
            $("#ysgd ul li").eq(0).appendTo($("#ysgd ul"));
            $("#ysgd ul").css("margin-top", "0px");
        });
    }, 3000);
    $("#qubie").click(function () {

    });
});
