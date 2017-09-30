function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    }
    else {
        return getComputedStyle(obj, false)[attr];
    }
}

function startMove(obj, attr, iTarget) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var iCur = 0;

        if (attr == 'opacity') {
            iCur = parseInt(parseFloat(getStyle(obj, attr)) * 100);
        }
        else {
            iCur = parseInt(getStyle(obj, attr));
        }

        var iSpeed = (iTarget - iCur) / 1;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

        if (iCur == iTarget) {
            clearInterval(obj.timer);
        }
        else {
            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity:' + (iCur + iSpeed) + ')';
                obj.style.opacity = (iCur + iSpeed) / 100;
            }
            else {
                obj.style[attr] = iCur + iSpeed + 'px';
            }
        }
    }, 30)
}
function getByClass(oParent, sClass) {
    var aEle = document.getElementsByTagName('*');
    var i = 0;
    var aResult = [];
    for (i = 0; i < aEle.length; i++) {
        if (aEle[i].className == sClass) {
            aResult.push(aEle[i]);
        }
    }

    return aResult;
}
window.onload = function () {
    var oDiv = document.getElementById('playeimages');
    var oBtnPrev = getByClass(oDiv, 'prev')[0];
    var oBtnNext = getByClass(oDiv, 'next')[0];
    var oMarkLeft = getByClass(oDiv, 'mark_left')[0];
    var oMarkRight = getByClass(oDiv, 'mark_right')[0];

    var oSmallUl = getByClass(oDiv, 'small_pic')[0].getElementsByTagName('ul')[0];
    var aSmallLi = oSmallUl.getElementsByTagName('li');
    var oBigUl = getByClass(oDiv, 'big_pic')[0];
    var aBigLi = oBigUl.getElementsByTagName('li');
    var iNow = 0;
    var iMinZindex = 2;
    var i = 0;
    oSmallUl.style.width = aSmallLi.length * aSmallLi[0].offsetWidth + 'px';
    //上面的左右按钮
    oBtnPrev.onmouseover = oMarkLeft.onmouseover = function () {
        startMove(oBtnPrev, 'opacity', 100);
    }
    oBtnPrev.onmouseout = oMarkLeft.onmouseout = function () {
        startMove(oBtnPrev, 'opacity', 0);
    }
    oBtnNext.onmouseover = oMarkRight.onmouseover = function () {
        startMove(oBtnNext, 'opacity', 100);
    }
    oBtnNext.onmouseout = oMarkRight.onmouseout = function () {
        startMove(oBtnNext, 'opacity', 0);
    }
    //小图点击，大图显示
    for (i = 0; i < aSmallLi.length; i++) {
        aSmallLi[i].index = i;
        aSmallLi[i].onmouseover = function () {
            startMove(this, 'opacity', 100);
        }
        aSmallLi[i].onmouseout = function () {
            if (this.index != iNow) {
                startMove(this, 'opacity', 60);
            }
        }
        aSmallLi[i].onclick = function () {
            if (this.index == iNow)return;
            iNow = this.index;

            tab();
        }
        function tab() {
            for (i = 0; i < aSmallLi.length; i++) {
                startMove(aSmallLi[i], 'opacity', 60);
            }
            startMove(aSmallLi[iNow], 'opacity', 100);
            aBigLi[iNow].style.zIndex = iMinZindex++;
            aBigLi[iNow].style.height = 0;

            startMove(aBigLi[iNow], 'height', oBigUl.offsetHeight);

            if (iNow == 0) {
                //startMove(oSmallUl, 'left', 0);
            }
            else if (iNow == aSmallLi.length - 1) {
                //startMove(oSmallUl, 'left', -(iNow - 2) * aSmallLi[0].offsetWidth);
            }
            else {
                //startMove(oSmallUl, 'left', -(iNow - 1) * aSmallLi[0].offsetWidth);
            }
        }

        oBtnPrev.onclick = function () {
            iNow--;
            if (iNow == -1) {
                iNow = aSmallLi.length - 1;
            }

            tab();
        }

        oBtnNext.onclick = function () {
            iNow++;
            if (iNow == aSmallLi.length) {
                iNow = 0;
            }

            tab();
        }
    }
}
$(document).ready(function () {
    var company_free_modal = $('.company_free_modal');
    var company_order_result= $('.company_order_result');
    $('.how_money').click(function () {
        company_free_modal.css('display', 'block');
        company_free_modal.removeClass('animated bounceOut').addClass('animated bounceIn');
    });
    company_free_modal.find(".close_btn").click(function () {
        company_free_modal.removeClass('animated bounceIn').addClass('animated bounceOut');
        setTimeout(function () {
            company_free_modal.css('display', 'none')
        }, 2000);
    });
    $(".order_btn").click(function(e){
        company_free_modal.find('form').find('span').css('display','none');
        e.preventDefault();
        var name=company_free_modal.find('form').find('input').eq(0).val();
        var mobile=company_free_modal.find('form').find('input').eq(1).val();
        var patrn = /^\s*[\u4e00-\u9fa5]{1,15}\s*$/;
        if (!patrn.exec(name)) {
            company_free_modal.find('form').find('input').eq(0).next('span').css('display','block');
            return false;
        }
        if (!(/^1[34578]\d{9}$/.test(mobile))) {
            company_free_modal.find('form').find('input').eq(1).next('span').css('display','block');
            return false;
        }
        $.ajax({

        });
        company_free_modal.removeClass('animated bounceIn').addClass('animated bounceOut');
        setTimeout(function () {
            company_free_modal.css('display', 'none')
        }, 2000);
        company_order_result.css('display','block');
        company_order_result.removeClass('animated bounceOut').addClass('animated bounceInLeft');
    });
    company_order_result.find('.close_btn').click(function(){
        company_order_result.removeClass('animated bounceIn').addClass('animated bounceOutRight');
        setTimeout(function () {
            company_order_result.css('display', 'none')
        }, 2000);
    });
});