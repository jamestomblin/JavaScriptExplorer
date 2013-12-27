/**
 * Created with JetBrains PhpStorm.
 * User: stomblin
 * Date: 12/26/13
 * Time: 11:11 AM
 * To change this template use File | Settings | File Templates.
 */
window.requestAnimFrame = (function() {
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(/* function */ callback, /* DOMElement */ element){
            window.setTimeout(callback, 1000 / 60);
        };
})();