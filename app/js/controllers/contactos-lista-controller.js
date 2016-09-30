// Controlador para la vista principal
contactosControllers.controller('ContactosListaController', ['$scope', 'Contactos',
    function($scope, Contactos) {
        $scope.contactos = Contactos.query()
        
        $scope.eliminar = function(contactoId) {

            if (confirm('¿Desea eliminar el contacto?')) {
                Contactos.delete({id: contactoId}, function() {
                    $scope.contactos = null
                    $scope.contactos = Contactos.query()
                })
            }

        }
    }
])
