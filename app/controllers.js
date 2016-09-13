'use strict'

var contactosControllers = angular.module('contactosControllers', [])

contactosControllers.controller('ContactosListaController', function($scope, $location, $routeParams, ContactosService) {
  $scope.eliminar = function() {
    var contactoIndex = ContactosService.getIndexById($routeParams.id)
    ContactosService.eliminar(contactoIndex)
  }
})

contactosControllers.controller('ContactosCrearController', function($scope, $location, ContactosService) {
  $scope.crear = function() {
    console.log($scope.contacto);
    ContactosService.crear($scope.contacto)
    $location.url('/modificar/' + $scope.contacto.id)
  }
})

contactosControllers.controller('ContactosModificarController', function($scope, $location, $routeParams, ContactosService) {
  var contactoIndex = ContactosService.getIndexById($routeParams.id)
  $scope.contacto = angular.copy($scope.contactos[contactoIndex])
  $scope.modificar = function() {
    ContactosService.modificar(contactoIndex, $scope.contacto)
    $location.url('/')
  }
})
