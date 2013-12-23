/**
 * Created with JetBrains PhpStorm.
 * User: stomblin
 * Date: 12/23/13
 * Time: 3:42 PM
 * To change this template use File | Settings | File Templates.
 */

var app = app || {};

app.PortfolioView = Backbone.View.extend({

    el: $("#portfolio-list-target"),
    // Compile the template using underscore
    template : _.template( $("#portfolio-list-template").html() ),


    initialize: function(){

        this.render();
    },

    render:function(){
        console.log('testing template')
        // Load the compiled HTML into the Backbone "el"
        this.$el.html( this.template({test:'test'}) );



    }


})

