(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {

            var clientWidth = docEl.clientWidth;
            //alert(clientWidth            if (!clientWidth) return;)

            var scale = clientWidth / 375
            if(scale <= 320/375){ //320
                scale = 320/375;
            }else if(scale>1.29){
                scale = 1.29;
            }else{
                scale = clientWidth / 375;
            }
            docEl.style.fontSize = 10 * scale.toFixed(4) + 'px';

        };
        

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);