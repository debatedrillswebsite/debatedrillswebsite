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
                    //templateUrl : 'file:///Users/mathewpregasen/Dropbox/Projects/debatedrills_main/privatecoaching.html',
                    controller  : 'mainController'
                })

                .when('/testimonials', {
                    //templateUrl : 'file:///Users/mathewpregasen/Dropbox/Projects/debatedrills_main/testimonials.html',
                    templateUrl : 'https://debatedrillswebsite.github.io/debatedrillswebsite/testimonials.html',
                    controller  : 'mainController'
                })

                .when('/testimonial/:code', {
                    //templateUrl : 'file:///Users/mathewpregasen/Dropbox/Projects/debatedrills_main/testimonial.html',
                    templateUrl : 'https://debatedrillswebsite.github.io/debatedrillswebsite/testimonial.html',
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
        scotchApp.controller('mainController', function($scope, $routeParams, $location) {
            // create a message to display in our view
            $scope.message = 'Everyone come and see how good I look!';
            $scope.tagged = false;
            $scope.testimonial = $routeParams.code;
            $scope.redirect = function(code){
              for(i = 0; i < $scope.testimonials.length; i++){
                if($scope.testimonials[i].slug == code){
                  $scope.agent = $scope.testimonials[i];
                }
              }
              $location.path( "/testimonial/" + code );


            }
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

          $scope.testimonials = [
            {
              "picture" : "1.jpg",
              "name" : "Brennan Caruthers",
              "slug" : "SchoolBC",
              "subtitle" : "Cal RR 2013 Co-Champion, UC Berkeley Invitational 2013 Quarterfinalist + 2nd speaker, 4-3 Record (Lost Round 7) TOC 2013",
              "class" : "Northeastern University, Class of 2017",
              "paragraph" : "Paras is, without a doubt, the best coach in debate. I drilled with Paras multiple times a week during the summer before my senior year and then intermittently throughout the rest of the year. There are a lot of things Paras didn’t do for me - he never cut me a card, never wrote me a case, and never did my prep. Instead, Paras taught me critical thinking skills. He encouraged constant practice and drilled with me endlessly until I could hold my own in a debate round. In other words, you should hire Paras if you want to learn lasting debate skills."
              + "Going into my senior year, I had little exposure to the debate community. I had competed at two circuit tournaments and won a total of four rounds (with one being a forfeit), and my school’s program was shifting away from national circuit LD. I had never debated theory, never learned how to find good evidence (or even determine what constitutes “good” evidence), and could never generate enough arguments during prep. I didn’t know what constituted a good speech and thus hours of drilling got me nowhere. "
              + "The first time I worked with Paras we ran a practice debate. After the debate, Paras and I drilled for three hours as he showed me which habits to pursue and which to avoid. Using that criteria, he then told me to go home and redo my speeches from our debate until they were flawless. In the following three days until we drilled again, I improved more than I had in the previous year – including two weeks of camp. Paras will teach you how to drill effectively. If you’re willing to work hard, working with Paras will pay off. He taught me lasting debate skills I still use today and encouraged the enthusiasm and habits that drove me to practice every day. If I had worked with anyone else, I doubt I would have had any of the success I had. I cannot recommend Paras highly enough."
            },
            {
              "picture" : "3.jpg",
              "name" : "Pranav Reddy",
              "slug" : "SchoolPR",
              "subtitle" : "TOC 2015 Champion + 2nd speaker, NDCA 2014 + 2015 Champion, Harvard-Westlake 2015 Champion, Glenbrooks 2014 Champion + 1st speaker, Berkeley 2014 Champion",
              "class" : "University of Pennsylvania, Class of 2019",
              "paragraph" : "I began working with Paras during the summer of my freshman year, when I barely knew anything about debate. Despite how truly incompetent I was, Paras worked with me every week and took a personal investment in my success: week one we worked on organization, week two we talked about what the goal of every speech was and so on. No one was happier when I finally reached elimination rounds at a tournament than Paras was. "
              + "Throughout the two years I spent working with Paras, we focused on skills that were transferrable to every debate. We did a wide variety of drills, from word economy and speaking drills to more specific ones, such as how to respond to common arguments and strategies I encountered throughout my career. Even when I was entirely new to the activity and knew nothing about how debate worked, Paras was very effective at paraphrasing and explaining ideas and then creating an accompanying drill to reinforce the concepts I had just learned. Without all the time Paras and I spent on understanding the fundamentals of debate, I would never have had as much success in the activity. I still remembered his lectures about argument selection, time tradeoffs and debate as a game before the most important and final rounds of my career."
            }
          ];
          for(i = 0; i < $scope.testimonials.length; i++){
            if($scope.testimonials[i].slug == $routeParams.code){
              $scope.agent = $scope.testimonials[i];
            }
          }

            $scope.chooseTag = function(tag){
              $scope.tagged = tag;
              for(i = 0; i < $scope.videos.length; i++){
                video = $scope.videos[i];
                if(contains.call(video.tags, tag) == false){
                  video.active = false;
                } else {
                  video.active = true;
                }
              }
            }

            $scope.cleartagged = function(){
              for(i = 0; i < $scope.videos.length; i++){
                video = $scope.videos[i];
                video.active = true;
              }
              $scope.tagged = false;
            }

        });

        scotchApp.controller('aboutController', function($scope) {
            $scope.message = 'Look! I am an about page.';
        });

        scotchApp.controller('contactController', function($scope) {
            $scope.message = 'Contact us! JK. This is just a demo.';
        });
