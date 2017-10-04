(function(){
'use strict';
angular.module('LunchCheck',[])							// Begin module
	.controller('LunchCheckCtl', LunchCheckCtl);
	LunchCheckCtl.$inject = ['$scope'];
	function LunchCheckCtl($scope){						// Begin Controller function
		$scope.line01 = '';
		$scope.result = '';
		$scope.ClickBtn1 = function(){					// Function to handle the click
			// console.log('clicked');
			var res = $scope.line01.split(',');
			// console.log(res);
			var len = res.length;
			// console.log(len);
			var kon = 0;
			for (var i = 0; i < res.length; i++) {		// Count the no empty items
				if(res[i] != '') kon++;
			}
			if (kon > 3 )
				{$scope.result = 'Too Much!';}
			else
				{ $scope.result = 'Enjoy!';}
			if(kon == 0)
				$scope.result = 'Please enter data first.';
		}
	}
})();
