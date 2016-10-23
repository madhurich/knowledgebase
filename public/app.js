var app = angular.module("myApp", ["ngRoute"]);

app.config(['$routeProvider', function($routeProvider){
   $routeProvider
         .when('/categories',{
         	templateUrl: 'views/categories.view.html',
         	controller: 'categoriesCtrl'
         })
         .when('/articles/category/:category',{
         	templateUrl: 'views/cat_articles.view.html',
         	controller: 'articlesCategoryCtrl'
         })
         .when('/articles/details/:id',{
         	templateUrl: 'views/article_details.view.html',
         	controller: 'articleDetailsCtrl'
         })
         .when('/articles/edit/:id',{
            templateUrl: 'views/edit_article.view.html',
            controller: 'articleEditCtrl'
         })
         .when('/articles/add',{
            templateUrl: 'views/add_article.view.html',
            controller: 'articleCreateCtrl'
         })
         .otherwise({
            redirectTo: '/categories'
         })

}]);