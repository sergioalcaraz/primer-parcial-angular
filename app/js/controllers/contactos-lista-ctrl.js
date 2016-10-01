// Controlador para la vista principal
contactosControllers.controller('ContactosListaCtrl', ['$scope', '$uibModal', 'Contactos',
    function($scope, $uibModal, Contactos) {
        $scope.contactos = Contactos.query()

        $scope.eliminar = function(contactoId) {
            $scope.contactoId = contactoId
            var eliminarModal = $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'borrar-confirmacion-modal.html',
                controller: 'ModalContactosEliminarCtrl',
                backdrop: 'static',
                scope: $scope
            })

            eliminarModal.result.then(function() {
                Contactos.delete({
                    id: $scope.contactoId
                }, function() {
                    $scope.contactos = null
                    $scope.contactos = Contactos.query()
                })
            })
        }
    }
])

// Controlador del modal
contactosControllers.controller('ModalContactosEliminarCtrl', ['$scope', '$uibModalInstance',
    function($scope, $uibModalInstance) {
        $scope.ok = function () {
            $uibModalInstance.close()
        }

        $scope.cancelar = function () {
            $uibModalInstance.dismiss()
        }
    }
])
