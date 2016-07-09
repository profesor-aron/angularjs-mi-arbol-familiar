angular
    .module('main')
    .directive('aehpInputText', aehpInputText); // aehp-input-text

// <aehp-input-text></aehp-input-text>
function aehpInputText() {
    var directive = {
        restrict: 'E',
        templateUrl: 'app/shared/directives/form/input-text/aehp-input-text.directive.html',
        scope: {
        	etiqueta: "@",
        	requerido: '@?',
        	placeholder: '@?',
            modelo: '=',
            error: '=?'
        }
    };

    return directive;
}