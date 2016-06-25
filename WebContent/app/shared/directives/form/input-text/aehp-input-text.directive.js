angular
    .module('main')
    .directive('aehpInputText', aehpInputText);

function aehpInputText() {
    var directive = {
        restrict: 'E',
        templateUrl: 'app/shared/directives/form/input-text/aehp-input-text.directive.html',
        scope: {
        	etiqueta: '@',
        	requerido: '@?',
        	placeholder: '@?',
            modelo: '='
        }
    };

    return directive;
}