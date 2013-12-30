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
        "awards":"awards"
    },

    initialize:function(){
        console.log('init formset and list collection');


    },



    portfolio:function(loc, p){

       // portView.load
        console.log('show project');
        console.log(loc);
        console.log(p);
        if(app.portView == undefined){
            app.portView = new app.PortfolioView({loc:loc, page:p})

        }else{
            //app.portView.setContent({loc:loc, page:p});
            app.portView.trigger('setContent',{loc:loc, page:p} )
        }


       // var data = {loc:loc, page:p};
        //console.log(data);
        //new app.ContentView(data);
       // new app.PortfolioView();
    }







});

//var app.portView = new app.PortfolioView();

var app_router = new app.AppRouter;

$(function(){

    Backbone.history.start();

});