contactosApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/layout/lista.html',
        controller: 'ContactosListaController'
      })
      .when('/crear', {
        templateUrl: 'app/layout/crear.html',
        controller: 'ContactosCrearController'
      })
      .when('/modificar/:id', {
        templateUrl: 'app/layout/modificar.html',
        controller: 'ContactosModificarController'
      })
  }
])
