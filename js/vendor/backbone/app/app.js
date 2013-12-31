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
        "education":"education",
        "process":"process"
    },

    initialize:function(){
        console.log('init formset and list collection');



        new app.NavView();


    },

    process:function(loc, p){



        new app.ProcessView( {model:app.model ,loc:loc, page:p});


    },

    education:function(loc, p){


        new app.EducationView({ model:app.model ,loc:loc, page:p});

    },

    portfolio:function(loc, p){


        new app.PortfolioView({ model:app.model ,loc:loc, page:p})


    }







});
app.model =  new app.PorfolioModel();
var app_router = new app.AppRouter;


$(function(){

    Backbone.history.start();

});