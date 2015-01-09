(function () {

	'use strict';

	angular.module('PikadayDemo', ['angularPikaday'])
	  .controller('Ctrl', function($scope) {

		  $scope.set = function (d) {
		    $scope.example6.setDate(new Date(d));
		  };
		});

})();