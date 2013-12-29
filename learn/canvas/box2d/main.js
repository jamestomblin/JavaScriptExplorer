/**
 * Created with JetBrains PhpStorm.
 * User: stomblin
 * Date: 12/29/13
 * Time: 10:02 AM
 * To change this template use File | Settings | File Templates.
 */
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(/* function */ callback, /* DOMElement */ element){
            window.setTimeout(callback, 1000 / 60);
        };
})();

var stats = new Stats();
document.body.appendChild(stats.domElement);

function update() {
    stats.update();
    requestAnimFrame(update);
};
requestAnimFrame(update);