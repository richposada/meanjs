'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Thelink = mongoose.model('Thelink'),
	_ = require('lodash');

/**
 * Get the error message from error object
 */
var getErrorMessage = function(err) {
	var message = '';

	if (err.code) {
		switch (err.code) {
			case 11000:
			case 11001:
				message = 'Thelink already exists';
				break;
			default:
				message = 'Something went wrong';
		}
	} else {
		for (var errName in err.errors) {
			if (err.errors[errName].message) message = err.errors[errName].message;
		}
	}

	return message;
};

/**
 * Create a Thelink
 */
exports.create = function(req, res) {
	var thelink = new Thelink(req.body);
	thelink.user = req.user;

	thelink.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(thelink);
		}
	});
};

/**
 * Show the current Thelink
 */
exports.read = function(req, res) {
	res.jsonp(req.thelink);
};

/**
 * Update a Thelink
 */
exports.update = function(req, res) {
	var thelink = req.thelink ;

	thelink = _.extend(thelink , req.body);

	thelink.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(thelink);
		}
	});
};

/**
 * Delete an Thelink
 */
exports.delete = function(req, res) {
	var thelink = req.thelink ;

	thelink.remove(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(thelink);
		}
	});
};

/**
 * List of Thelinks
 */
exports.list = function(req, res) { Thelink.find().sort('-created').populate('user', 'displayName').exec(function(err, thelinks) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(thelinks);
		}
	});
};

/**
 * Thelink middleware
 */
exports.thelinkByID = function(req, res, next, id) { Thelink.findById(id).populate('user', 'displayName').exec(function(err, thelink) {
		if (err) return next(err);
		if (! thelink) return next(new Error('Failed to load Thelink ' + id));
		req.thelink = thelink ;
		next();
	});
};

/**
 * Thelink authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.thelink.user.id !== req.user.id) {
		return res.send(403, 'User is not authorized');
	}
	next();
};