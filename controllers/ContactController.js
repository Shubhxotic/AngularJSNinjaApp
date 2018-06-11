mycont.controller("ContactController", ["$scope", "$location" , function($scope,$location){
    $scope.nameApp="Contact";
    $scope.submitForm = function(){
        $location.path("/thanksforcontacting");
    }
}])