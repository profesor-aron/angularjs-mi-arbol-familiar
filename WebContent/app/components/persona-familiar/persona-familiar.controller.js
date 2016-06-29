(function() {
    'use strict';

	angular
	    .module("main")
	    .controller("PersonaFamiliarController", PersonaFamiliarController);

	function PersonaFamiliarController($locale, i18nService) {

		var lenguaje = $locale.id;

		i18nService.setCurrentLang(lenguaje);

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

		vm.gridOptions = {
			paginationPageSizes: [2, 5, 10],
		    paginationPageSize: 2,
			enableFiltering: true,
			enableRowSelection: true,
			selectionRowHeaderWidth: 35,
			rowHeight: 35,
			enableSelectAll: false,
			showGridFooter:false,
			multiSelect: false
		};

		vm.gridOptions.columnDefs = [
		    { name: 'Nombres', field: 'nombres' },
			{ name: 'Apellidos', field: 'apellidos'},
			{ name: 'Sexo', field: 'sexo.contenido'},
			{ name: 'Estado', field: 'estado.contenido'}
		];

		vm.gridOptions.data = [
		    {
		    	"id": 1,
		    	"nombres": "Julio Cesar",
		    	"apellidos": "Lopez Perez",
		    	"sexo": {"id":"1","contenido":"Masculino"},
		    	"estado":{"id":"1","contenido":"Con vida"}
		    },
		    {
		    	"id": 2,
		    	"nombres": 'Ana Luisa',
		    	"apellidos": 'Torres Prado',
		    	"sexo": {"id":"1","contenido":"Femenino"},
		    	"estado":{"id":"1","contenido":"Con vida"}
		    },
		    {
		    	"id": 3,
		    	"nombres": 'Maria Luisa',
		    	"apellidos": 'Torres Prado',
		    	"sexo": {"id":"1","contenido":"Femenino"},
		    	"estado":{"id":"1","contenido":"Fallecido"}
		    },
		    {
		    	"id": 4,
		    	"nombres": 'Cecilia',
		    	"apellidos": 'Torres Prado',
		    	"sexo": {"id":"1","contenido":"Femenino"},
		    	"estado":{"id":"1","contenido":"Con vida"}
		    },
		    {
		    	"id": 5,
		    	"nombres": "Luis Fernando",
		    	"apellidos": "Lopez Perez",
		    	"sexo": {"id":"1","contenido":"Masculino"},
		    	"estado":{"id":"1","contenido":"Fallecido"}
		    },
		    {
		    	"id": 6,
		    	"nombres": "Luis Fernando",
		    	"apellidos": "Lopez Perez",
		    	"sexo": {"id":"1","contenido":"Masculino"},
		    	"estado":{"id":"1","contenido":"Con vida"}
		    }
		];

		//vm.gridOptions.data = [];

	}

})();