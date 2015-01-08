angular.module('PikadayDemo', ['angularPikaday'])
  .controller('Ctrl', function($scope) {

  moment.locale("en");

  $scope.set = function (d) {
    $scope.example6.setDate(new Date(d));
  };
});
