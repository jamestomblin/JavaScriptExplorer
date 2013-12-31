/**
 * Created with JetBrains PhpStorm.
 * User: stomblin
 * Date: 12/23/13
 * Time: 3:42 PM
 * To change this template use File | Settings | File Templates.
 */

var app = app || {};



app.NavView = Backbone.View.extend({

    el: $("#portfolio-nav-target"),
    // Compile the template using underscore
    template : _.template( $("#portfolio-nav-template").html() ),

    initialize: function(options){

        this.options = options || {};
       // console.log(this.options)
        console.log('nav');
        this.render();

    },

    render:function(){
        //console.log('render menu');
        // Load the compiled HTML into the Backbone "el"
        this.$el.html( this.template() );
    }

});

app.PortfolioView = Backbone.View.extend({

    el: $("#portfolio-list-target"),
    // Compile the template using underscore
    template : _.template( $("#portfolio-list-template").html() ),

    content_el: $("#portfolio-content-target"),
    // Compile the template using underscore
    content_template : _.template( $("#portfolio-content-template").html() ),

    initialize: function(options){

        this.options = options || {};


        this.listenTo(this.model,'change', this.render);
        this.on('setContent', this.contentRender);

        if(this.model.attributes.complete == false){
        this.model.fetch({
            url: "db/db.json",
            success: function(e) {

                this.model.attributes.complete = true;
                console.log(this.model);
                //console.log(this.options);
                if(this.options.loc != undefined ){

                    this.trigger('setContent', this.options );
                }

            }.bind(this),
            error: function(e){
                // console.log(e);
                console.log('There was some error in loading and processing the JSON file');
            }
        });
        }
        else{
            console.log('render');
            this.render();

            if(this.options.loc != undefined ){
                console.log('setContent');
                this.trigger('setContent', this.options );
            }
        }



    },


    setContent:function(data){

        this.content
        console.log(this.model.attributes.Portfolio[data.loc]);


    },

    render:function(){
        console.log('render menu');
        // Load the compiled HTML into the Backbone "el"
        console.log(this.model.attributes.Portfolio);
        this.$el.html( this.template({data:this.model.attributes.Portfolio, type:'portfolio'}) );

    },

    contentRender:function(data){


        this.content_el.html( this.content_template({data:this.model.attributes.Portfolio[data.loc]}) );

    }


});




app.EducationView = Backbone.View.extend({

    el: $("#portfolio-list-target"),
    // Compile the template using underscore
    template : _.template( $("#portfolio-list-template").html() ),
    content_el: $("#portfolio-content-target"),
    // Compile the template using underscore
    content_template : _.template( $("#portfolio-content-template").html() ),

    initialize: function(options){

        console.log(this.model);

        this.options = options || {};

        this.listenTo(this.model,'change', this.render);

        if(this.model.attributes.complete == false){
            this.model.fetch({
                url: "db/db.json",
                success: function(e) {

                    this.model.attributes.complete = true;
                    //console.log(this.options);
                    //if(this.options.loc != undefined ){
                   //     console.log('setContent');
                    //    this.trigger('setContent', this.options );
                    //}

                }.bind(this),
                error: function(e){
                    // console.log(e);
                    console.log('There was some error in loading and processing the JSON file');
                }
            });
        }else{
            console.log('render');
            this.render();
        }

    },

    render:function(){
        //console.log('render menu');
        // Load the compiled HTML into the Backbone "el"
        this.$el.html( this.template({data:this.model.attributes.Education, type:'education'}) );
        this.content_el.html( '' );
    },

    contentRender:function(data){

console.log('load education');
        //this.content_el.html( this.content_template({data:this.model.attributes.Education[data.loc]}) );

    }

});



app.ProcessView = Backbone.View.extend({

    el: $("#portfolio-list-target"),
    // Compile the template using underscore
    template : _.template( $("#portfolio-list-template").html() ),
    content_el: $("#portfolio-content-target"),
    // Compile the template using underscore
    content_template : _.template( $("#portfolio-content-template").html() ),

    initialize: function(options){

        this.options = options || {};

        this.listenTo(this.model,'change', this.render);

        if(this.model.complete == false){
            this.model.fetch({
                url: "db/db.json",
                success: function(e) {

                    this.model.complete == true;
                    //console.log(this.options);
                   // if(this.options.loc != undefined ){
                   //     console.log('setContent');
                   //     this.trigger('setContent', this.options );
                   // }

                }.bind(this),
                error: function(e){
                    // console.log(e);
                    console.log('There was some error in loading and processing the JSON file');
                }
            });
        }else{
            this.render();
        }

    },

    render:function(){
        //console.log('render menu');
        // Load the compiled HTML into the Backbone "el"
        this.$el.html( this.template({data:this.model.attributes.Process, type:'process'}) );
        this.content_el.html( '' );
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