/**
 * Created with JetBrains PhpStorm.
 * User: stomblin
 * Date: 12/23/13
 * Time: 3:42 PM
 * To change this template use File | Settings | File Templates.
 */

var app = app || {};



app.NavView = Backbone.View.extend({

    el: $("#nav-target"),
    // Compile the template using underscore
    template : _.template( $("#nav-template").html() ),

    initialize: function(options){

        this.options = options || {};
        this.render();
    },

    render:function(){
        this.$el.html( this.template() );
    }

});

app.MyView = Backbone.View.extend({

    list_el: $("#list-target"),
    // Compile the template using underscore
    list_template : _.template( $("#list-template").html() ),

    content_el: $("#content-target"),
    // Compile the template using underscore
    portfolio_content_template : _.template( $("#portfolio-content-template").html() ),
    education_content_template : _.template( $("#education-content-template").html() ),
    process_content_template : _.template( $("#process-content-template").html() ),
    work_content_template : _.template( $("#work-content-template").html() ),

    initialize: function(options){

        this.options = options || {};
        this.listenTo(this.model,'change', this.listrender);
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
                console.log('There was some error in loading and processing the JSON file');
            }
        });
        }
        else{

            console.log('render');
            this.listrender();

            if(this.options.loc != undefined ){
            //    console.log('setContent');
                this.trigger('setContent', this.options );
            }
        }

    },


    listrender:function(){

        this.list_el.html( this.list_template({data:this.model.attributes[this.options.linkroute], linkroute:this.options.linkroute}) );
        this.content_el.html('');

    },

    contentRender:function(data){

        switch(this.options.linkroute)
        {
            case 'portfolio':
                console.log('render content');
                this.content_el.html( this.portfolio_content_template({data:this.model.attributes[this.options.linkroute][data.loc]}) );
                break;
            case 'education':
                this.content_el.html( this.education_content_template({data:this.model.attributes[this.options.linkroute][data.loc]}) );
                break;
            case 'process':
                this.content_el.html( this.process_content_template({data:this.model.attributes[this.options.linkroute][data.loc]}) );
                break;
            case 'work':
                this.content_el.html( this.work_content_template({data:this.model.attributes[this.options.linkroute][data.loc]}) );
                break;
            default:
                // default code
                this.content_el.html('test');

        }

    }


});



