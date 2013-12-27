/*
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame =
        window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame;
}
*/



var fps = 15;
function draw() {
    setTimeout(function() {
        requestAnimationFrame(draw);

        // Drawing code goes here
    }, 1000 / fps);
}


var t = [];
function animate(now) {

    t.unshift(now);
    if (t.length > 10) {
        var t0 = t.pop();
        var fps = Math.floor(1000 * 10 / (now - t0));
        $('#fps').text(fps + ' fps');
    }

    window.requestAnimFrame(animate);
};

window.requestAnimFrame(animate);