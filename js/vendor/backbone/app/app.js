/**
 * Created with JetBrains PhpStorm.
 * User: stomblin
 * Date: 12/23/13
 * Time: 3:44 PM
 * To change this template use File | Settings | File Templates.
 */
var app = app || {};


var phone;



app.AppRouter = Backbone.Router.extend({

    routes:{
        "":'projects',
        'projects(/:loc)(/item:item)': 'projects',
        'education(/:loc)(/item:item)': 'education',
        'process(/:loc)(/item:item)': 'process',
        'work(/:loc)(/item:item)': 'work'
    },

    initialize:function(){
        console.log('init formset and list collection');

       // new app.NavView();


    },

    process:function(loc, item){


        app.route = 'process';
        app.view=  new app.MyView( {model:app.model ,loc:loc, item:item, linkroute:'process' });


    },

    education:function(loc, item){

        app.route = 'education';
        app.view = new app.MyView({ model:app.model ,loc:loc, item:item , linkroute:'education'});

    },



    projects:function(loc, item){

       // console.log('route for phone'+app.phone );
console.log(item)
       // app.route = 'projects';
        console.log('is it a phone? '+ app.phone);
        if( app.phone == false){
            app.view = new app.MyView({ model:app.model ,loc:loc, item:item , linkroute:'projects'})
        }else{
            app.view=  new app.MyViewPhone({ model:app.model ,loc:loc, item:item , linkroute:'projects'})
//
        }
        new app.NavView();

    },

    work:function(loc, item){

        app.route = 'work';
        app.view = new app.MyView({ model:app.model ,loc:loc, item:item , linkroute:'work'})


    }

});







app.model =  new app.PorfolioModel();
var view = {};
app.view = view;

var app_router = new app.AppRouter;


var mq = window.matchMedia( "(min-width: 600px)" );

// media query event handler
if (matchMedia) {
    var mq = window.matchMedia("(min-width: 600px)");
    mq.addListener(function(mg){

        if (mq.matches) {
            app.phone = false;
            console.log('re route')
            Backbone.history.stop(); Backbone.history.start()
            //app_router.navigate(app.route, {trigger: true});
            // alert('no phone');
            // window width is at least 600px
        }
        else {
            app.phone = true;
            Backbone.history.stop(); Backbone.history.start()
          //  app_router.navigate(app.route, {trigger: true});
            //alert(' phone');
            // window width is less than 600px
        }

        console.log('media query change')


    });

}


$(function(){

    var w = window.innerWidth;
    console.log(w);

    if(w< 600){

        app.phone = true;

    }else{

        app.phone = false;

    }

    Backbone.history.start();

});