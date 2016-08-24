
    namespace MyApp {
      angular.module("app",['ui.router']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
      )=> {
        $stateProvider.state("Home", {
          url: '/',
          templateUrl: 'ngApp/templates/home.html',
          controller:MyApp.Controllers.HomeController,
          controllerAs:"vm"
        });
        $urlRouterProvider.otherwise('/')
        $locationProvider.html5Mode(true);
      })
    }
