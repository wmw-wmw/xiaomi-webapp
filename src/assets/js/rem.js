/* eslint-disable*/

//小米官网的写法
!function (n) {
    //获取document
    var e = n.document,
        //获取根节点html
        t = e.documentElement,
        //初始值720px
        i = 720,
        //假设100px为1rem，那么720px为7.2rem
        d = i / 100,
        //判断是否有改变横屏事件，没有的话用resize事件
        o = "orientationchange" in n ? "orientationchange" : "resize",
        a = function () {
            //获取手机屏幕宽度
            var n = t.clientWidth || 320;
            //手机屏幕宽度大于720px默认设置为720px，即最大宽度为720px 
            n > 720 && (n = 720),
                //设置根元素的字体大小为手机屏幕宽度/7.2,为上面自己定义的，当然你可以定义成别的，8.2，9.4都行
                t.style.fontSize = n / d + "px"
        };
    //判断是否有addeventlistener方法，如果有，就绑定上面判断的o事件
    e.addEventListener && (n.addEventListener(o, a, !1),
        //绑定DOMContentLoaded事件
        e.addEventListener("DOMContentLoaded", a, !1))
}(window);

