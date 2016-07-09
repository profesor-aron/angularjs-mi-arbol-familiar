angular
    .module('main')
    .directive('aehpErrorMessage', aehpErrorMessage); // aehp-error-message

// <aehp-error-message></aehp-error-message>
function aehpErrorMessage() {
    var directive = {
        restrict: 'E',
        templateUrl: 'app/shared/directives/form/error-message/aehp-error-message.directive.html',
        scope: {
            error: '='
        }
    };

    return directive;
}