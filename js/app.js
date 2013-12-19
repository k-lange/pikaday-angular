app = angular.module('PikadayDemo', [])
  .controller('Ctrl', function($scope) {

    $scope.a = function (e) {
      $scope.sample3.setDate(new Date());
    }
})
