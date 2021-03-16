//滚轮事件//
var scrollFunc = function (e) {
    e = e || window.event;
    if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件             
        if (e.wheelDelta < 0) { //当滑轮向下滚动时
            $(".wp-a").css("top", "-100%")
            $(".wp-b").css("top", "-100%")
            $(".quan").css("opacity", "0")
            $(".me").css("opacity", "0")
            $(".wp-a-nr").css("opacity", "0")
            $(".zp-6").css("top", "0")
            $(".zp-7").css("top", "0")
            $(".zp-wy").css("opacity", "1")
            $(".page").css("right", "-100%")
            $(".zp-2").css("left", "0")
            $(".zp-3").css("right", "0")
            setTimeout(function(){
                $(".zp-1").css("left", "0")
                $(".zp-4").css("right", "0")
                $(".zp-5").css("top", "0")
                $(".zp-8").css("top", "0")
            },500)
        }
        else {
            $(".wp-a").css("top", "0px")
            $(".wp-b").css("top", "0px")
            $(".quan").css("opacity", "1 ")
            $(".me").css("opacity", "1 ")
            $(".wp-a-nr").css("opacity", "1")
            $(".zp-wy").css("top", "600px")
            $(".zp-wy").css("opacity", "0")
            $(".zp-1").css("left", "1000")
            $(".zp-2").css("left", "1000")
            $(".zp-3").css("right", "1000")
            $(".zp-4").css("right", "1000")
        }
        if (e.wheelDelta > 0) { //当滑轮向上滚动时
            $(".wp-c").css("top", "0%")
        }
    }
}
//给页面绑定滑轮滚动事件
if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
//滚动滑轮触发scrollFunc方法
window.onmousewheel = document.onmousewheel = scrollFunc;


window.onload = function () {
    //第一屏侧边导航半出
    $(".nav-nr").css("left", "0");
    $(".quan").css("opacity", "1 ")
    $(".me").css("opacity", "1 ")
}

//鼠标点击事件

$(".nav").click(function () {
    $(".nav").css("left", "0px");
    $(".jt").css("left", "150px")
    $("#z").css("right", "0")
    $("#x").css("right", "0")
    $("#v").css("right", "0")
    $("#v").css("right", "0")
    $(".tx").css("left", "0px")
});

$(".gd").click(function () {
    $(".nav").css("left", "0px");
    $(".jt").css("left", "150px")
    $("#z").css("right", "0")
    $("#x").css("right", "0")
    $("#v").css("right", "0")
    $(".tx").css("left", "0px")
});
//鼠标双点击事件

$(".nav").dblclick(function () {
    $(".nav").css("left", "-130px");
    $(".jt").css("left", "135px")
})

$(".gd").dblclick(function () {
    $(".nav").css("left", "-130px");
    $(".jt").css("left", "135px")
})



//点击按钮弹出第三屏//
$("#btn").click(function () {
    $(".wp-c").css("top", "-200%")
})
$(".wp-c").dblclick(function () {
    $(".wp-c").css("top", "0%")
})

$(".lxw").click(function () {
     $(".wp-a").css("right", "100%")
    // $(".page").css("right", "0px")
    $(".banner").css("display", "none")
    $(".page-nr").css("opacity", "1")
})

$(".page").dblclick(function () {
    $(".wp-a").css("right", "0")
    $(".page-nr").css("opacity", "0")

});

$(".z5").mouseover(function () {
    $(".zp-5").css("top", "-102%");
});
$(".z5").mouseout(function () {
    $(".zp-5").css("top", "0px");
});

$(".z6").mouseover(function () {
    $(".zp-6").css("top", "-84%");
});
$(".z6").mouseout(function () {
    $(".zp-6").css("top", "0px");
});

$(".z7").mouseover(function () {
    $(".zp-7").css("top", "-102%");
});
$(".z7").mouseout(function () {
    $(".zp-7").css("top", "0px");
});

$(".z8").mouseover(function () {
    $(".zp-8").css("top", "-84%");
});
$(".z8").mouseout(function () {
    $(".zp-8").css("top", "0px");
});



var startx, starty;
//获得角度
function getAngle(angx, angy) {
    return Math.atan2(angy, angx) * 180 / Math.PI;
};

//根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
function getDirection(startx, starty, endx, endy) {
    var angx = endx - startx;
    var angy = endy - starty;

    //如果滑动距离太短
    if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
        return result;
    }

    var angle = getAngle(angx, angy);
    if (angle >= -135 && angle <= -45) {
        result = 1;
    } else if (angle > 45 && angle < 135) {
        result = 2;
    } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
        result = 3;
    } else if (angle >= -45 && angle <= 45) {
        result = 4;
    }

    return result;
}
//手指接触屏幕
document.addEventListener("touchstart", function(e){
    startx = e.touches[0].pageX;
    starty = e.touches[0].pageY;
}, false);
//手指离开屏幕
document.addEventListener("touchend", function(e) {
    var endx, endy;
    endx = e.changedTouches[0].pageX;
    endy = e.changedTouches[0].pageY;
    var direction = getDirection(startx, starty, endx, endy);
    switch (direction) {
        case 1:
            $(".zp-2").css("left", "0")
            $(".zp-3").css("right", "0")
            $(".zp-1").css("left", "0")
            $(".zp-4").css("right", "0")
            break;
        case 2:

        break;
        case 3:

        break;
        case 4:

        break;
        default:
    }
}, false);

