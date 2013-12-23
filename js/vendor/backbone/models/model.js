/**
 * Created with JetBrains PhpStorm.
 * User: stomblin
 * Date: 12/23/13
 * Time: 3:15 PM
 * To change this template use File | Settings | File Templates.
 */
var app = app || {};

/* Backbone specific model code:

 */
app.PorfolioModel = Backbone.Model.extend({

    defaults: {
        name: 'James Tomblin',
        age: 37,
        email:"james.s.tomblin@gmail.com"
    },

    initialize: function(){

        console.log('model made')

        this.fetch({
            url: "db/db.json",
            success: function(e) {
                console.log(e);
            }.bind(this),
            error: function(e){
               // console.log(e);
                console.log('There was some error in loading and processing the JSON file');
            }
        })

    }


});





