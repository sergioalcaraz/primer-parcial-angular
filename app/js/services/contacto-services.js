contactosServices.factory('Contactos',['$resource',
  function($resource) {
    return $resource('http://163.172.218.124/pwf/rest/agenda/:id', {}, {
      query: {isArray:false}
    })
  }
])
