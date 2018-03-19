var myApp = angular.module("ShopCart", []);

myApp.controller("cartCont", function($scope) {

	$scope.price1 = 0;
	$scope.price2 = 0;
	$scope.price3 = 0;

	$scope.onequant = 0;
	$scope.twoquant = 0;
	$scope.threequant = 0;

	$scope.res1 = function() {
		$scope.price1 = $scope.onequant * 13999;
		return $scope.price1;
	}

	$scope.res2 = function() {
		$scope.price2 = $scope.twoquant * 14750;
		return $scope.price2;
	}

	$scope.res3 = function() {
		$scope.price3 = $scope.threequant * 13999;
		return $scope.price3;
	}

	$scope.gtotal = function() {
		return $scope.price1 + $scope.price2 + $scope.price3;
	}

});