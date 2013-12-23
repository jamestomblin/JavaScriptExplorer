/**
 * Created with JetBrains PhpStorm.
 * User: stomblin
 * Date: 12/23/13
 * Time: 9:11 AM
 * To change this template use File | Settings | File Templates.
 */




var addUser = function (data) {

    var self = this;
    self.searchTerms = ko.observable();
    self.searchEnabled = ko.observable(true);
    self.firstName = ko.observable();
    self.lastName = ko.observable();
    self.universityId = ko.observable();
    self.hawkId = ko.observable();
    self.emailAddress = ko.observable();
    self.canNotify = ko.observable(true);
    self.selectedRoles = ko.observableArray();
    this.roles = ko.observableArray([{ label: "Initiator", id: 1 }, { label: "Shepherd", id: 2 }, { label: "ApplicationAdmin", id: 3 }, { label: "Reviewer", id: 4 }]);
    self.display = function() {
        return function() {
            console.log("Search Terms:" + self.searchTerms());
        };
    };
    self.doSomething = function () {
        console.log("Roles: " + self.roles().length);
        $.each(self.roles(), function(index, value) {
            console.log("selected: " + value.name);
        });
    };

    self.enableManualAdd = function() {
        self.searchEnabled(false);
    };

    self.searchUsers = function(request,response) {
        console.log("Term: " + request.term);
        response([
            { Firstname: "Harrison", Lastname: "Gladden", DirectoryID: "012345678", HawkID: "hgladden", EmailAddress: "harrison-gladden@uiowa.edu" },
            { Firstname: "Jerry", Lastname: "Gladden", DirectoryID: "012345678", HawkID: "jGladden", EmailAddress: "jerry-gladden@uiowa.edu" }
        ]);
    };
    self.selectUser = function(event,ui) {
        $(event.target).val("");
        self.firstName(ui.item.Firstname);
        self.lastName(ui.item.Lastname);
        self.hawkId(ui.item.HawkID);
        self.universityId(ui.item.DirectoryID);
        self.emailAddress(ui.item.EmailAddress);
        return false;
    };
    self.userRender = function(item) {
        return item.Lastname + ", " + item.Firstname + " (" + item.HawkID + ")";
    };
    self.loadRoles = function (data) {
        console.log("In data:" + self.roles().length);
        self.roles(data);
        console.log("In data:" + self.roles().length);
    };
    /* duplicate??
    self.loadRoles = function (data) {
        console.log("In data:" + self.roles().length);
        self.roles(data);
        console.log("In data:" + self.roles().length);
    };
    */
    return {
        doSomething: self.doSomething,
        loadRoles: self.loadRoles,
        selectedRoles: self.selectedRoles,
        canNotify: self.canNotify,
        userRender : self.userRender,
        searchUsers: self.searchUsers,
        selectUser: self.selectUser,
        searchTerms: self.searchTerms,
        searchEnabled: self.searchEnabled,
        firstName: self.firstName,
        lastName: self.lastName,
        universityId: self.universityId,
        hawkId: self.hawkId,
        emailAddress: self.emailAddress,
        displayFunc: self.display()
    };
};




$(document).ready( function(){




    ko.applyBindings((function(){
        var model = window.addUser();

        console.log(model)

        model.loadRoles([{name:'My new Role',id:1}]);

        model.doSomething();

        return model;
    })());


})


