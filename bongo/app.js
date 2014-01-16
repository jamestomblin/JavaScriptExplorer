/**
 * Created by stomblin on 1/15/14.
 */
/**
 * Created with JetBrains PhpStorm.
 * User: stomblin
 * Date: 12/23/13
 * Time: 3:44 PM
 * To change this template use File | Settings | File Templates.
 */
var app = app || {};

app.AppRouter = Backbone.Router.extend({

    routes:{
        'bongo(/stopid:stopid)': 'bongo'

    },

    initialize:function(){

        console.log('init');

    },


    bongo:function( stopid){


        console.log(stopid);
        app.view = new app.SignView({model:app.model, stopid:stopid});

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

app.model =  new app.Model();

var view = {};

var app_router = new app.AppRouter;


$(function(){

    Backbone.history.start();

});
