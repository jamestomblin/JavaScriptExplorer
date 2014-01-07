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
        "":'projects',
        'projects(/:loc)(/page:page)': 'projects',
        'education(/:loc)(/page:page)': 'education',
        'process(/:loc)(/page:page)': 'process',
        'work(/:loc)(/page:page)': 'work'
    },

    initialize:function(){
        console.log('init formset and list collection');



       // new app.NavView();


    },

    process:function(loc, p){



        app.view=  new app.MyView( {model:app.model ,loc:loc, page:p, linkroute:'process' });


    },

    education:function(loc, p){


        app.view = new app.MyView({ model:app.model ,loc:loc, page:p , linkroute:'education'});

    },



    projects:function(loc, p){

        new app.NavView();
        app.view = new app.MyView({ model:app.model ,loc:loc, page:p , linkroute:'projects'})


    },

    work:function(loc, p){


        app.view = new app.MyView({ model:app.model ,loc:loc, page:p , linkroute:'work'})


    }







});
app.model =  new app.PorfolioModel();
var view = {};
app.view = view;

var app_router = new app.AppRouter;


$(function(){

    Backbone.history.start();

});