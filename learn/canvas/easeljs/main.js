/**
 * Created with JetBrains PhpStorm.
 * User: stomblin
 * Date: 12/26/13
 * Time: 6:36 PM
 * To change this template use File | Settings | File Templates.
 */
canvas = document.getElementById("globe");
var stage = new createjs.Stage(canvas);
var num = 400;
var num2 = 400;
//var image = new createjs.Bitmap("img/flake.png");
createjs.Ticker.addEventListener("tick", handleTick);
createjs.Ticker.setFPS(60);

//ndgmr.DEBUG_COLLISION = true;

var fpsLabel = new createjs.Text("-- fps","bold 18px Arial","#FFF");
stage.addChild(fpsLabel);
fpsLabel.x = 10;
fpsLabel.y = 20;

var arr = [];
var arr2 = [];

var block = new createjs.Bitmap("../img/block.png");

block.regX = 512;//block.image.width / 2;
block.regY = 256;//block.image.height / 2;

block.x = canvas.width/2;
block.y = canvas.height/2;



stage.addChild(block);

var image = new Image();
image.src = "../img/flake2.png";

function distributeImages(num){



   for(var i = 0; i< num; i++){
       arr[i] = new createjs.Bitmap(image.src );
       arr[i].velX = Math.random()*2-1;
       arr[i].velY = Math.random()*2-1;
       arr[i].rad = 0;
       arr[i].cache;
       var scale = random(50,100)/100;
       arr[i].scaleX = scale;
       arr[i].scaleY = scale;
       arr[i].x = random(0, 1024);
       arr[i].y = random(0, 1024);
       arr[i].k = -Math.PI+Math.random()*Math.PI;
       arr[i].alpha = random(1,100)/100;
       arr[i].snapToPixel = true;
       stage.addChild(arr[i]);
   }

}

function distributeImages2(num){




    for(var i = 0; i< num; i++){
        arr2[i] = new createjs.Bitmap(image.src);
        arr2[i].velX = Math.random()*2-1;
        arr2[i].velY = Math.random()*2-1;
        arr2[i].rad = 0;
        arr2[i].cache;
       var scale = random(50,100)/100;
        arr2[i].scaleX = scale;
        arr2[i].scaleY = scale;
        arr2[i].x = random(0, 1024);
        arr2[i].y = random(0, 1024);
        arr2[i].k = -Math.PI+Math.random()*Math.PI;
        arr2[i].alpha = random(50,100)/100;
        arr2[i].snapToPixel = true;
        stage.addChild(arr2[i]);
    }

}

function handleTick(event) {

    var w = canvas.width;
    var h = canvas.height;


    for (var i=0; i<num; i++) {
     //   move(arr[i]);
    }

    for (var i=0; i<num2; i++) {
        move2(arr2[i]);
    }

    fpsLabel.text = Math.round(createjs.Ticker.getMeasuredFPS())+" fps";
    stage.update();
}


function move2(obj){

    var speed = 5;
    var intersection = ndgmr.checkPixelCollision(block,obj,0);
//console.log(intersection);
    if(intersection){
     //   obj.x = 0;
        speed = .2;
        //  createjs.Ticker.removeEventListener("tick", handleTick);
    }else{

     //   obj.x += Math.cos(obj.rad)-0;
    }

// intersection is null if no collision, otherwise a {x,y,width,height}-Object is returned

    obj.rad += (obj.k / 180) * Math.PI;

    obj.y += speed;


    if (obj.y >= 1024) {
        obj.y = -5;
    }
    if (obj.x >= 1024)
    {
        obj.x = 1
    }
    if (obj.x <= 0)
    {
        obj.x = 1024 - 1;
    }


}

function move(obj){

    var speed = 5;
  //  var intersection = ndgmr.checkPixelCollision(block,obj,0);
//console.log(intersection);
    //if(intersection){

   //     speed = .2;
      //  createjs.Ticker.removeEventListener("tick", handleTick);
   // }

// intersection is null if no collision, otherwise a {x,y,width,height}-Object is returned

    obj.rad += (obj.k / 180) * Math.PI;
    obj.x += Math.cos(obj.rad)-0;
    obj.y += speed;


    if (obj.y >= 1024) {
        obj.y = -5;
    }
    if (obj.x >= 1024)
    {
        obj.x = 1
    }
    if (obj.x <= 0)
    {
        obj.x = 1024 - 1;
    }


}


function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//distributeImages(num);


distributeImages2(num2);
