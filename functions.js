// Numero promedio de crımenes cometidos por personas que ya han sido encontradas culpables de algun crimen.
var map1 = function() {
  if (this.culpable.length > 0) {
    emit(1, this.culpable.length)
  }
}

var reduce1 = function(key, value) {
  return (Array.sum(value) / value.length);
}

db.persona.mapReduce(map1, reduce1);

// Personas involucradas como testigos en la mayor cantidad de casos.
var map2 = function() {
  var ncasos = 0;
  for (key in this.involucrado) {
    if (this.involucrado.rol == 'testigo') {
      ncasos++;
    }
  }

  emit(ncasos, this);
}

var reduce2 = function(key, value) {
  return {
    'ncasos': key,
    'personas': value
  };
}

db.persona.mapReduce(map2, reduce2, { 'out': 'map_reduce_result' })
db.map_reduce_result.find().sort( { ncasos: -1 } ); // ...

//Casos en los que se han visto involucradas el mayor numero de personas.

var map3 = function() {
  emit()
}

var reduce3 = function(key, value) {
  return ;
}



var map2 = function() {
  emit()
}

var reduce2 = function(key, value) {
  return ;
}

var map2 = function() {
  emit()
}

var reduce2 = function(key, value) {
  return ;
}

var map2 = function() {
  emit()
}

var reduce2 = function(key, value) {
  return ;
}
