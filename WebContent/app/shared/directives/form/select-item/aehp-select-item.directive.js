angular
    .module('main')
    .directive('aehpSelectItem', aehpSelectItem);

function aehpSelectItem() {
    var directive = {
        restrict: 'E',
        templateUrl: 'app/shared/directives/form/select-item/aehp-select-item.directive.html',
        scope: {
        	etiqueta: '@',
        	requerido: '@?',
        	lista: '=',
        	clave: '@',
        	valor: '@',
            modelo: '='
        }
    };

    return directive;
}