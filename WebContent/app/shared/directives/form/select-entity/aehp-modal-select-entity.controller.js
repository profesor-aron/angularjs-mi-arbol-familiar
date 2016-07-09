angular
    .module('main')
    .controller('ModalSelectEntityController', ModalSelectEntityController);

function ModalSelectEntityController($scope, $uibModalInstance, options) {

	$scope.titulo = options.titulo;
	$scope.gridOptions = options.gridOptions;

	// Agregar nosotros una función de selección interna
	// para guardar el elemento seleccionado.
	$scope.gridOptions.fnSelection = recuperarRegistroSelecionado;

	function recuperarRegistroSelecionado(registro) {

		$scope.selectedEntity = registro;

	}

	$scope.ok = function () {
	    $uibModalInstance.close($scope.selectedEntity);
	};

	$scope.cancel = function () {
	    $uibModalInstance.dismiss('cancel');
	};

}