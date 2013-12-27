/**
 * Created with JetBrains PhpStorm.
 * User: stomblin
 * Date: 12/26/13
 * Time: 6:36 PM
 * To change this template use File | Settings | File Templates.
 */
canvas = document.getElementById("globe");
var stage = new createjs.Stage(canvas);

//var image = new createjs.Bitmap("img/flake.png");
createjs.Ticker.addEventListener("tick", handleTick);
createjs.Ticker.setFPS(60);

var fpsLabel = new createjs.Text("-- fps","bold 18px Arial","#FFF");
stage.addChild(fpsLabel);
fpsLabel.x = 10;
fpsLabel.y = 20;

var arr = [];

function distributeImages(num){

   for(var i = 0; i< num; i++){
       arr[i] = new createjs.Bitmap("img/flake.png");
       arr[i].velX = Math.random()*2-1;
       arr[i].velY = Math.random()*2-1;
       arr[i].rad = 0;
       arr[i].cache;
       var scale = random(50,100)/100;
       arr[i].scaleX = scale;
       arr[i].scaleY = scale;
       arr[i].x = random(0, 800);
       arr[i].y = random(0, 800);
       arr[i].k = -Math.PI+Math.random()*Math.PI;
       arr[i].alpha = random(50,100)/100;
       //arr[i].snapToPixel = true;
       stage.addChild(arr[i]);
   }

}

function handleTick(event) {

    var w = canvas.width;
    var h = canvas.height;
    var l = stage.getNumChildren()-1;

    for (var i=0; i<l; i++) {
        move(arr[i]);
    }

    fpsLabel.text = Math.round(createjs.Ticker.getMeasuredFPS())+" fps";
    stage.update();
}


function move(obj){

    obj.rad += (obj.k / 180) * Math.PI;
    obj.x -= Math.cos(obj.rad)-2;
    obj.y += 1;


    if (obj.y >= 800) {
        obj.y = -5;
    }
    if (obj.x >= 800)
    {
        obj.x = 1
    }
    if (obj.x <= 0)
    {
        obj.x = 800 - 1;
    }


}


function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

distributeImages(100);

/*

//settings
var speed:Number = 2;
var wind:Number = -2;
var movieWidth:Number = 550;
var movieHeight:Number = 400;

createSnow(_root, 100);


function createSnow(container:MovieClip, numberOfFlakes:Number):Void
{
    //run a for loop based on numberOfFlakes
    for (var i = 0; i < numberOfFlakes; i++)
    {
        //set temporary variable and attach snowflake to it from the library
        var tempFlake:MovieClip = container.attachMovie("snow_mc", "snow"+container.getNextHighestDepth(), container.getNextHighestDepth());

        //variables that will modify the falling snow
        tempFlake.r = 1+Math.random()*speed;
        tempFlake.k = -Math.PI+Math.random()*Math.PI;
        tempFlake.rad = 0;

        //giving each snowflake unique characteristics
        var randomScale:Number = random(50)+50;
        tempFlake._xscale = randomScale;
        tempFlake._yscale = randomScale
        tempFlake._alpha = random(100)+50;
        tempFlake._x = random(movieWidth);
        tempFlake._y = random(movieHeight);

        //give the flake an onEnterFrame function to constantly update its properties
        tempFlake.onEnterFrame = function()
        {
            //update flake position
            this.rad += (this.k / 180) * Math.PI;
            this._x -= Math.cos(this.rad)+wind;
            this._y += speed;

            //if flake out of bounds, move to other side of screen
            if (this._y >= movieHeight) {
                this._y = -5;
            }
            if (this._x >= movieWidth)
            {
                this._x = 1
            }
            if (this._x <= 0)
            {
                this._x = movieWidth - 1;
            }
        }
    }
}

//buttons
//wind
left_btn.onRelease = function()
{
    wind = 2;
}
none_btn.onRelease = function()
{
    wind = 0;
}
right_btn.onRelease = function()
{
    wind = -2;
}
//speed
slow_btn.onRelease = function()
{
    speed = .5;
}
normal_btn.onRelease = function()
{
    speed = 1
}
fast_btn.onRelease = function()
{
    speed = 3
}
    */