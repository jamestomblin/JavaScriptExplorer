/**
 * Created by stomblin on 1/16/14.
 */
var num = 1000;
// create an new instance of a pixi stage

//var canvas = document.getElementById("c");
//var ctx = canvas.getContext("2d");
var stage = new PIXI.Stage(0x3b552b);

// create a renderer instance
//var renderer = PIXI.autoDetectRenderer(1024, 1024);
var renderer = PIXI.autoDetectRenderer(1024, 1024, document.getElementById('c'));

var text = new PIXI.Texture.fromImage("../img/block.png");

var block = new PIXI.Sprite(text);

block.anchor.x = 0.5
block.anchor.y =  0.5
block.position.x = 512;//block.image.width / 2;
block.position.y = 512;//block.image.height / 2;

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);

requestAnimFrame( animate );

function animate() {

    requestAnimFrame( animate );

    for (var i=0; i<num; i++) {
        //arr[i].rotation += 0.1;
        if(arr.length>1){
            move(1,arr[i]);
        }
        if(arr2.length>1){
            move(2,arr2[i]);
        }
        if(arr3.length>1){
            move(3,arr3[i]);
        }
    }

    // just for fun, lets rotate mr rabbit a little
    //   bunny.rotation += 0.1;

    // render the stage
    renderer.render(stage);
}

var arr = [];
var arr2 = [];
var arr3 = [];

function distributeImages(  array, num){

    var texture = PIXI.Texture.fromImage("../img/flake2.png");

    for(var i = 0; i< num; i++){

        array[i]= new PIXI.Sprite(texture);
        // array[i].hitArea = new PIXI.Rectangle(0, 0, 32 ,32);
        var scale = random(50,100)/100;
        array[i].scale.x = scale;
        array[i].scale.y = scale;
        array[i].anchor.x = 0.5;
        array[i].anchor.y = 0.5;
        array[i].alpha = random(1,100)/100;
        array[i].k = -Math.PI+Math.random()*Math.PI;
        array[i].rad = 0;
        array[i].position.x = random(0, 1024);
        array[i].position.y = random(0, 1024);
        stage.addChild(array[i]);

        //console.log( arr[i].texture );
    }

}

distributeImages(arr, num);
//distributeImages(arr2, num);
stage.addChild(block);
distributeImages(arr3, num);

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//var rad = 0;
function move(sp, obj){

    var speed = sp;

    obj.rad += (obj.k / 180) * Math.PI;
    obj.position.x -= Math.cos(obj.rad)-0;
    // console.log(obj.rad );
    obj.position.y  -= Math.sin(obj.rad)-2;
    //obj.position.y += speed;


    //   if(isPixelCollision(obj.))


    if (obj.position.y >= 1024) {
        obj.position.y = -5;
    }
    if (obj.position.x >= 1024)
    {
        obj.position.x = 1
    }
    if (obj.position.x <= 0)
    {
        obj.position.x = 1024 - 1;
    }


}






