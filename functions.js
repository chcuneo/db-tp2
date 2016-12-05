// Numero promedio de crimenes cometidos por personas que ya han sido encontradas culpables de algun crimen.
var map1 = function() {
  if (this.culpable && this.culpable.length > 0) {
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

db.personas.mapReduce(
  map1,
  reduce1,
  {
    out: "promedio_crimenes_cometidos",
    finalize: finalize1
  }
);

// Personas involucradas como testigos en la mayor cantidad de casos.
var map2 = function() {
  var ncasos = 0;
  if (this.involucrado) {
    for (var idx = 0; idx < this.involucrado.length; idx++) {
        if (this.involucrado[idx].rol == 'testigo') {
        ncasos++;
      }
    }

  }
  if (ncasos > 0) { emit(this.dni, ncasos); }
}

var reduce2 = function(key, values) {
  return values.reduce(function(pv, cv) { return pv + cv; }, 0);
}

db.personas.mapReduce(map2, reduce2, { out: 'personas_involucradas_como_testigos' });

//Casos en los que se han visto involucradas el mayor numero de personas.
var map3 = function() {
  emit(1, { id: this.id, involucrados: this.personas.length});
}

var reduce3 = function(key, values) {
    involucrados = values.map(function(obj){
        return obj.involucrados;
    })
    
    maxPersonas = Math.max.apply(Math, involucrados);

    casos = values.filter(function(obj){
        return obj.involucrados == maxPersonas;
    })

  return {casos: casos};
}

db.casos.mapReduce(map3, reduce3, { out: 'casos_con_mayor_numero_de_personas_involucradas' });

// Cantidad de crimenes por localidad y por ano.
var map4 = function() {
  year = this.timestamp_suceso.getFullYear();
  d = {}
  d[year] = 1;
  emit(this.lugar_suceso.localidad, d);
}

var reduce4 = function(key, values) {
  d = {}
  for (i in values) {
    for (year in values[i]) {
      if (year in d) {
        d[year] = d[year]+1;
      } else {
        d[year] = 1;
      }
    }
  }
 return d;
}

db.casos.mapReduce(map4, reduce4, { out: 'crimenes_por_localidad_y_ano' });

// Mayor numero de crimenes cometido por alguna persona.
var map5 = function() {
  if (this.culpable) {
    emit(1, this.culpable.length);
  }
}

var reduce5 = function(key, values) {
  return values.reduce(function(pv, cv) { return (pv > cv) ? pv : cv ; }, 0);
}

db.personas.mapReduce(map5, reduce5, { out: 'mayor_numero_de_crimenes_cometidos_por_una_persona' });

// Cantidad total de evidencias por caso.
var map6 = function() {
  if (this.evidencia) {
    emit(this.id, this.evidencia.length);
  }
}

var reduce6 = function(key, values) {
  return values.reduce(function(pv, cv) { return pv + cv; }, 0);
}

db.casos.mapReduce(map6, reduce6, { out: 'cantidad_total_de_evidencias_por_caso' });

// Las 10 ciudades con mayor numero de crimenes.
var map7 = function() {
  emit(this.lugar_suceso.localidad, 1)
}

var reduce7 = function(key, values) {
  return values.reduce(function(pv, cv) { return pv + cv; }, 0);
}

db.casos.mapReduce(map7, reduce7, { out: 'ciudades_con_mayor_numero_de_crimenes' })

db.map_reduce_result1.find()
db.map_reduce_result2.find().sort( { value: -1 } );
db.map_reduce_result3.find().sort( { value: -1 } );
db.map_reduce_result4.find()
db.map_reduce_result5.find()
db.map_reduce_result6.find()
db.map_reduce_result7.find().sort( { value: -1 } );