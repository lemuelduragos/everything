var app = angular.module('myModule', []);


app.controller('myController', function($scope) {

	$scope.fruits = [];
	var selected = null;
	var index = null;

	function clear(){
		$scope.fruits.name = null;
  		$scope.fruits.stock = null;
  		$scope.fruits.price = null;
  		selected = null;
		index = null;
	}

	$scope.addFruit = function(name,stock,price) {

		if(!selected) {
			$scope.fruits.push(
				{
					name: name,
					stock: stock,
					price: price
				}
				)
			clear();
			$('#message').html('Successfully Added');
  		} else {
  			$('#message').html('Successfully Updated');
  			$scope.fruits[index]['name'] = name;
  			$scope.fruits[index]['stock'] = stock;
  			$scope.fruits[index]['price'] = price;
  			clear();
  		};
	};

	$scope.deleteFruit = function(idx) {
  		$scope.fruits.splice(idx, 1); 
	};

	$scope.selectFruit = function(idx) {
  		selected = $scope.fruits[idx]; 
  		index = idx;
  		console.log(selected);
  		$scope.fruits.name = selected['name'];
  		$scope.fruits.stock = selected['stock'];
  		$scope.fruits.price = selected['price'];
	};

});