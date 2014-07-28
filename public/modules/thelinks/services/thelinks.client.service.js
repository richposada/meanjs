'use strict';

//Thelinks service used to communicate Thelinks REST endpoints
angular.module('thelinks').factory('Thelinks', ['$resource',
	function($resource) {
		return $resource('thelinks/:thelinkId', { thelinkId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);