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

    content_el: $("#portfolio-content-target"),
    // Compile the template using underscore
    content_template : _.template( $("#portfolio-content-template").html() ),

    initialize: function(options){

        this.options = options || {};

        if(this.model == undefined){
            this.model = new app.PorfolioModel();
            console.log(this.model.complete);
            this.listenTo(this.model,'change', this.render);
            this.on('setContent', this.contentRender);


            //setTimeout(this.getModel.bind(this), 1000);
            //  if(this.model.complete == false){
            //      this.getModel();

            this.model.fetch({
                url: "db/db.json",
                success: function(e) {
                    console.log('loaded');

                    this.model.complete == true;
                    console.log(this.options);
                    this.trigger('setContent', this.options );

                }.bind(this),
                error: function(e){
                    // console.log(e);
                    console.log('There was some error in loading and processing the JSON file');
                }
            });
        }

    },


    setContent:function(data){

        this.content
        console.log(this.model.attributes.Portfolio[data.loc]);


    },

    render:function(){
        console.log('render menu');
        // Load the compiled HTML into the Backbone "el"
        this.$el.html( this.template({data:this.model}) );

    },

    contentRender:function(data){

      //  console.log(e);

       console.log(this.model.attributes.Portfolio[data.loc]);

        this.content_el.html( this.content_template({data:this.model.attributes.Portfolio[data.loc]}) );

    }


});




app.EducationView = Backbone.View.extend({

    el: $("#portfolio-content-target"),
    // Compile the template using underscore
    template : _.template( $("#portfolio-content-template").html() ),

    initialize: function(options){

        this.options = options || {};
        console.log(this.options)

    },

    render:function(){
        //console.log('render menu');
        // Load the compiled HTML into the Backbone "el"
        //this.$el.html( this.template() );
    }

});





/*
 this.spinner = new Spinner({
 lines: 12, // The number of lines to draw
 length: 7, // The length of each line
 width: 5, // The line thickness
 radius: 10, // The radius of the inner circle
 color: '#000', // #rbg or #rrggbb
 speed: 1, // Rounds per second
 trail: 100, // Afterglow percentage
 shadow: false // Whether to render a shadow
 }).spin(document.getElementById("portfolio-list-target"));




 */