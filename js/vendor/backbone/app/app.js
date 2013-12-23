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
        "":'home',
        "porfolio":"portfolio",
        "education":"education",
        "work":"work"
    },

    initialize:function(){
        console.log('init formset and list collection');


    },

    home:function(){
        console.log('test');

        new app.PorfolioView();
    }

});


var app_router = new app.AppRouter;

$(function(){

    Backbone.history.start();

});