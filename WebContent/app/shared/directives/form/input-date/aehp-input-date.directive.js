angular
    .module('main')
    .directive('aehpInputDate', aehpInputDate);

function aehpInputDate() {
    var directive = {
        restrict: 'E',
        templateUrl: 'app/shared/directives/form/input-date/aehp-input-date.directive.html',
        scope: {
        	etiqueta: '@',
        	requerido: '@?',
            modelo: '='
        },
        link: link
    };

    return directive;

    function link(scope) {

    	scope.popup = {
		    opened: false
    	};

    	scope.placeholder = 'dd/mm/yyyy';
    	scope.format = 'dd/MM/yyyy';

    	scope.open = function() {
    		scope.popup.opened = true;
		};

		scope.dateOptions = {
			startingDay: 1
		};

    }
}