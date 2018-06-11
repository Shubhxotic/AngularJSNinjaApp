
mycont.controller('NinjaController', ['$scope','$http', function($scope, $http){
    // $scope.arpa = [{name: "Shubham", pts: 213123, color: "red", avail: true, img: "https://docs.angularjs.org/img/angularjs-for-header-only.svg"}, { color: "red",name: "Agar", pts: 421, avail: false,img: "https://docs.angularjs.org/img/angularjs-for-header-only.svg"}, {name: "yolo", color: "red", pts: 51, avail: true,img: "https://docs.angularjs.org/img/angularjs-for-header-only.svg"}];
    $scope.para1 = "Add Hero";
    $scope.removeHero = function(hero){
        var tobeRem = hero;
        var ind= $scope.arpa.indexOf(hero);
       $scope.arpa.splice (ind,1);
    };
    $scope.showall = function(hero){
    for (var i=0; i<$scope.arpa.length; i++){
        // alert(nin);
        $scope.arpa[i].avail = true;
        }
    };
    $scope.reload = function(){
        if(confirm("Are You Sure?")){
            alert("Reloading..");
            location.reload();
        }
    }
    $scope.subform= function(){
        $scope.arpa.push({
            name: $scope.hero.name,
            pts: $scope.hero.pts,
            color: $scope.hero.color,
            avail: true,
            img: "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fafirmio.com%2Fwp-content%2Fuploads%2F2014%2F10%2Fmaleprofilecircle2.jpg&f=1"
        })
    }

    $scope.removeAll = function(){
        $scope.arpa = [];
    }

    $http.get("data/heroes.json").then( function(response){
        console.log("response="+response);
        $scope.arpa = response.data;
    });

    // console.log(angular.toJson($scope.arpa));
}]);


