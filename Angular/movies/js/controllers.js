angular.module("myApp")
.controller("nowPlayingController", function($scope, $rootScope) {
	$rootScope.activetab = 'nowPlaying';
	$scope.intro = 'Now Playing'

})
.controller("popularController", function($scope, $rootScope, movieService) {
	$scope.title = "Popular"
	$rootScope.activetab = 'popular';

	$scope.findPopular = function(e) {

		movieService.getPopular()
		.then( function(response) {
			console.log(response)
			$scope.movie_titles = response.data.results
			$scope.movie_overview = response.data.results

			movieService.getPoster()
;

		})
	}



})
.controller("topRatedController", function($scope, $rootScope) {
	$scope.title = "Top Rated"
	$rootScope.activetab = 'topRated';



})
.controller("upcomingdController", function($scope, $rootScope) {
	$scope.title = "Up and Coming"
	$rootScope.activetab = 'upcoming';



})



