angular.module("myApp")
.controller("getStudents", function($scope, $rootScope, getInfoService ) {
	$scope.getStudents = function(e) {
		e.preventDefault();
		getInfoService.getJSON()
		.then( function(response) {
			$scope.studentList = response.data
			console.log($scope.studentList)
		})


	}

})

