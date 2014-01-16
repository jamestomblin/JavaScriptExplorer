/**
 * Created by stomblin on 1/15/14.
 */
/**
 * Created with JetBrains PhpStorm.
 * User: stomblin
 * Date: 1/13/14
 * Time: 6:09 PM
 * To change this template use File | Settings | File Templates.
 */
var app = app || {};

app.SignView = Backbone.View.extend({

    top_e: $("#top-target"),
    // Compile the template using underscore
    template : _.template( $("#top_template").html() ),

    initialize: function(options){

        this.options = options || {};

        this.listenTo(this.model,'change', this.render);

        this.setModel()

        setInterval(function(){

           this.setModel()

        }.bind(this),60000);


    //    */
    },

    setModel:function(){


        this.model.fetch({
            url: "http://api.ebongo.org/prediction?format=json&stopid="+this.options.stopid,
            success: function(e) {


            }.bind(this),
            error: function(e){
                console.log('There was some error in loading and processing the JSON file');
            }
        });

    },


    change:function(){

        //console.log('changed moddel');

    },

    render:function(){

        console.log('render');
        //console.log(this.model.attributes.predictions);
        //this.list_e.html( this.template({data:this.model.attributes[this.options.linkroute], linkroute:this.options.linkroute}) );
        this.top_e.html( this.template({data:this.model.attributes.predictions}) );

    }

});