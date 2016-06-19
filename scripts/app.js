//setter
angular
    .module("whatapop", ["ngComponentRouter", "dahr.ng-image-picker" ]);

//proveedor $locationProvider
angular
    .module("whatapop")
    .config(["$locationProvider",function ($locationProvider) {
    $locationProvider.html5Mode(true);// modo de navegacion
}]);


//
angular.module("whatapop").value("$routerRootComponent", "raiz");

