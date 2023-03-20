var app = angular.module('whatsappApp', []);

app.controller('MainController', function($scope, $window) {
  $scope.recentes = JSON.parse(localStorage.getItem('recentes') || '[]');

  $scope.enviar = function() {
    var telefone = $scope.telefone;
    var link = 'https://wa.me/55' + telefone;
    var existeRecente = false;

    for (var i = 0; i < $scope.recentes.length; i++) {
      if ($scope.recentes[i].telefone === telefone) {
        existeRecente = true;
        break;
      }
    }

    if (!existeRecente) {
      $scope.recentes.unshift({ telefone: telefone, link: link });
      $scope.recentes = $scope.recentes.slice(0, 10);
      localStorage.setItem('recentes', JSON.stringify($scope.recentes));
    }

    $window.open(link, '_blank');
  };

  $scope.adicionarRecente = function() {
    var telefone = $scope.telefone;
    var existeRecente = false;

    for (var i = 0; i < $scope.recentes.length; i++) {
      if ($scope.recentes[i].telefone === telefone) {
        existeRecente = true;
        break;
      }
    }

    if (!existeRecente) {
      $scope.recentes.unshift({ telefone: telefone });
      $scope.recentes = $scope.recentes.slice(0, 10);
      localStorage.setItem('recentes', JSON.stringify($scope.recentes));
    }
  };
});
