Tasks = new Mongo.Collection("tasks");
TaskPackages = new Mongo.Collection("taskPackages");

if (Meteor.isClient) {
    Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
    });
    if (Meteor.userId()){
	Template.body.helpers({
	    tasks: function () {
		return Tasks.find({});
	    },
	    taskPackages: function () {
		return TaskPackages.find({});
	    }
	});
    }
    Template.body.events({
	"submit .new-task-package": function (event) {
	    event.preventDefault();
	    var text = event.target.text.value;
	    TaskPackages.insert({
		owner: Meteor.userId(),
		createdAt: new Date(),
		title: text
	    });
	    event.target.text.value = "";
	},
	"submit .new-task": function (event) {
	    event.preventDefault();
	    var text = event.target.text.value;
	    Tasks.insert({
		owner: Meteor.userId(),
		createdAt: new Date(),
		title: text,
		estimateTime: 0
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
	},
	"change .estimateTime": function () {
	    Tasks.update(this._id, {
		$set: {estimateTime: event.target.value}
	    });
	}
    });
}

if (Meteor.isServer) {
}
