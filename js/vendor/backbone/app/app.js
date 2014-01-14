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
        'projects(/:loc)(/item:item)': 'projects'
       // 'education(/:loc)(/item:item)': 'education',
        //'process(/:loc)(/item:item)': 'process',
        //'qualifications(/:loc)(/item:item)': 'qualifications',
        //'work(/:loc)(/item:item)': 'work'
    },

    initialize:function(){
       // console.log('init formset and list collection');

       // new app.NavView();


    },


    projects:function(loc, item){



        //  app.content = false;
       // if( app.phone == false){

               app.view = new app.ListView({ model:app.model ,loc:loc, item:item , linkroute:'projects'});
        //}else{
            //   app.view=  new app.ListView({ model:app.model ,loc:loc, item:item , linkroute:'projects'});

        //}

       // scroll();

    }

/*
    process:function(loc, item){

       // alert('init bla!!!!!!');
        app.route = 'process';
        if( app.phone == false){
            app.view = new app.MyView({ model:app.model ,loc:loc, item:item , linkroute:'process'});

        }else{
            app.view=  new app.MyViewPhone({ model:app.model ,loc:loc, item:item , linkroute:'process'});

        }

        scroll();

    },

    qualifications:function(loc, item){

        app.route = 'qualifications';
        if( app.phone == false){
            app.view = new app.MyView({ model:app.model ,loc:loc, item:item , linkroute:'qualifications'});

        }else{
            app.view=  new app.MyViewPhone({ model:app.model ,loc:loc, item:item , linkroute:'qualifications'});

        }

        scroll();



    },

    education:function(loc, item){

        app.route = 'education';
        if( app.phone == false){
            app.view = new app.MyView({ model:app.model ,loc:loc, item:item , linkroute:'education'});


        }else{
            app.view=  new app.MyViewPhone({ model:app.model ,loc:loc, item:item , linkroute:'education'});

        }

        scroll();

    },



    work:function(loc, item){
       // alert('init work')
        app.route = 'work';
        if( app.phone == false){
            app.view = new app.ListView({ model:app.model ,loc:loc, item:item , linkroute:'work'});

        }else{
         //   alert('work');
            app.view=  new app.ListView({ model:app.model ,loc:loc, item:item , linkroute:'work'});

        }

        scroll();

    }

    */

});



function scroll(){

   // if(!app.content){
       // $(window).scrollTop(0);
    //}else{

     //   $(window).scrollTop(currentScroll);
    //}


}



app.model =  new app.PorfolioModel();
var view = {};
app.view = view;
app.content = false;
//app.navview;

var app_router = new app.AppRouter;


var mq = window.matchMedia( "(min-width: 600px)" );

// media query event handler
if (matchMedia) {
    var mq = window.matchMedia("(min-width: 600px)");
    mq.addListener(function(mg){

        if (mq.matches) {
            app.phone = false;
            console.log('re route')
         //   Backbone.history.stop(); Backbone.history.start()
            //app_router.navigate(app.route, {trigger: true});
            // alert('no phone');
            // window width is at least 600px
        }
        else {
            app.phone = true;
          //  Backbone.history.stop(); Backbone.history.start()
          //  app_router.navigate(app.route, {trigger: true});
            //alert(' phone');
            // window width is less than 600px
        }

        console.log('media query change')


    });

}


$(function(){

    var w = window.outerWidth;
    console.log(w);

    if(w< 600){

        app.phone = true;

    }else{

        app.phone = false;

    }

    Backbone.history.start();

});
/*
$(window).bind('hashchange', this.checkUrl);


$('.nav-links').click(function(e) {
    var newFragment = Backbone.history.getFragment($(this).attr('href'));
    if (Backbone.history.fragment == newFragment) {
        // need to null out Backbone.history.fragement because
        // navigate method will ignore when it is the same as newFragment
        Backbone.history.fragment = null;
        Backbone.history.navigate(newFragment, true);
    }
});

    */

