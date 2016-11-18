// Numero promedio de crimenes cometidos por personas que ya han sido encontradas culpables de algun crimen.
var map1 = function() {
  if (this.culpable.length > 0) {
    emit(1, { qty: 1, sum: this.culpable.length })
  }
}

var reduce1 = function(key, values) {
  reducedVal = { sum: 0, qty: 0 };

  for (var idx = 0; idx < values.length; idx++) {
    reducedVal.sum += values[idx].sum;
    reducedVal.qty += values[idx].qty;
  }
  return reducedVal;
}

var finalize1 = function(key, reduced) {
  return reduced.sum / reduced.qty;
}

db.persona.mapReduce(
  map1,
  reduce1,
  {
    out: "map_reduce_result1",
    finalize: finalizeFunction2
  }
);

// Personas involucradas como testigos en la mayor cantidad de casos.
var map2 = function() {
  var ncasos = 0;
  for (key in this.involucrado) {
    if (this.involucrado.rol == 'testigo') {
      ncasos++;
    }
  }

  emit(this.dni, ncasos);
}

var reduce2 = function(key, values) {
  return Math.max(values);
}

db.persona.mapReduce(map2, reduce2, { out: 'map_reduce_result2' });
db.map_reduce_result2.find().sort( { value: -1 } );

//Casos en los que se han visto involucradas el mayor numero de personas.
var map3 = function() {
  emit(this.id, this.personas.length);
}

var reduce3 = function(key, values) {
  return Math.max(values);
}

db.caso.mapReduce(map3, reduce3, { out: 'map_reduce_result3' });
db.map_reduce_result3.find().sort( { value: -1 } );

// Cantidad de crimenes por localidad y por ano.
var map4 = function() {
  emit(this.lugar_suceso.localidad, 1);
  emit(this.fecha_suceso.getYear(), 1);
}

var reduce4 = function(key, values) {
  return Math.sum(values);
}

db.caso.mapReduce(map4, reduce4, { out: 'map_reduce_result4' });

// Mayor numero de crimenes cometido por alguna persona.
var map5 = function() {
  emit(1, this.culpable.length);
}

var reduce5 = function(key, values) {
  return Math.max(values);
}

db.persona.mapReduce(map5, reduce5, { out: 'map_reduce_result5' });

// Cantidad total de evidencias por caso.
var map6 = function() {
  emit(this.id, this.evidencia.length);
}

var reduce6 = function(key, values) {
  return Math.sum(values);
}

db.caso.mapReduce(map6, reduce6, { out: 'map_reduce_result6' });

// Las 10 ciudades con mayor numero de crimenes.
var map7 = function() {
  emit(this.lugar_suceso.localidad, 1)
}

var reduce7 = function(key, values) {
  return Math.sum(values);
}

db.caso.mapReduce(map7, reduce7, { out: 'map_reduce_result7' })
db.map_reduce_result7.find().sort( { value: -1 } );
