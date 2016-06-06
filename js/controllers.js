/* global angular, document, window */
'use strict';

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

    $scope.hideNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };

    $scope.showNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };

    $scope.noHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }
    };

    $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
    };

    $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;

        switch (location) {
            case 'left':
            hasHeaderFabLeft = true;
            break;
            case 'right':
            hasHeaderFabRight = true;
            break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (!content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }

    };

    $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
    };

    $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
    };

    $scope.clearFabs = function() {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
            fabs[0].remove();
        }
    };
})

.controller('LoginCtrl', function($scope, $stateParams, $timeout, myFactory, $state, $rootScope, ionicMaterialMotion, ionicMaterialInk) {

   $scope.$parent.showHeader();
   $scope.$parent.clearFabs();
   $scope.isExpanded = true;
   $scope.$parent.setExpanded(true);
   $scope.$parent.setHeaderFab('right');

   $timeout(function() {
    ionicMaterialMotion.fadeSlideIn({
        selector: '.animate-fade-slide-in .item'
    });
}, 200);

   $scope.login = function(user) {
    window.localStorage.setItem("username", user.Email);
    window.localStorage.setItem("password", user.Contrasena);
    //console.log(user);

    myFactory.loginUser(user).then(function (data) {
        $scope.Usuario = data.data;
        console.log($scope.Usuario);

        if ($scope.Usuario == ""){
            console.log("Usuario inexistente");
        } else {
            console.log($scope.Usuario);
            myFactory.setUser($scope.Usuario);
        }
    });
    //$state.go('app.categories');
};

$scope.isLoggedIn = function() {
    if(window.localStorage.getItem("username") !== undefined && window.localStorage.getItem("password") !== undefined) {
        return true;
    } else {
        return false;
    }
};

$scope.logout = function() {
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("password");
};

})

.controller('panelCtrl', function ($scope, myFactory, $timeout, ionicMaterialInk, ionicMaterialMotion) {

    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });

    myFactory.getEstatistics(9, 'Favorita').then(function(data){
        $scope.favoritas = data.data;
            console.log($scope.favoritas);
        });

    myFactory.getEstatistics(9, 'Realizada').then(function(data){
        $scope.realizadas = data.data;
            console.log($scope.realizadas);
        });

    myFactory.getEstatistics(9, 'Pendiente').then(function(data){
        $scope.pendientes = data.data;
            console.log($scope.pendientes);
        });
})

.controller('CategoriesCtrl', function($scope, $stateParams, myFactory, $rootScope, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    // Set Header

    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });


    myFactory.getEstilos().then(function (data) {
        $scope.estilos = data.data;
        console.log($scope.estilos);
    });
})

.controller('ListCtrl', function($scope, $stateParams, myFactory, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    // Set Header

    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });

    $scope.nombre = $stateParams.nombre;
    myFactory.getRutasByStyle($stateParams.id_Tipo, 0).then(function (data) {
        $scope.rutas = data.data;
        console.log($scope.rutas);
    });
})

.controller('ItemCtrl', function($scope, $stateParams, myFactory, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    // Set Header

    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });

    $scope.nombre = $stateParams.nombre;
    myFactory.getRutaByID($stateParams.id_Ruta).then(function (data) {
        $scope.ruta = data.data;
        console.log($scope.ruta);
    });
})

.controller('ActivityCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {

    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');

    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
})

.controller('GalleryCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });

});
