Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
    Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
    });
    if (Meteor.userId()){
	Tasks.insert({
	    owner: Meteor.userId(),
	    createdAt: new Date(),
	    title: "task1"
	});
	Template.body.helpers({
	    tasks: function () {
		return Tasks.find({});
	    }
	});
    }
}

if (Meteor.isServer) {
}
