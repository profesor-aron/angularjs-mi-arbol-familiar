// IIFE
// Immediately Invoked Function Expression (IIFE)
(function() {
    'use strict';

    angular.module("main")
    	.config(AppConfigLocalStorage)
    	.config(AppConfigGrowl);

	function AppConfigLocalStorage(localStorageServiceProvider) {
		localStorageServiceProvider.setPrefix('miArbolFamiliar');
	};

	function AppConfigGrowl(growlProvider) {
		growlProvider.globalTimeToLive(3000);
		growlProvider.globalPosition('top-center');
	};

})();