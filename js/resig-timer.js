/**
 * Created with JetBrains PhpStorm.
 * User: stomblin
 * Date: 12/26/13
 * Time: 10:18 AM
 * To change this template use File | Settings | File Templates.
 */

// start timer
console.time("DOM update");

// update
var p = document.getElementById("result");
for (var i = 0; i < 3000; i++) {
    p.textContent += i + " ";
}

// end timer
console.timeEnd("DOM update");



//John Resig's handy catch-all log (amended with my own linenumber add-on + new and improved CSS support for chrome!):
function trace() {//just cause I like "trace" better than his "log"
    try {
        var dA = navigator.userAgent.toLowerCase(), fF = dA.match(/(firefox)/);
        //show linenumber in FireFox & Chrome
        if(fF){var lnVal = 1;}else{var lnVal = 2;}//fireFox sorts Error stack differently
        var linenumber = new Error().stack.split("\n")[lnVal], index = linenumber.indexOf("at "), clean = linenumber.slice(index+2, linenumber.length), cleaner = clean.split(":");
        console.log.apply(console, arguments);
        if(fF){
            console.log("--------------------------------------------------------------- line:"+Array.prototype.slice.call(cleaner)[2]);
        }else{
            console.log("%c ------------------------------------------------------------ line:"+Array.prototype.slice.call(cleaner)[2], 'color: #f60');
        }//if/else firefox
    }
    catch(e) {
        try {opera.postError.apply(opera, arguments);
        }
            //careful! this will set off alerts in crummy browsers!
        catch(e) {
            //alert(Array.prototype.join.call(arguments, "  "));
        }//second catch
    }//first catch
}//trace()

//console.time() and console.timeEnd() encapsulated to not throw errors in IE
function timeStart(){
    try {
        console.time.apply(console, arguments);
    }
    catch(e) {
        //ie/opera
    }//first catch

}//timeStart

function timeEnd(){
    try {
        console.timeEnd.apply(console, arguments);
    }
    catch(e) {
        //ie/opera
    }//first catch

}//timeEnd