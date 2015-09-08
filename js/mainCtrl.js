var app = angular.module('quoteBook');
app.controller('mainCtrl', function($scope, myService, localHostService, cookieService){
//**** Default Variables ****

  $scope.searchQuote = '';

//**** Get Data Function Service Call ****

  $scope.datas = myService.getData();

//**** Show Hide Variable & Function ****

  $scope.myShow = false;
  $scope.showAdd = function() {
    $scope.myShow = !$scope.myShow
  };

//**** New Post Object Definition ****

  $scope.newPost = {
  	quote: "",
  	author: ""
  };

//**** Add Post Function ****

  $scope.addPost = function() {
  	myService.addData($scope.newPost);
    $scope.newPost.quote = '';
    $scope.newPost.author = '';
  } 

//**** Remove Post Function ****

  $scope.removePost = function() {
  	myService.removeData(this.data.text);
  } 
   
  $scope.showRemove = function () {
  	$scope.myShow = !$scope.myShow
  }

//********** Local Storage Option Below **********
  // $scope.datas = localHostService.getData();

  // $scope.addPost = function() {
  //   localHostService.addData($scope.newPost);
  //   $scope.newPost.quote = '';
  //   $scope.newPost.author = '';
  // } 

  //********** Cookie Storage Option Below **********
  // $scope.datas = cookieService.getData();

  // $scope.addPost = function() {
  //   cookieService.addData($scope.newPost);
  //   $scope.newPost.quote = '';
  //   $scope.newPost.author = '';
  // } 

}); //end





