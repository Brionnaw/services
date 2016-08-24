var MyApp;
(function (MyApp) {
    angular.module("app", ['ui.router']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider.state("Home", {
            url: '/',
            templateUrl: 'ngApp/templates/home.html',
            controller: MyApp.Controllers.HomeController,
            controllerAs: "vm"
        });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    });
})(MyApp || (MyApp = {}));
