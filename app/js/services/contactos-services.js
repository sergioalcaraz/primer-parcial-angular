// Servicio para realizar peticiones al rest-api
contactosServices.factory('Contactos', ['$resource', '$location',
    function($resource, $location) {
        // multiples protocolos
        var dominio = $location.protocol() == 'http' ? '163.172.218.124' : 'desa03.konecta.com.py'
        return $resource($location.protocol() + '://' + dominio + '/pwf/rest/agenda/:id', {'id': '@id'}, {
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
