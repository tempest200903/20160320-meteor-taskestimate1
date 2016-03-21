if (Meteor.isClient) {
    // counter starts at 0
    Session.setDefault('counter', 0);

    Template.hello.helpers({
	counter: function () {
	    return Session.get('counter');
	}
    });

    Template.hello.events({
	'click button': function () {
	    // increment the counter when button is clicked
	    Session.set('counter', Session.get('counter') + 1);
	}
    });

    Template.nametag.helpers({
	// name: "Ben Bitdiddle"
    });

    Template.welcomePage.helpers({
	people: [{name: "Bob"}, {name: "Frank"}, {name: "Alice"}]
    });

    Template.profilePage.helpers({
	username: function(){
	    return Meteor.user() && Meteor().username;
	}
    });

    Template.post.helpers({
	commentCount: function (numComments) {
	    if (numComments === 1) {
		return "1 comment";
	    } else {
		return numComments + " comments";
	    }
	}
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
	// code to run on server at startup
    });
}
