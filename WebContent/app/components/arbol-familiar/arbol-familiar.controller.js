(function() {
    'use strict';

	angular
	    .module("main")
	    .controller("ArbolFamiliarController", ArbolFamiliarController);

	function ArbolFamiliarController(DataService) {// No se usa $scope

		var vm = this; // ControllerAs

		vm.gridOptions = {};

		vm.gridOptions.columnDefs = [
		   { name: 'nombres' },
	       { name: 'apellidos' },
	       { name: 'sexo',  field: 'sexo.contenido' },
	       { name: 'estado', field: 'estado.contenido' }
	    ];

		vm.gridOptions.data = [];

		vm.gridOptions.data = DataService.recuperarRegistros("personas");

		vm.gridOptions.fnSelection = recuperarRegistroSelecionado;

		function recuperarRegistroSelecionado(registro) {
			vm.persona = angular.copy(registro);
			vm.persona.pariente = vm.persona.pariente.nombres + " " + vm.persona.pariente.apellidos;
			vm.persona.papa = vm.persona.papa.nombres + " " + vm.persona.papa.apellidos;
			vm.persona.mama = vm.persona.mama.nombres + " " + vm.persona.mama.apellidos;
		}

	}

})();