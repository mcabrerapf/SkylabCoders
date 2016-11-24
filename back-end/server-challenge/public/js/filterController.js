angular.module("myApp")
.controller("filterStudents", function($scope, $rootScope, getInfoService ) {
	$scope.filterStudents = function(e) {
		e.preventDefault();
		getInfoService.getJSON()
		.then( function(response) {
			$scope.studentList = response.data
			console.log($scope.studentList)
		function filterByName(obj) {
			if (obj.name.toUpperCase().indexOf($scope.studentName.toUpperCase()) > -1) {
				console.log("true")
				return true;
			} else {
				return false;
			}
		}
		console.log($scope.studentName)
		$scope.studentsByName = $scope.studentList.filter(filterByName);
		console.log($scope.studentsByName )
		})
	}

})