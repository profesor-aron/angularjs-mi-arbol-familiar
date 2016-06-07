(function() {
    'use strict';

    angular.module("main").config(AppRoutes);

	function AppRoutes($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/arbol-familiar");

		$stateProvider
	    .state('arbol-familiar', {
	      url: "/arbol-familiar",
	      templateUrl: "app/components/arbol-familiar/arbol-familiar.view.html",
	      controller: 'ArbolFamiliarController',
          controllerAs: 'arbolFamiliarVm'
	    })
	    .state('persona-familiar', {
	      url: "/persona-familiar",
	      templateUrl: "app/components/persona-familiar/persona-familiar.view.html",
	      controller: 'PersonaFamiliarController',
          controllerAs: 'personaFamiliarVm'
	    })
	    ;

	};

})();