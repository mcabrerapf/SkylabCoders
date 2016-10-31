angular.module("myApp", ['ngRoute'])
.config( function($routeProvider) {

	$routeProvider
	.when('/', {
		templateUrl: 'views/nowPlaying.html',
		controller: 'nowPlayingController'
	})
	.when('/popular', {
		templateUrl: 'views/popular.html',
		controller: 'popularController'
	})
	.when('/topRated', {
		templateUrl: 'views/topRated.html',
		controller: 'topRatedController'
	})
	.when('/upcoming', {
		templateUrl: 'views/upcoming.html',
		controller: 'upcomingdController'
	})
	.otherwise({redirectTo: '/'});

})


// c