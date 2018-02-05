(function() {
    'use strict';

        angular.module('app', [
         'ui.router',
         'toastr',
         'LocalStorageModule',
         'ngIdle'
         //,'ngFileUpload'
         ])
       .config(function($stateProvider,
                        $urlRouterProvider,
                        localStorageServiceProvider
                        ){
         // Local storage config
            $urlRouterProvider.otherwise("/home");
            $stateProvider   
            .state('home', {
                url: "/home",
                templateUrl: "app/partials/Home.html",

            })
           
            .state('home.inventory', {
                url: "/inventory",
                templateUrl: "app/partials/Inventory.html",
                 parent: "home",

            })

            .state('home.contact', {
                url: "/customer",
                templateUrl: "app/partials/Contact.html",
                 parent: "home",

            })
            .state('home.direction', {
                url: "/direction",
                templateUrl: "app/partials/Direction.html",
                 parent: "home",

            });
      });
})();