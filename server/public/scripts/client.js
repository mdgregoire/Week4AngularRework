const app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){

  $routeProvider.when('/picture', {
    templateUrl: 'views/picture.html',
    controller: 'GalleryController as vm'
  }).otherwise({ template: '<h1>404 Page Not Found</h1>'});
});
