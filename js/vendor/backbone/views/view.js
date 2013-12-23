/**
 * Created with JetBrains PhpStorm.
 * User: stomblin
 * Date: 12/23/13
 * Time: 3:42 PM
 * To change this template use File | Settings | File Templates.
 */

var app = app || {};

app.PorfolioView = Backbone.View.extend({


    // Compile the template using underscore
    template : _.template( $("#portfolio-list-target").html(), {} ),


    initialize: function(){


    },

    render:function(){

        // Load the compiled HTML into the Backbone "el"
        //this.$el.html( this.template );



    }


})

