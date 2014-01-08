/**
 * Created with JetBrains PhpStorm.
 * User: stomblin
 * Date: 12/23/13
 * Time: 3:42 PM
 * To change this template use File | Settings | File Templates.
 */

var app = app || {};



function Usability(){

  this.readability = function(string){


        var arr = [];
        var a = string;

       // String.prototype.insertAt=function(index, string) {
       //     return this.substr(0, index) + string + this.substr(index);
       // }

        for(var i= 0; i<string.length; i++){
            if(i%45==0){
                arr.push ( a.substring(i,i+45)  );

            }
        }

        var finalString

        for(var i = 0; i < arr.length; i++){

            finalString += arr[i] + "<span id='readability'>X</span>";
            //console.log( finalString );

        }

        return finalString ;


     // return string ;

    }


};

//app.usability =  new Usability();

//console.log(app.usability);


app.NavView = Backbone.View.extend({

    el: $("#nav-target"),
    // Compile the template using underscore
    template : _.template( $("#nav-template").html() ),
    footer_el: $("#footer-target"),
    // Compile the template using underscore
    footer_template : _.template( $("#footer-template").html() ),

    initialize: function(options){

        this.options = options || {};
        this.render();
    },


    footer:[
    {"Name":"javascript",  "Frameworks":["BackBone.js", "AngularJS"] },
    {"Name":"HTML5", "About":"PhoneGap" },
    {"Name":"flash", "About":"OSMF" },
    {"Name":"css", "About":"" },
    {"Name":"photoshop", "About":"" },
    {"Name":"maya", "About":"" },
    {"Name":"backbone", "About":"" },
    {"Name":"angular", "About":"" },
    {"Name":"adobeair", "About":"" },
    {"Name":"starling", "About":"" },
    {"Name":"codeigniter", "About":"" },
    {"Name":"phonegap", "About":"" },
    {"Name":"createjs", "About":"" },
    {"Name":"php", "About":"Codeigniter" }

    ],

    render:function(){
      //  this.$el.html( this.template() );
        this.footer_el.html( this.footer_template({data:this.footer}) );
    }

});

app.MyView = Backbone.View.extend({

    list_el: $("#list-target"),
    // Compile the template using underscore
    list_template : _.template( $("#list-template").html() ),

    list_template_other : _.template( $("#list-template-other").html() ),


    content_el: $("#content-target"),

    // Compile the template using underscore
    portfolio_content_template : _.template( $("#portfolio-content-template").html() ),
    education_content_template : _.template( $("#education-content-template").html() ),
    process_content_template : _.template( $("#process-content-template").html() ),
    work_content_template : _.template( $("#work-content-template").html() ),

    footer_template : _.template( $("#footer-template").html() ),

    initialize: function(options){

        $('#md-close').click(function() {
            this.hideModal()
        }.bind(this));
        $('#md-overlay').click(function() {
            this.hideModal()
        }.bind(this));

        this.options = options || {};
        this.listenTo(this.model,'change', this.listrender);
        this.on('setContent', this.contentRender);
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
            this.listrender();

            if(this.options.loc != undefined ){
                console.log('setContent');
                this.trigger('setContent', this.options );
            }
        }


    },

    open : function () {



    },


    listrender:function(){



        switch(this.options.linkroute)
        {
            case 'projects':
                this.list_el.html( this.list_template({data:this.model.attributes[this.options.linkroute], linkroute:this.options.linkroute}) );
                break;
            case 'education':
                console.log('cool');
                this.list_el.html( this.list_template_other({data:this.model.attributes[this.options.linkroute], linkroute:this.options.linkroute}) );
             break;
            case 'process':
                this.list_el.html( this.list_template_other({data:this.model.attributes[this.options.linkroute], linkroute:this.options.linkroute}) );
             break;
            case 'work':
                this.list_el.html( this.list_template_other({data:this.model.attributes[this.options.linkroute], linkroute:this.options.linkroute}) );
          break;
            default:


        }

        for(var i = 0; i < this.model.attributes[this.options.linkroute].length; i++){
            $("#fittext"+i).fitText();
        }

        /*
        $('#modal-1').css('visibility','hidden');
        $('#md-overlay').css('visibility','hidden');

        this.list_el.html( this.list_template({data:this.model.attributes[this.options.linkroute], linkroute:this.options.linkroute}) );
        this.content_el.html('');

        //$('#bigtext').addClass('animated fadeIn');

        for(var i = 0; i < this.model.attributes[this.options.linkroute].length; i++){
            $("#fittext"+i).fitText();
        }
*/

    },

    contentRender:function(){

var string = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repella";

    //   alert('cool');
///*

       //$('#modal-1').css('visibility','hidden');

       //this.model.attributes[this.options.linkroute][this.options.loc].About = string//string + string;

        switch(this.options.linkroute)
        {
            case 'projects':
                console.log(this.options.item);
                //console.log(this.model.attributes[this.options.linkroute][this.options.loc].SubName[this.options.item]);
                this.showModal();
                this.content_el.html( this.portfolio_content_template({data:this.model.attributes[this.options.linkroute][this.options.loc].SubName[this.options.item]}) );

                break;
            case 'education':
               // this.showModal();
               // this.content_el.html( this.education_content_template({data:this.model.attributes[this.options.linkroute][this.options.loc].SubName[this.options.item]}) );
                break;
            case 'process':
               // this.showModal();
               // this.content_el.html( this.process_content_template({data:this.model.attributes[this.options.linkroute][this.options.loc].SubName[this.options.item]}) );
                break;
            case 'work':
              //  this.showModal();
               // this.content_el.html( this.work_content_template({data:this.model.attributes[this.options.linkroute][this.options.loc].SubName[this.options.item]}) );
                break;
            default:
                // default code
                this.content_el.html('test');

        }

     //   */

    },

    showModal:function(){

        $('#modal-1').css('visibility','visible');
        $('#modal-1').addClass('animated fadeIn');
        $('#md-overlay').css('visibility','visible');

       //


    },

    hideModal:function(){
        $('#modal-1').removeClass('animated fadeIn');
        $('#modal-1').css('visibility','hidden');
        $('#md-overlay').css('visibility','hidden');
        app_router.navigate(this.options.linkroute);

    }







});


app.MyViewPhone = Backbone.View.extend({

    list_el: $("#list-target"),
    // Compile the template using underscore
    content_el: $("#content-target1"),
    list_template : _.template( $("#list-template").html() ),
    portfolio_content_template : _.template( $("#portfolio-content-template").html() ),
    education_content_template : _.template( $("#education-content-template").html() ),
    process_content_template : _.template( $("#process-content-template").html() ),
    work_content_template : _.template( $("#work-content-template").html() ),

    initialize: function(options){

        $('#footer-target').click(function() {
            this.hideContent();
        }.bind(this));

        this.options = options || {};

        console.log('phone');

        //this.listrender();
        //this.showContent();

        this.listenTo(this.model,'change', this.listrender);
        this.on('setContent', this.contentRender);

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

            console.log('model already loaded');
            this.listrender();

            if(this.options.loc != undefined ){
                console.log('setContent');
                this.trigger('setContent', this.options );
            }
        }



    },

    contentRender:function(){

       // this.content_el.html( this.portfolio_content_template({data:this.model.attributes[this.options.linkroute][this.options.loc]}) );
        this.content_el.html( this.portfolio_content_template({data:this.model.attributes[this.options.linkroute][this.options.loc].SubName[this.options.item]}) );

        this.showContent();



    },

    listrender:function(){



        console.log(this.options);

        this.list_el.html( this.list_template({data:this.model.attributes[this.options.linkroute], linkroute:this.options.linkroute}) );
      //  this.content_el.html('');

       // $('#bigtext').addClass('animated fadeIn');

     //   for(var i = 0; i < this.model.attributes[this.options.linkroute].length; i++){
     //       $("#fittext"+i).fitText();
     //   }

        for(var i = 0; i < this.model.attributes[this.options.linkroute].length; i++){
            $("#fittext"+i).fitText();
        }


    },

    render:function(){


        this.list_el.html( '');
        this.content_el.html('');

    },


    showContent:function(){
       // $('#list-target').removeClass('animated slideOutLeft');
      //  $('#list-target').addClass('animated slideInLeft');

        $('#content-target1').removeClass('animated slideOutRight');
        $('#content-target1').css('visibility','visible');
        $('#content-target1').addClass('animated slideInRight');
        setTimeout(function(){

            this.list_el.html( '');

        }.bind(this), 1000);



    },

    hideContent:function(){

        this.listrender();
       // $('#list-target').removeClass('animated slideOutLeft');
       // $('#list-target').addClass('animated slideInLeft');
        $('#content-target1').removeClass('animated slideInRight');
        $('#content-target1').addClass('animated slideOutRight');
       //$('#content-target1').css('visibility','hidden');


        app_router.navigate(this.options.linkroute);

    }


});



