angular
    .module('main')
    .directive('aehpDisplayText', aehpDisplayText); // aehp-display-text

// <aehp-display-text></aehp-display-text>
function aehpDisplayText() {
    var directive = {
        restrict: 'E',
        templateUrl: 'app/shared/directives/form/display-text/aehp-display-text.directive.html',
        scope: {
        	etiqueta: "@",
            texto: '='
        }
    };

    return directive;
}