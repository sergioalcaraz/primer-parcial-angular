contactosControllers.controller('ContactosListaController', ['$scope', 'Contactos',
  function($scope, Contactos) {
      $scope.contactos = Contactos.query()
  }
])
