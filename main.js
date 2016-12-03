// script.js

    // create the module and name it scotchApp
    var scotchApp = angular.module('scotchApp', ['ngRoute']).config(function($sceProvider) {
      $sceProvider.enabled(false);
   });;



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
                })
                // route for the contact page
                .when('/privatecoaching', {
                    templateUrl : 'https://debatedrillswebsite.github.io/debatedrillswebsite/privatecoaching.html',
                    controller  : 'mainController'
                })


                .when('/debaterounds', {
                    templateUrl : 'https://debatedrillswebsite.github.io/debatedrillswebsite/debaterounds.html',
                    //templateUrl : 'file:///Users/mathewpregasen/Dropbox/Projects/debatedrills_main/debaterounds.html',
                    controller  : 'mainController'
                });
        });
        var contains = function(needle) {
            // Per spec, the way to identify NaN is that it is not equal to itself
            var findNaN = needle !== needle;
            var indexOf;

            if(!findNaN && typeof Array.prototype.indexOf === 'function') {
                indexOf = Array.prototype.indexOf;
            } else {
                indexOf = function(needle) {
                    var i = -1, index = -1;

                    for(i = 0; i < this.length; i++) {
                        var item = this[i];

                        if((findNaN && item !== item) || item === needle) {
                            index = i;
                            break;
                        }
                    }

                    return index;
                };
            }

            return indexOf.call(this, needle) > -1;
        };
        // create the controller and inject Angular's $scope
        scotchApp.controller('mainController', function($scope) {
            // create a message to display in our view
            $scope.message = 'Everyone come and see how good I look!';
            $scope.videos = [
              {
                "url" : "https://www.youtube.com/v/Oef5kvRXI-0",
                "name" : "VBT 2011 Octos Pt 1",
                "description" : "In this match, the two debaters engage using things from tricks to theory to Ks to other forms of debate, all to come down to a stellar 2AR",
                "tags" : ["Spreading","Tricks", "Theory"],
                "active"  : true
              },
              {
                "url" : "https://www.youtube.com/v/jNYdYmw6Aug",
                "name" : "VBT 2012 Semis Pt 1",
                "description" : "This match involves a lot of diffferent debate topics lorem ipsum delorum ipselof kalirp ropas the bolasid si ",
                "tags" : [ "Theory"],
                "active"  : true
              }
            ];

            $scope.chooseTag = function(tag){


              for(video in $scope.videos){
                console.log(contains.call(video.tags, tag));
                if(contains.call(video.tags, tag) == -1){
                  video.active = false;
                  console.log("FALSE!");
                } else {
                  video.active = true;
                }
              }
            }

        });

        scotchApp.controller('aboutController', function($scope) {
            $scope.message = 'Look! I am an about page.';
        });

        scotchApp.controller('contactController', function($scope) {
            $scope.message = 'Contact us! JK. This is just a demo.';
        });
