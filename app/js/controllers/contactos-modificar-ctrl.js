// Controlador para la modificacion de contactos
contactosControllers.controller('ContactosModificarCtrl', ['$scope', '$location', '$routeParams', '$uibModal', 'Contactos',
    function($scope, $location, $routeParams, $uibModal, Contactos) {
        $scope.mostrar = false
        $scope.contacto = Contactos.get({
            id: $routeParams.id
        }, function() {
            $scope.mostrar = true
        })
        $scope.modificar = function() { // Funcion disparado al hacer submit los datos
            var modificarModal = $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'modificar-confirmacion-modal.html',
                controller: 'ModalContactosModificarCtrl',
                backdrop: 'static',
                scope: $scope
            })
            modificarModal.result.then(function() {
                Contactos.update($scope.contacto, function() {
                    $location.url('/')
                })
            })
        }
    }
])

// Controlador del modal
contactosControllers.controller('ModalContactosModificarCtrl', ['$scope', '$uibModalInstance',
    function($scope, $uibModalInstance) {
        $scope.ok = function() {
            $uibModalInstance.close()
        }

        $scope.cancelar = function() {
            $uibModalInstance.dismiss()
        }
    }
])
