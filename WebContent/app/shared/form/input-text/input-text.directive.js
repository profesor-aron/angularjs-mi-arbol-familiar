angular
    .module('main')
    .directive('inputText', inputText);

function inputText() {
    var directive = {
        restrict: 'E',
        templateUrl: 'app/shared/form/input-text/input-text.directive.html',
        scope: {
        	etiqueta: '@',
        	requerido: '@?',
        	placeholder: '@?',
            modelo: '='
        }
    };

    return directive;
}