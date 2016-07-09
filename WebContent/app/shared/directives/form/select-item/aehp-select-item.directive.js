angular
    .module('main')
    .directive('aehpSelectItem', aehpSelectItem); // <aehp-select-item></aehp-select-item>

function aehpSelectItem() {
    var directive = {
        restrict: 'E',
        templateUrl: 'app/shared/directives/form/select-item/aehp-select-item.directive.html',
        scope: {
        	etiqueta: '@',
        	requerido: '@?',
        	placeholder: '@?',
        	lista: '=',
        	clave: '@',
        	valor: '@',
            modelo: '=',
            error: '=?'
        }
    };

    return directive;
}