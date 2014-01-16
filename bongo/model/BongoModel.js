/**
 * Created by stomblin on 1/15/14.
 */
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
app.Model = Backbone.Model.extend({

    defaults: {
        name: 'James Tomblin',
        age: 37,
        email:"james.s.tomblin@gmail.com",
        title:"Designer/Developer/Artist/Educator",
        complete:false
    },
    complete:false,

    initialize: function(){

        console.log('model made');




    }


});

