'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Thelink Schema
 */
var ThelinkSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Thelink name',
		trim: true
	},
	url: {
		type: String,
		default: '',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Thelink', ThelinkSchema);