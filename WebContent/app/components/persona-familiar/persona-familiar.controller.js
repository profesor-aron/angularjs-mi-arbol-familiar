(function() {
    'use strict';

	angular
	    .module("main")
	    .controller("PersonaFamiliarController", PersonaFamiliarController);

	function PersonaFamiliarController($locale, i18nService, DataService, growl) {// No se usa $scope

		var vm = this; // ControllerAs

		i18nService.setCurrentLang($locale.id);
		
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

		vm.referencias.parentescos = [
  			{id: '1', contenido: 'Esposo'},
  			{id: '2', contenido: 'Esposa'},
  			{id: '3', contenido: 'Hijo'},
  			{id: '4', contenido: 'Hija'},
  			{id: '5', contenido: 'Hermano'},
  			{id: '6', contenido: 'Hermana'}
  		];

		vm.gridOptions = {};

		vm.gridOptions.columnDefs = [
		   { name: 'nombres' },
	       { name: 'apellidos' },
	       { name: 'sexo',  field: 'sexo.contenido' },
	       { name: 'estado', field: 'estado.contenido' }
	    ];

		recuperarRegistrosVentanaModal();

		vm.actions = {};
		vm.actions.registrar = registrar;

		vm.errores = {};

		function registrar() {
			if(validarFormulario()) {
				// Preguntamos si existe el identificador
				if(angular.isDefined(vm.modelo.id)) {
					// Hay que actualizar el registro ya existente
					DataService.actualizarRegistro("personas", vm.modelo);
				} else {
					// Generamos el identificador
					vm.modelo.id = Date.now();
					// insertamos un nuevo elemento al arreglo "personas"
					// de la base de datos
					DataService.insertarRegistro("personas", vm.modelo);
				}
				// recuperamos los datos a mostrar en la ventana modal
				recuperarRegistrosVentanaModal();
				//alert("OK para registrar");
				growl.success("Operación realizada con éxito");
			}
		}

		function validarFormulario() {

			var propNombres = "nombres";
			var msgErrorNombres = "Ingrese el contenido del campo 'Nombres'.";
			var propApellidos = "apellidos";
			var msgErrorApellidos = "Ingrese el contenido del campo 'Apellidos'.";
			var propSexo = "sexo";
			var msgErrorSexo = "Seleccione el contenido del campo 'Sexo'.";
			var propEstado = "estado";
			var msgErrorEstado = "Seleccione el contenido del campo 'Estado'.";
			
			var esValidoNombres = validarCampoDelFormulario(propNombres, msgErrorNombres);
			var esValidoApellidos = validarCampoDelFormulario(propApellidos, msgErrorApellidos);
			var esValidoSexo = validarCampoDelFormulario(propSexo, msgErrorSexo);
			var esValidoEstado = validarCampoDelFormulario(propEstado, msgErrorEstado);
			
			var esValido = esValidoNombres && esValidoApellidos &&
				esValidoSexo && esValidoEstado;

			return esValido;
		}

		function validarCampoDelFormulario(propiedad, msgError) {
			
			var campo = vm.modelo[propiedad];

			vm.errores[propiedad] = null;

			if (angular.isUndefined(campo) || campo === "") {
				vm.errores[propiedad] = msgError;
				return false;
			}

			return true;
		}

		function recuperarRegistrosVentanaModal() {
			vm.gridOptions.data = DataService.recuperarRegistros("personas");
		}

	}

})();