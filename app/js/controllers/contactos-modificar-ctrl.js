// Controlador para la modificacion de contactos
contactosControllers.controller('ContactosModificarCtrl', ['$scope', '$location', '$routeParams', 'Contactos',
    function($scope, $location, $routeParams, Contactos) {
        $scope.mostrar = false
        $scope.contacto = Contactos.get({
            id: $routeParams.id
        }, function() {
            $scope.mostrar = true
        })
        $scope.modificar = function() { // Funcion disparado al hacer submit los datos
            if (confirm('¿Desea modificar los datos?')) {
                Contactos.update($scope.contacto,
                    function(respuesta) {
                        $location.url('/')
                    },
                    function() {
                        alert('Error')
                    })
            }
        }
    }
])
