// db.casos.drop()
// db.casosPorFecha.drop()
// db.casosPorLocalidad.drop()
// db.personas.drop()


db.createCollection('casos');
db.createCollection('casosPorFecha');
db.createCollection('casosPorLocalidad');
db.createCollection('personas');

db.casos.insertMany(
[
  {
    'id': 0,
    'timestamp_suceso': ISODate("2016-01-10T10:00:00.000Z"),
    'descripcion': 'Mama corto toda la loz',
    'personas': [
      30000000,
      20000000,
      25000000,
      37840000
    ],
    'estado': 'resuelto',
    'categoria': 'Sabotaje',
    'lugar_suceso': {
      'calle': 'Libertador Avenue',
      'numero': 2,
      'localidad': 'Gloriosa Ciudad Autonoma de Buenos Aires',
      'provincia': 'Buenos Aires'
    },
    'evidencia': [
      {
        'descripcion': 'Cutucuchillo',
        'timestamp_ingreso': ISODate("2016-01-11T10:00:00.000Z"),
        'timestamp_hallazgo': ISODate("2016-01-10T11:00:00.000Z"),
      },
      {
        'descripcion': 'Camara',
        'timestamp_ingreso': ISODate("2016-01-11T10:00:00.000Z"),
        'timestamp_hallazgo': ISODate("2016-01-10T11:00:00.000Z"),
      }
    ]
  },
  {
    'id': 1,
    'timestamp_suceso': ISODate("2016-01-10T10:00:00.000Z"),
    'descripcion': 'Un campesino atropello a otro con su carreta',
    'personas': [
      40000000,
      60000000,
      95000000
    ],
    'estado': 'pendiente',
    'categoria': 'Homicidio',
    'lugar_suceso': {
      'calle': 'Calle de tierra numero 2',
      'numero': 2,
      'localidad': 'Ramos Mejia',
      'provincia': 'Buenos Aires'
    },
    'evidencia': [
      {
        'descripcion': 'Carreta',
        'timestamp_ingreso': ISODate("2016-02-11T10:00:00.000Z"),
        'timestamp_hallazgo': ISODate("2016-02-10T11:00:00.000Z"),
      },
      {
        'descripcion': 'Caballo',
        'timestamp_ingreso': ISODate("2016-02-11T10:00:00.000Z"),
        'timestamp_hallazgo': ISODate("2016-02-10T11:00:00.000Z"),
      }
    ]
  },
  {
    'id': 2,
    'timestamp_suceso': ISODate("2016-03-10T10:00:00.000Z"),
    'descripcion': 'Pisteaba como un campeon y bueno',
    'personas': [
      30000000,
      95000000,
      37840000
    ],
    'estado': 'resuelto',
    'categoria': 'Imprudencia',
    'lugar_suceso': {
      'calle': 'Corrient Avenue',
      'numero': 4000,
      'localidad': 'Gloriosa Ciudad Autonoma de Buenos Aires',
      'provincia': 'Buenos Aires'
    },
    'evidencia': [
      {
        'descripcion': 'RollsRoyce',
        'timestamp_ingreso': ISODate("2016-03-11T10:00:00.000Z"),
        'timestamp_hallazgo': ISODate("2016-03-10T11:00:00.000Z"),
      }
    ]
  },
  {
    'id': 3,
    'timestamp_suceso': ISODate("2016-04-10T10:00:00.000Z"),
    'descripcion': 'Se desnudo',
    'personas': [
      90000000
    ],
    'estado': 'descartado',
    'categoria': 'Exhibicionismo',
    'lugar_suceso': {
      'calle': 'Calle tierra 4',
      'numero': 200,
      'localidad': 'Ituzaingo',
      'provincia': 'Buenos Aires'
    }
  },
  {
    'id': 4,
    'timestamp_suceso': ISODate("2015-03-10T10:00:00.000Z"),
    'descripcion': 'Le dio al paracetamol',
    'personas': [
      13000000,
      25000000
    ],
    'estado': 'congelado',
    'categoria': 'Drogas',
    'lugar_suceso': {
      'calle': 'Calle de ripio 2',
      'numero': 4,
      'localidad': 'Campo 3',
      'provincia': 'La Pampa'
    },
    'evidencia': [
      {
        'descripcion': 'Pastilla de paracetamol 1',
        'timestamp_ingreso': ISODate("2015-04-11T10:00:00.000Z"),
        'timestamp_hallazgo': ISODate("2015-04-10T11:00:00.000Z"),
      },
      {
        'descripcion': 'Pastilla de paracetamol 2',
        'timestamp_ingreso': ISODate("2015-04-11T10:00:00.000Z"),
        'timestamp_hallazgo': ISODate("2015-04-10T11:00:00.000Z"),
      },
      {
        'descripcion': 'Pastilla de paracetamol 3',
        'timestamp_ingreso': ISODate("2015-04-11T10:00:00.000Z"),
        'timestamp_hallazgo': ISODate("2015-04-10T11:00:00.000Z"),
      },
      {
        'descripcion': 'Pastilla de paracetamol 4',
        'timestamp_ingreso': ISODate("2015-04-11T10:00:00.000Z"),
        'timestamp_hallazgo': ISODate("2015-04-10T11:00:00.000Z"),
      }
    ]
  }
]
);


db.casosPorFecha.insertMany(
[
  {
    'fecha': ISODate("2016-01-10T00:00:00.000Z"),
    'crimenes': [
      {
        'categoria': 'Sabotaje',
        'casos': [0]
      },
      {
        'categoria': 'Homicidio',
        'casos': [1]
      }
    ]
  },
  {
    'fecha': ISODate("2016-03-10T00:00:00.000Z"),
    'crimenes': [
      {
        'categoria': 'Imprudencia',
        'casos': [2]
      }
    ]
  },
  {
    'fecha': ISODate("2016-04-10T00:00:00.000Z"),
    'crimenes': [
      {
        'categoria': 'Exhibicionismo',
        'casos': [3]
      }
    ]
  },
  {
    'fecha': ISODate("2015-03-10T00:00:00.000Z"),
    'crimenes': [
      {
        'categoria': 'Drogas',
        'casos': [4]
      }
    ]
  }
]
)

db.casosPorLocalidad.insertMany(
[
  {
    'localidad': 'Gloriosa Ciudad Autonoma de Buenos Aires',
    'casos': [0,2]
  },
  {
    'localidad': 'Ramos Mejia',
    'casos': [1]
  },
  {
    'localidad': 'Ituzaingo',
    'casos': [3]
  },
  {
    'localidad': 'Campo 3',
    'casos': [4]
  }
]
);

db.personas.insertMany(
[
  {
    'dni': 30000000,
    'nombre': 'ricardo',
    'apellido': 'fort',
    'culpable': [2],
    'involucrado':[
      {
        'rol': 'testigo',
        'caso': 0
      },
      {
        'rol': 'culpable',
        'caso': 2
      },
      {
        'rol': 'testigo',
        'caso': 2
      }
    ]
  },
  {
    'dni': 37840000,
    'nombre': 'richard',
    'apellido': 'gere',
    'involucrado':[
      {
        'rol': 'testigo',
        'caso': 0
      },
      {
        'rol': 'testigo',
        'caso': 2
      }
    ]
  },
  {
    'dni': 95000000,
    'nombre': 'carlos',
    'apellido': 'police',
    'oficial': true,
    'involucrado':[
      {
        'rol': 'investigador',
        'caso': 1
      },
      {
        'rol': 'investigador',
        'caso': 2
      }
    ]
  },
  {
    'dni': 20000000,
    'nombre': 'mama',
    'apellido': 'fort',
    'culpable': [0],
    'involucrado':[
      {
        'rol': 'culpable',
        'caso': 0
      },
      {
        'rol': 'testigo',
        'caso': 0
      }
    ]
  },
  {
    'dni': 25000000,
    'nombre': 'carlitos',
    'apellido': 'police',
    'oficial': true,
    'involucrado':[
      {
        'rol': 'investigador',
        'caso': 0
      },
      {
        'rol': 'investigador',
        'caso': 4
      }
    ]
  },
  {
    'dni': 60000000,
    'nombre': 'ramon',
    'apellido': 'terra',
    'culpable': [1],
    'involucrado':[
      {
        'rol': 'culpable',
        'caso': 1
      }
    ]
  },
  {
    'dni': 40000000,
    'nombre': 'claudio',
    'apellido': 'odas',
    'involucrado':[
      {
        'rol': 'victima',
        'caso': 1
      }
    ]
  },
  {
    'dni': 90000000,
    'nombre': 'mauro',
    'apellido': 'yatusabe',
    'culpable': [3],
    'involucrado':[
      {
        'rol': 'culpable',
        'caso': 3
      }
    ]
  },
  {
    'dni': 13000000,
    'nombre': 'julian',
    'apellido': 'bay',
    'culpable': [4],
    'involucrado':[
      {
        'rol': 'culpable',
        'caso': 4
      }
    ]
  },
]
);
