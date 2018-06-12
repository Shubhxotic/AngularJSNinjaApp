var mycont= angular.module( "myCont", ['ngRoute', 'ngAnimate']);

mycont.config(['$routeProvider',"$locationProvider" , function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'NinjaController'
    })
    .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'NinjaController'
    })
    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: "ContactController"
    })
    .when('/thanksforcontacting', {
        templateUrl: 'views/thanksforcontact.html',
    })
    .when('/heroes', {
        templateUrl: 'views/direc.html',
        controller:  'NinjaController'
    })
    .otherwise({
        redirectTo: '/home'
    }); 
}]);

mycont.directive("randomHero", [function(){
    return{
        restrict: "E",
        scope: {
            title: "=",
            hero: "="
        },
        templateUrl: "views/customDirecView.html",
        // replace: true,
        transclude: true,
        controller : function($scope){
            $scope.randomVal = parseInt( Math.random () * 4 );
            console.log("Random val", $scope.randomVal);
            console.log($scope);
        }
    }
}]);
