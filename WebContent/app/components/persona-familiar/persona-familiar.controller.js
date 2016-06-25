(function() {
    'use strict';

	angular
	    .module("main")
	    .controller("PersonaFamiliarController", PersonaFamiliarController);

	function PersonaFamiliarController() {

		var vm = this;

		vm.modelo = {};
		vm.referencias = {};

		vm.referencias.sexos = [
			{id: '1', contenido: 'Masculino'},
			{id: '2', contenido: 'Femenino'},
			{id: '3', contenido: 'No definido'}
		];

		vm.referencias.estados = [
			{id: '1', contenido: 'Con vida'},
			{id: '2', contenido: 'Fallecido'}
		];

	}

})();