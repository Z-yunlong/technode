angular.module('technodeApp').controller('LoginCtrl',function($scope,$http,$location){
	$scope.login = function(){
		$http({
			url:'/api/login',
			method:'POST',
			data:{
				email:$scope.email
			}
		}).then(function(user){
			$scope.$emit('login',user);
			$location.path('/rooms');
		},function(data){
			$location.path('/login');
		});
	}
});