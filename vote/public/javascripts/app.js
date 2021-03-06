var app = window.angular.module('app', [])

app.factory('costumeFetcher', costumeFetcher)
app.controller('mainCtrl', mainCtrl)


function costumeFetcher ($http) {
  
  var API_ROOT = 'costume'
  return {
    get: function () {
      return $http
        .get(API_ROOT)
        .then(function (resp) {
          return resp.data
        })
    }
  }

}

function mainCtrl ($scope, costumeFetcher, $http) {

  $scope.costume = []
  costumeFetcher.get()
    .then(function (data) {
      $scope.costume = data
    })

$scope.addCostume = function() {
  var formData = {name:$scope.Name,avatarUrl:$scope.Url,upvotes:0};
  console.log(formData);
  var costumeURL = 'costume';
  $http({
     url: costumeURL,
     method: "POST",
     data: formData
  }).success(function(data, status, headers, config) {
    console.log("Post worked");
    costumeFetcher.get()
      .then(function (data) {
        $scope.costume = data
    })

  }).error(function(data, status, headers, config) {
    console.log("Post failed");
  });
  document.getElementById('name').value = '';
  document.getElementById('url').value = '';
}

  $scope.addVote = function (costume) {
	console.log("add vote")	
	console.log(costume)
	$http({
     		url: 'vote',
    		method: "POST",
     		data: costume
  	}).success(function(data, status, headers, config) {
    		console.log("Post worked");
    		costumeFetcher.get()
      			.then(function (data) {
        		$scope.costume = data
    		})
	}).error(function(data, status, headers, config) {
    		console.log("Post failed");
  	});
  }  
  
}
