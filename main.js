// script.js

    // create the module and name it scotchApp
    var scotchApp = angular.module('scotchApp', ['ngRoute']);

    scotchApp.config(function($routeProvider) {
            $routeProvider

                // route for the home page
                .when('/', {
                    templateUrl : 'main.html',
                    controller  : 'mainController'
                })

                // route for the about page
                .when('/about', {
                    templateUrl : 'https://debatedrillswebsite.github.io/debatedrillswebsite/team.html',
                    controller  : 'mainController'
                })

                .when('/faq', {
                    templateUrl : 'https://debatedrillswebsite.github.io/debatedrillswebsite/faq.html',
                    controller  : 'mainController'
                })

                // route for the contact page
                .when('/drills', {
                    templateUrl : 'https://debatedrillswebsite.github.io/debatedrillswebsite/drills.html',
                    controller  : 'mainController'
                });

                // route for the contact page
                .when('/privatecoaching', {
                    templateUrl : 'https://debatedrillswebsite.github.io/debatedrillswebsite/privatecoaching.html',
                    controller  : 'mainController'
                });
        });

        // create the controller and inject Angular's $scope
        scotchApp.controller('mainController', function($scope) {
            // create a message to display in our view
            $scope.message = 'Everyone come and see how good I look!';
        });

        scotchApp.controller('aboutController', function($scope) {
            $scope.message = 'Look! I am an about page.';
        });

        scotchApp.controller('contactController', function($scope) {
            $scope.message = 'Contact us! JK. This is just a demo.';
        });
