var app = angular.module('quoteBook');
app.controller('mainCtrl', function($scope, myService){
  $scope.test = "Test is working";
  $scope.myShow = false;
  $scope.newPost = {
  	quote: "",
  	author: ""
  }; //newPost

  $scope.addPost = function() {
  	myService.addData($scope.newPost);
  } //addPost

    $scope.removePost = function() {
  		myService.removeData(this.data.text);
  } //removePost

  $scope.datas = myService.getData();
  $scope.searchQuote = '';

  $scope.showAdd = function() {
  	$scope.myShow = !$scope.myShow
}; 
  
  $scope.showRemove = function () {
  	$scope.myShow = !$scope.myShow
  }

  // $scope.showAdd = '';
  // $scope.showRemove = '';

}); //end



// function changeMyShow () {
//   myShow = !myShow
//   console.log(myShow)


// <div ng-show="myShow">
// <button ng-click="changeMyShow()



