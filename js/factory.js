"use strict";
var app = angular.module('starter.factory', []);

app.factory ('myFactory', ['$http', function($http, $scope) {
	var serviceBase = 'http://onsight.esy.es/final/backend/';
	var obj = {};
	var prueba;
	var usuario = {};

	obj.setUser = function (user) {
		usuario = user;
		console.log(usuario);
		//$scope.usuario = user;
		return "User Stored";
	}

	obj.loginUser = function (usuario) {
		console.log(usuario);
		return $http.post(serviceBase + 'login', usuario).then(function (results) {
      console.log(results);
			return results;
		});
	};

  	obj.getEstatistics = function (id, type) {
  		return $http.get(serviceBase + 'estatistics?id='+ id +'&type=' + type);
  	}

  	//   ↓↓ Rutas ↓↓
  	obj.getRutasByStyle = function(estilo_id, user_id){
  		return $http.get(serviceBase + 'rutas?estilo=' + estilo_id + "&usuario=" +user_id);
  	}

  	obj.getRutas = function () {
  		return $http.get(serviceBase + 'rutas');
  	}

    obj.getEstilos = function () {
      return $http.get(serviceBase + 'estilos');
    }

  	obj.getRutaByID = function (ruta_id) {
  		return $http.get(serviceBase + 'ruta?id=' + ruta_id);
  	}

  	return obj;

  }]);


//   ↓↓ DESCARTES ↓↓

  /*obj.getCustomers = function () {
	return $http.get(serviceBase + 'customers');
  }*/