(function() {
    'use strict';

	angular
	    .module("main")
	    .service("DataService", DataService);

	function DataService(localStorageService) {

		var DATABASE_NAME = "db"; 
		
		var self = this;

		self.recuperarCopiaBaseDeDatos = recuperarCopiaBaseDeDatos;
		self.insertarRegistro = insertarRegistro;
		self.actualizarRegistro = actualizarRegistro;
		self.actualizarBaseDeDatos = actualizarBaseDeDatos;
		self.recuperarRegistros = recuperarRegistros;

		function actualizarBaseDeDatos(db) {
			localStorageService.set(DATABASE_NAME,db);
		}

		function recuperarCopiaBaseDeDatos() {
			var db = localStorageService.get(DATABASE_NAME); 
			if(db === null) {
				db = {};
				db.personas = [];
			}
			return db;
		}

		function insertarRegistro(nombreArreglo, registro) {
			// recuperarmos una copia de la base de datos
			var db = self.recuperarCopiaBaseDeDatos();
			// insertamos un nuevo elemento al arreglo
			db[nombreArreglo].push(registro);
			self.actualizarBaseDeDatos(db);
		}
		
		function actualizarRegistro(nombreArreglo, registro) {
			// recuperarmos una copia de la base de datos
			var db = self.recuperarCopiaBaseDeDatos();
			// Hay que actualizar el registro ya existente
			var indiceEncontrado = null;
			angular.forEach(db[nombreArreglo], function(elemento, indice) {
				if(elemento.id === registro.id) {
					indiceEncontrado = indice;
				}
			});
			if(indiceEncontrado !== null) {
				db[nombreArreglo][indiceEncontrado] = registro;
				self.actualizarBaseDeDatos(db);
			}
		}

		function recuperarRegistros(nombreArreglo) {
			// recuperarmos una copia de la base de datos
			var db = self.recuperarCopiaBaseDeDatos();
			return db[nombreArreglo];
		}

	}

})();