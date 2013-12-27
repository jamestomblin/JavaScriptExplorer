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

        this.spinner = new Spinner({
            lines: 12, // The number of lines to draw
            length: 7, // The length of each line
            width: 5, // The line thickness
            radius: 10, // The radius of the inner circle
            color: '#000', // #rbg or #rrggbb
            speed: 1, // Rounds per second
            trail: 100, // Afterglow percentage
            shadow: true // Whether to render a shadow
        }).spin(document.getElementById("portfolio-list-target"));

        //this.model = new app.PorfolioModel();
        this._listeningTo(this.model, this.render);
        this.render();

    },

    render:function(){
        console.log('testing template')
        // Load the compiled HTML into the Backbone "el"
        this.$el.html( this.template({test:'test'}) );

    }


})




/*

 // Create the Spinner with options
 var spinner = new Spinner({
 lines: 12, // The number of lines to draw
 length: 7, // The length of each line
 width: 5, // The line thickness
 radius: 10, // The radius of the inner circle
 color: '#000', // #rbg or #rrggbb
 speed: 1, // Rounds per second
 trail: 100, // Afterglow percentage
 shadow: true // Whether to render a shadow
 }).spin(document.getElementById("ajaxContentHolder")); // Place in DOM node called "ajaxContentHolder"

    */