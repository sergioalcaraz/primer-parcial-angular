// Controlador para la vista principal
contactosControllers.controller('ContactosListaCtrl', ['$scope', '$uibModal', 'Contactos',
    function($scope, $uibModal, Contactos) {
        $scope.paginaActual = 1
        $scope.selectOption = [10, 20, 30, 40, 50]
        $scope.itemsPerPage = 20

        // cargar la lista con los parametros para el paginado
        function cargarLista() {
            var contactos = Contactos.query({
                inicio: ($scope.paginaActual - 1) * $scope.itemsPerPage,
                cantidad: $scope.itemsPerPage,
                filtro: $scope.filtroPaginado
            })

            // se espera que llegue la peticion
            contactos.$promise.then(function() {
                $scope.contactos = contactos
            })
        }

        // cargar la lista despues de que se cambia el texto en el filtro
        $scope.cambioFiltro = function() {
            $scope.paginaActual = 1
            cargarLista()
        }

        // cargar la lista al cambiar la cantidad de items por pagina
        $scope.cambioItemsPerPage = function() {
            $scope.paginaActual = 1
            $scope.itemsPerPage = $scope.numPerPage
            cargarLista();
        }

        // cargar la lista al cambiar la pagina
        $scope.paginaCambiada = function() {
            cargarLista()
        }

        // Eliminar un regitro
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

            // Ejecutar la eliminacion despues de que se acepte
            eliminarModal.result.then(function() {
                Contactos.delete({
                    id: $scope.contactoId
                }, function() {
                    $scope.paginaActual = 1
                    cargarLista()
                })
            })
        }

        // Se carga por primera vez la lista
        cargarLista()
    }
])

// Controlador del modal
contactosControllers.controller('ModalContactosEliminarCtrl', ['$scope', '$uibModalInstance',
    function($scope, $uibModalInstance) {
        $scope.ok = function() {
            $uibModalInstance.close()
        }

        $scope.cancelar = function() {
            $uibModalInstance.dismiss()
        }
    }
])
