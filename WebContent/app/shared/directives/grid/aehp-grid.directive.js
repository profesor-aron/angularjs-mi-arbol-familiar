angular
    .module('main')
    .directive('aehpGrid', aehpGrid);

function aehpGrid() {
    var directive = {
        restrict: 'E',
        templateUrl: 'app/shared/directives/grid/aehp-grid.directive.html',
        scope: {
        	options: '='
        },
        link: link
    };

    return directive;

    function link(scope) {

    	var gridOptions = {
			paginationPageSizes: [2, 5, 10],
		    paginationPageSize: 2,
			enableFiltering: true,
			enableRowSelection: true,
			selectionRowHeaderWidth: 35,
			rowHeight: 35,
			enableSelectAll: false,
			showGridFooter:false,
			multiSelect: false
		};

    	scope.gridOptions = gridOptions;

    	angular.extend(scope.gridOptions, scope.options);

    }
}