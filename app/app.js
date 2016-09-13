'use strict'

var contactosApp = angular.module('contactosApp', [
  'ngRoute',
  'ui.bootstrap',
  'contactosControllers'
])

contactosApp.run(function($rootScope, $http, ContactosService) {
  if ($rootScope.contactos === undefined) {
    $http.get('contactos.json').then(function(response) {
      $rootScope.contactos = response.data
    })
  }
})
