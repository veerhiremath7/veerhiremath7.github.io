	angular.module("textAngularTest", ['textAngular']);
	function wysiwygeditor($scope) {
		$scope.orightml = '<h2>Try me!</h2>';
		$scope.htmlcontent = $scope.orightml;
		$scope.disabled = false;
	};
