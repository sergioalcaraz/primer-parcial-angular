// Servicio para realizar peticiones al rest-api
contactosServices.factory('Contactos', ['$resource', '$location',
    function($resource, $location) {
        // multiples protocolos
        return $resource($location.protocol() + '://163.172.218.124/pwf/rest/agenda/:id', {'id': '@id'}, {
            query: {
                isArray: false
            },
            create: {
                method: 'POST',
            },
            update: {
                method: 'PUT',
            }
        })
    }
])
