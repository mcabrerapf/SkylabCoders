angular.module('myApp')
.controller('myController', function($scope) {

	$scope.f1p = function(e){
		e.preventDefault()
		console.log("yes")
		var n1 = $scope.f1a
		var n2 = $scope.f1b
		$scope.error1a = ""
		$scope.error2a = ""
		if(isNaN(n1)=== true &&	 isNaN(n2)=== true){
			$scope.error1a = "Your first input isnt a Number!!!"
			$scope.error2a = "Your second input isnt a Number!!!"
		}else if(isNaN(n1)=== true){
			$scope.error1a = "Your first input isnt a Number!!!"
		}else if(isNaN(n2)===true){
			$scope.error2a = "Your second input isnt a Number!!!"
		}else{
			$scope.result1 = (parseFloat(n1)/100) * parseFloat(n2)
			console.log($scope.result1)
		}
	}


	$scope.f2p = function(e){
		e.preventDefault()
		console.log("yessssss")
		
		var n1 = $scope.f2a
		var n2 = $scope.f2b

		$scope.error1b = ""
		$scope.error2b = ""
		if(isNaN(n1)=== true &&	 isNaN(n2)=== true){
			$scope.error1b = "Your first input isnt a Number!!!"
			$scope.error2b = "Your second input isnt a Number!!!"
		}else if(isNaN(n1)=== true){
			$scope.error1b = "Your first input isnt a Number!!!"
		}else if(isNaN(n2)===true){
			$scope.error2b = "Your second input isnt a Number!!!"
		}else{
			$scope.result2 = (parseFloat(n1)/parseFloat(n2)) * 100
			console.log($scope.result2)
		}
	}

	$scope.f3p = function(e){
		e.preventDefault()
		console.log("yessssss")
		
		var n1 = $scope.f3a
		var n2 = $scope.f3b
		$scope.error1c = ""
		$scope.error2c = ""
		if(isNaN(n1)=== true &&	 isNaN(n2)=== true){
			$scope.error1c = "Your first input isnt a Number!!!"
			$scope.error2c = "Your second input isnt a Number!!!"
		}else if(isNaN(n1)=== true){
			$scope.error1c = "Your first input isnt a Number!!!"
		}else if(isNaN(n2)===true){
			$scope.error2c = "Your second input isnt a Number!!!"
		}else{
			$scope.result3 = (parseFloat(n2) - parseFloat(n1)) / parseFloat(n1) * 100
			console.log($scope.result3)
		}
	}
	

	
})