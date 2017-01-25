(function(){
  'use-strict';



  angular.module('itemApp',[])
  .controller('itemController',itemController);
  function itemController($scope,$inject){
    $scope.names="Sai";
    $scope.clickMe = function(){
    if($scope.names != undefined || $scope.names != ""){
      alert("You are right");
    }
    else {
      alert("You are wrong");
    }
  };
}
})
