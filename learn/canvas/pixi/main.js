var num = 10000;
// create an new instance of a pixi stage
var stage = new PIXI.Stage(0x3b552b);

// create a renderer instance
var renderer = PIXI.autoDetectRenderer(1024, 1024);

var text = new PIXI.Texture.fromImage("../img/block.png");

var block = new PIXI.Sprite(text);

block.anchor.x = 0.5
block.anchor.y =  0.5

block.position.x = 512;//block.image.width / 2;
block.position.y = 512;//block.image.height / 2;

stage.addChild(block);

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);

requestAnimFrame( animate );

function animate() {

    requestAnimFrame( animate );

    for (var i=0; i<num; i++) {
        //arr[i].rotation += 0.1;
        move(arr[i]);
    }

    // just for fun, lets rotate mr rabbit a little
    //   bunny.rotation += 0.1;

    // render the stage
    renderer.render(stage);
}

var arr = [];

function distributeImages(num){

    var texture = PIXI.Texture.fromImage("../img/flake2.png");

    for(var i = 0; i< num; i++){

        arr[i]= new PIXI.Sprite(texture);
        arr[i].hitArea = new PIXI.Rectangle(0, 0, 32 ,32);
        var scale = random(50,100)/100;
        arr[i].scale.x = scale;
        arr[i].scale.y = scale;
        arr[i].anchor.x = 0.5;
        arr[i].anchor.y = 0.5;
        arr[i].alpha = random(1,100)/100;
        arr[i].k = -Math.PI+Math.random()*Math.PI;
        arr[i].rad = 0;
        arr[i].position.x = random(0, 1024);
        arr[i].position.y = random(0, 1024);

        stage.addChild(arr[i]);

        //console.log( arr[i].texture );
    }

}

distributeImages(num);

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//var rad = 0;
function move(obj){



    var speed = 2;

    obj.rad += (obj.k / 180) * Math.PI;
     obj.position.x += Math.cos(obj.rad)-0;
   // console.log(obj.rad );

    obj.position.y += speed;



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

/**
 * @author Joseph Lenton - PlayMyCode.com
 *
 * @param first An ImageData object from the first image we are colliding with.
 * @param x The x location of 'first'.
 * @param y The y location of 'first'.
 * @param other An ImageData object from the second image involved in the collision check.
 * @param x2 The x location of 'other'.
 * @param y2 The y location of 'other'.
 * @param isCentred True if the locations refer to the centre of 'first' and 'other', false to specify the top left corner.
 */
function isPixelCollision( first, x, y, other, x2, y2, isCentred )
{
    // we need to avoid using floats, as were doing array lookups
    x  = Math.round( x );
    y  = Math.round( y );
    x2 = Math.round( x2 );
    y2 = Math.round( y2 );

    var w  = first.width,
        h  = first.height,
        w2 = other.width,
        h2 = other.height ;

    // deal with the image being centred
    if ( isCentred ) {
        // fast rounding, but positive only
        x  -= ( w/2 + 0.5) << 0
        y  -= ( h/2 + 0.5) << 0
        x2 -= (w2/2 + 0.5) << 0
        y2 -= (h2/2 + 0.5) << 0
    }

    // find the top left and bottom right corners of overlapping area
    var xMin = Math.max( x, x2 ),
        yMin = Math.max( y, y2 ),
        xMax = Math.min( x+w, x2+w2 ),
        yMax = Math.min( y+h, y2+h2 );

    // Sanity collision check, we ensure that the top-left corner is both
    // above and to the left of the bottom-right corner.
    if ( xMin >= xMax || yMin >= yMax ) {
        return false;
    }

    var xDiff = xMax - xMin,
        yDiff = yMax - yMin;

    // get the pixels out from the images
    var pixels  = first.data,
        pixels2 = other.data;

    // if the area is really small,
    // then just perform a normal image collision check
    if ( xDiff < 4 && yDiff < 4 ) {
        for ( var pixelX = xMin; pixelX < xMax; pixelX++ ) {
            for ( var pixelY = yMin; pixelY < yMax; pixelY++ ) {
                if (
                    ( pixels [ ((pixelX-x ) + (pixelY-y )*w )*4 + 3 ] !== 0 ) &&
                        ( pixels2[ ((pixelX-x2) + (pixelY-y2)*w2)*4 + 3 ] !== 0 )
                    ) {
                    return true;
                }
            }
        }
    } else {
        /* What is this doing?
         * It is iterating over the overlapping area,
         * across the x then y the,
         * checking if the pixels are on top of this.
         *
         * What is special is that it increments by incX or incY,
         * allowing it to quickly jump across the image in large increments
         * rather then slowly going pixel by pixel.
         *
         * This makes it more likely to find a colliding pixel early.
         */

        // Work out the increments,
        // it's a third, but ensure we don't get a tiny
        // slither of an area for the last iteration (using fast ceil).
        var incX = xDiff / 3.0,
            incY = yDiff / 3.0;
        incX = (~~incX === incX) ? incX : (incX+1 | 0);
        incY = (~~incY === incY) ? incY : (incY+1 | 0);

        for ( var offsetY = 0; offsetY < incY; offsetY++ ) {
            for ( var offsetX = 0; offsetX < incX; offsetX++ ) {
                for ( var pixelY = yMin+offsetY; pixelY < yMax; pixelY += incY ) {
                    for ( var pixelX = xMin+offsetX; pixelX < xMax; pixelX += incX ) {
                        if (
                            ( pixels [ ((pixelX-x ) + (pixelY-y )*w )*4 + 3 ] !== 0 ) &&
                                ( pixels2[ ((pixelX-x2) + (pixelY-y2)*w2)*4 + 3 ] !== 0 )
                            ) {
                            return true;
                        }
                    }
                }
            }
        }
    }

    return false;
}




var stats = new Stats();
document.body.appendChild(stats.domElement);

function update() {
    stats.update();
    requestAnimFrame(update);
};
requestAnimFrame(update);