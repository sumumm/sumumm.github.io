//禁用右键（防止右键查看源代码） 
window.oncontextmenu=function(){return false;} 
//禁止任何键盘敲击事件（防止F12和shift+ctrl+i调起开发者工具） 
window.onkeydown = window.onkeyup = window.onkeypress = function () { 
    //alert(window.event.keyCode);
    if(event.ctrlKey && event.shiftKey && window.event.keyCode == 73){
        //alert("Ctrl+Shift+i被禁用");
        window.event.returnValue = false; 
        return false; 
    }
    if(window.event.keyCode == 123) {
        //alert("F12被禁用");
        window.event.returnValue = false; 
        return false; 
    }  

} 
//判断是手机端还是PC端
console.log(navigator.userAgent);
var os = function (){
    var ua = navigator.userAgent,
    isWindowsPhone = /(?:Windows Phone)/.test(ua),
    isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
    isAndroid = /(?:Android)/.test(ua),
    isFireFox = /(?:Firefox)/.test(ua),
    isChrome = /(?:Chrome|CriOS)/.test(ua),
    isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
    isPhone = /(?:iPhone)/.test(ua) && !isTablet,
    isPc = !isPhone && !isAndroid && !isSymbian;
    return {
        isTablet: isTablet,
        isPhone: isPhone,
        isAndroid: isAndroid,
        isPc: isPc
    };
}();

if(os.isPc) {
    //如果用户在工具栏调起开发者工具，那么判断浏览器的可视高度和可视宽度是否有改变，如有改变则关闭本页面 
    var h = window.innerHeight,w=window.innerWidth; 
    window.onresize = function () { 
        //console.log("h %d,w %d", window.innerHeight,window.innerWidth)；
        if (h!= window.innerHeight||w!=window.innerWidth){ 
            window.close(); 
            window.location = "about:blank"; 
        } 
    }
}