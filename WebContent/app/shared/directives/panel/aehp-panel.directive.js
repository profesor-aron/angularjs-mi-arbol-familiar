angular
    .module('main')
    .directive('aehpPanel', aehpPanel); // aehp-panel

// restrict E = declarar la directiva como elemento,  <aehp-panel></aehp-panel>
// restrict A = declarar la directiva como atributo de un elemento,
//              <div aehp-panel></div> 
// restrict EA = habilitado para usarlo como elemento o como atributo

function aehpPanel() {
    var directive = {
        restrict: 'E',
        transclude: true,
        templateUrl: 'app/shared/directives/panel/aehp-panel.directive.html',
        scope: {
        	titulo: "@"
        }
    };

    return directive;
}