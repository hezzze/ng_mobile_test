'use strict'

var myApp = angular.module('myApp', [
  'ngRoute',
  'myControllers'
]);

myApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'partials/study_list.html',
            controller: 'StudyCtrl'
        }).
        when('/scenarios', {
            templateUrl: 'partials/scenario_list.html',
            controller: 'ScenarioCtrl'
        }).
        when('/schedule', {
            templateUrl: 'partials/schedule.html',
            controller: 'ScheduleCtrl'
        }).
        otherwise({
            redirectTo: '/home'
        });
    }
]);