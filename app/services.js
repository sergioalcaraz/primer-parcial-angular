contactosApp.service('ContactosService', function($rootScope) {
  var sigId = 0
  this.crear = function(contacto) {
    if (sigId === 0) {
      $rootScope.contactos.forEach(function(contacto, i, contactos) {
        if (sigId <= contacto.id) {
          sigId = contacto.id
        }
      });
    }
    sigId++;
    contacto.id = sigId;
    contacto.fechaCreacion = new Date()
    $rootScope.contactos.push(contacto)
  }

  this.modificar = function(i, contacto) {
    $rootScope.contactos[i] = contacto
  }

  this.eliminar = function(i) {
    $rootScope.contactos.splice(i, 1)
  }

  this.getIndexById = function(id) {
    for (var i in $rootScope.contactos) {
      if ($rootScope.contactos[i].id == id) {
        return i
      }
    }
    return null;
  }
})
