angular
    .module('main')
    .directive('aehpSelectEntity', aehpSelectEntity); // aehp-select-entity

// <aehp-select-entity></aehp-select-entity>
function aehpSelectEntity($uibModal) {
    var directive = {
        restrict: 'E',
        templateUrl: 'app/shared/directives/form/select-entity/aehp-select-entity.directive.html',
        scope: {
        	titulo: "@",
        	etiqueta: "@",
        	requerido: '@?',
        	placeholder: '@?',
        	gridOptions: '=',
            modelo: '='
        },
        link: link
    };

    return directive;

    function link(scope) {

    	scope.open = open;

    	function open() {

    		var modalInstance = $uibModal.open({
		      animation: false,
		      templateUrl: 'app/shared/directives/form/select-entity/aehp-modal-select-entity.view.html',
		      controller: 'ModalSelectEntityController',
		      size: 'lg',
		      resolve: {
		    	options: function () {
		          return {
		        	  titulo: scope.titulo,
		        	  gridOptions: scope.gridOptions
		          };
		        }
		      }
		    });

		    modalInstance.result.then(function (entity) {
		      scope.modelo = entity;
		    }, null);

    	}

    }

}