'use strict';

// Configuring the Articles module
angular.module('thelinks').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Thelinks', 'thelinks', 'dropdown', '/thelinks(/create)?');
		Menus.addSubMenuItem('topbar', 'thelinks', 'List Thelinks', 'thelinks');
		Menus.addSubMenuItem('topbar', 'thelinks', 'New Thelink', 'thelinks/create');
	}
]);