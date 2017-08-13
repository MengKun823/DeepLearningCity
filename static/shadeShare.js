/**************************
*Desc:提示遮罩
*Argument:type=0 全屏遮 1局部遮
*Version:1.0.0
**************************/
; (function ($) { 
    $.fn.jqShade =function(option) {
        var defaultVal = {
            backgroundImage: "../static/img/back/share.png",//背景图片
            type:0 //0全部遮 
        };
        var opt = $.extend({}, defaultVal, option);
        if (opt.type == 0) {
            //全屏遮
            openLayer();
        }
        
        //销毁对象
        if (option === "destroy") {
            closeLayer();
        }
        /*==========全部遮罩=========*/
        function openLayer() {
            //背景遮罩层
            var layer = $("<div id='layer'></div>");
            layer.css({
                zIndex:999,
                position: "fixed",
                height: "100%",
                width: "100%",
              	backgroundColor: "rgba(49,112,255,0.8)",
              	top: 0,
                left: 0,
                bottom: 0,
                right: 0
            });
            layer.append("<img class='layerImg' style='width:100%; height: 100%;' src='" + opt.backgroundImage + "' />");
            $("body").append(layer);
            
           return this;
        }

        //销毁对象
        function closeLayer() {
            $("#layer,.layerImg").remove();
            return this;
        }
    };
    
})(jQuery)