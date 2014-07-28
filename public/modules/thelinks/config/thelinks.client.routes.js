'use strict';

//Setting up route
angular.module('thelinks').config(['$stateProvider',
	function($stateProvider) {
		// Thelinks state routing
		$stateProvider.
		state('thelinks', {
			url: '/thelinks',
			templateUrl: 'modules/thelinks/views/thelinks.client.view.html'
		}).
		state('listThelinks', {
			url: '/thelinks',
			templateUrl: 'modules/thelinks/views/list-thelinks.client.view.html'
		}).
		state('createThelink', {
			url: '/thelinks/create',
			templateUrl: 'modules/thelinks/views/create-thelink.client.view.html'
		}).
		state('viewThelink', {
			url: '/thelinks/:thelinkId',
			templateUrl: 'modules/thelinks/views/view-thelink.client.view.html'
		}).
		state('editThelink', {
			url: '/thelinks/:thelinkId/edit',
			templateUrl: 'modules/thelinks/views/edit-thelink.client.view.html'
		});
	}
]);