angular
    .module('main')
    .directive('selectItem', selectItem);

function selectItem() {
    var directive = {
        restrict: 'E',
        templateUrl: 'app/shared/form/select-item/select-item.directive.html',
        scope: {
        	etiqueta: '@',
        	requerido: '@?',
        	lista: '=',
            modelo: '='
        }
    };

    return directive;
}