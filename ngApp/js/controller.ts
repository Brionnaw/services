
  namespace MyApp.Controllers {
    export class HomeController {
      public food;
      public test(){
        console.log(this.food)
      };
    }
    angular.module('app').controller('HomeController', HomeController);
  }
