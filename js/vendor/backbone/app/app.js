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
        'portfolio(/:loc)(/page:page)': 'portfolio',
        'education(/:loc)(/page:page)': 'education',
        'process(/:loc)(/page:page)': 'process',
        'work(/:loc)(/page:page)': 'work'
    },

    initialize:function(){
        console.log('init formset and list collection');



        new app.NavView();


    },

    process:function(loc, p){



        new app.MyView( {model:app.model ,loc:loc, page:p, linkroute:'process' });


    },

    education:function(loc, p){


        new app.MyView({ model:app.model ,loc:loc, page:p , linkroute:'education'});

    },



    portfolio:function(loc, p){


        new app.MyView({ model:app.model ,loc:loc, page:p , linkroute:'portfolio'})


    },

    work:function(loc, p){


        new app.MyView({ model:app.model ,loc:loc, page:p , linkroute:'work'})


    }







});
app.model =  new app.PorfolioModel();
var app_router = new app.AppRouter;


$(function(){

    Backbone.history.start();

});