angular.module("myApp")
.factory('getInfoService', function($http) {

	function getJSON(fieldName) {
		return $http.get("http://localhost:3000/data");
	}
	return {
		getJSON: getJSON,
	}
})