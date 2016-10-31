angular.module('myApp')
	.factory('movieService', function($http) {

			function getPopular() {
				return $http.get("https://api.themoviedb.org/3/movie/popular?api_key=f95ca83c3e18101717f878f6c0c8ae10&language=en-US");
			}

			function getNowPlaying () {
				return $http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=f95ca83c3e18101717f878f6c0c8ae10&language=en-US");
			}

			function getTopRated () {
				return $http.get("https://api.themoviedb.org/3/movie/top_rated?api_key=f95ca83c3e18101717f878f6c0c8ae10&language=en-US");
			}

			function getUpcoming () {
				return $http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=f95ca83c3e18101717f878f6c0c8ae10&language=en-US");
			}
			function getPoster (posterId) {
				return $http.get("https://api.themoviedb.org/3/movie/" + posterId + "/images?api_key=f95ca83c3e18101717f878f6c0c8ae10&language=en-US");
			}
			return {
				getPopular: getPopular,
				getNowPlaying: getNowPlaying,
				getTopRated: getTopRated,
				getUpcoming: getUpcoming,
				getPoster: getPoster
			}
		

	})
