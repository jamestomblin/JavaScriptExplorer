/**
 * Created with JetBrains PhpStorm.
 * User: stomblin
 * Date: 1/13/14
 * Time: 6:09 PM
 * To change this template use File | Settings | File Templates.
 */
app.ListView = Backbone.View.extend({

    list_e: $("#list-target"),
    // Compile the template using underscore
     template : _.template( $("#list_template").html() ),

    initialize: function(options){

        this.options = options || {};
        console.log(this.options);
        this.listenTo(this.model,'change', this.render);
        //this.on('setContent', this.contentRender);

        console.log(this.model.attributes.complete);

        if(this.model.attributes.complete == false){

            this.model.fetch({
                url: "db/db.json",
                success: function(e) {
                    console.log('model loaaaaaded');
                    this.model.attributes.complete = true;

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
            this.render();

            if(this.options.loc != undefined ){
                console.log('setContent');
                this.trigger('setContent', this.options );
            }
        }
    },


    render:function(){

        //this.list_e.html( this.template({data:this.model.attributes[this.options.linkroute], linkroute:this.options.linkroute}) );


    }

});