Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
    Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
    });
    if (Meteor.userId()){
	Template.body.helpers({
	    tasks: function () {
		return Tasks.find({});
	    }
	});
    }
    Template.body.events({
	"submit .new-task": function (event) {
	    event.preventDefault();
	    var text = event.target.text.value;
	    Tasks.insert({
		owner: Meteor.userId(),
		createdAt: new Date(),
		title: text
	    });
	    event.target.text.value = "";
	},
	"click .toggle-checked": function () {
	    Tasks.update(this._id, {
		$set: {checked: ! this.checked}
	    });
	},
	"click .delete": function () {
	    Tasks.remove(this._id);
	}
    });
}

if (Meteor.isServer) {
}
