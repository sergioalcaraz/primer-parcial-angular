// Controlador para la creacion de contactos
contactosControllers.controller('ContactosCrearController', ['$scope', '$location', 'Contactos',
    function($scope, $location, Contactos) {
        $scope.crear = function() { // Funcion disparado al hacer submit los datos
            if (!$scope.contacto.alias) {
                $scope.contacto.alias = ''
            }
            if (!$scope.contacto.direccion) {
                $scope.contacto.direccion = ''
            }
            Contactos.create({}, $scope.contacto,
                function(respuesta) {
                    $location.url('modificar/' + respuesta.id)
                },
                function() {
                    alert('Error')
                }
            )
        }
    }
])
