angular
    .module('main')
    .directive('aehpGrid', aehpGrid); // aehp-grid

// <aehp-grid></aehp-grid>
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
			paginationPageSizes: [25, 50, 75],
		    paginationPageSize: 25,
		    enableFiltering: true,
			enableRowSelection: false,
			enableRowHeaderSelection: false, // true por defecto
		    selectionRowHeaderWidth: 35,
		    rowHeight: 35,
		    enableSelectAll: false,
		    showGridFooter: false,
		    multiSelect: false
		};

		if(angular.isDefined(scope.options.fnSelection)) {
			scope.gridOptions.enableRowHeaderSelection = true;
		}

		angular.extend(scope.gridOptions, scope.options);

		scope.gridOptions.onRegisterApi = function(gridApi) {

			gridApi.selection.on.rowSelectionChanged(scope, function(row) {
				scope.gridOptions.fnSelection(row.entity);
			});

	    };

    }
}