// Configuracion de las rutas de la agenda
contactosApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/contactos-lista.html',
                controller: 'ContactosListaController'
            })
            .when('/crear', {
                templateUrl: 'views/contactos-crear.html',
                controller: 'ContactosCrearController'
            })
            .when('/modificar/:id', {
                templateUrl: 'views/contactos-modificar.html',
                controller: 'ContactosModificarController'
            })
    }
])
