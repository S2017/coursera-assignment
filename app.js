  var app=angular.module('itemApp',[]);
  app.controller('itemController',function($scope){

      $scope.clickMe = function(name){
        if(name!="" && name!=undefined){
        var i=name.split(',');
        if(i.length<=3)
        {
          $scope.showError=false;
          $scope.showsuccess=true;
          $scope.msg="ENJOY!!";
          console.log('inside success');
        }
      else {
        $scope.showError=true;
        $scope.showsuccess=false;
        $scope.msg="TOO MUCH!!";
        console.log('inside failure');
      }
    }

    else{
      $scope.showError=true;
      $scope.showsuccess=false;
      $scope.msg="Please Enter data First";
  }
    };

  });
