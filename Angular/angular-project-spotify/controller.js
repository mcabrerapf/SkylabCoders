angular.module('myApp')
.controller('myController', function($scope, spotifyService) {



	// $scope.title = "SpotiFinder 🎶 😎"

	// $scope.findArtists = function(e) {
	// 	e.preventDefault();
	// 	spotifyService.getArtists($scope.artistQuery)
	// 	.then( function(response) {
	// 		console.log(response)
	// 		$scope.artists = response.data.artists.items;
	// 	})
	// }

	// $scope.findAlbums = function() {
		
	// 	spotifyService.getAlbums($scope.idArtist)
	// 	.then( function(response) {
	// 		console.log(response)
	// 		$scope.albums = response.data.items;
	// 		//$scope.cover = response
	// 	} )
	// }



	// $scope.findTracks = function() {
	// 	spotifyService.getTracks($scope.idAlbums)
	// 	.then( function(response) {
	// 		console.log(response)
	// 		$scope.tracks = response.data.items;

	// 	} )
	// }

	
})