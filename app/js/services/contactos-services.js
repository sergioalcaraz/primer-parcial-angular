// Servicio para realizar peticiones al rest-api
contactosServices.factory('Contactos', ['$resource',
    function($resource) {
        return $resource('http://163.172.218.124/pwf/rest/agenda/:id', {'id': '@id'}, {
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
