'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users');
	var thelinks = require('../../app/controllers/thelinks');

	// Thelinks Routes
	app.route('/thelinks')
		.get(thelinks.list)
		.post(users.requiresLogin, thelinks.create);

	app.route('/thelinks/:thelinkId')
		.get(thelinks.read)
		.put(users.requiresLogin, thelinks.hasAuthorization, thelinks.update)
		.delete(users.requiresLogin, thelinks.hasAuthorization, thelinks.delete);

	// Finish by binding the Thelink middleware
	app.param('thelinkId', thelinks.thelinkByID);
};