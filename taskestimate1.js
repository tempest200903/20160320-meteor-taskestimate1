// Tasks = new Mongo.Collection("tasks");

// Tasks.insert({
//     owner: Meteor.userId(),
//     createdAt: new Date(),
//     title: "task1"
// });

if (Meteor.isClient) {
    Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
    });
}

if (Meteor.isServer) {
}
