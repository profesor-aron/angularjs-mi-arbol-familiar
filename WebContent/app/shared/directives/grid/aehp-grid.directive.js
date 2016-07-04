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

    	scope.gridOptions = {
			paginationPageSizes: [2, 5, 10],
		    paginationPageSize: 2,
			enableFiltering: true,
			selectionRowHeaderWidth: 35,
			rowHeight: 35,
			enableRowSelection: false, // no necesario si hay enableRowHeaderSelection
			enableRowHeaderSelection: false, // true por defecto
			enableSelectAll: false,
			showGridFooter:false,
			multiSelect: false
		};

    	angular.extend(scope.gridOptions, scope.options);

    	if(existFnSelectRow()) {
    		gridOptions.enableRowHeaderSelection = true;
    	}

    	scope.gridOptions.onRegisterApi = function(gridApi) {

    		gridApi.selection.on.rowSelectionChanged(scope, function(row) {
    		  scope.gridOptions.fnSelectRow(row.entity);
    	    });

	    };

	    function existFnSelectRow() {
	      return angular.isDefined(scope.options.fnSelectRow);
	    }

    }
}