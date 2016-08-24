
  namespace MyApp.Controllers {
    export class HomeController {
        public price;
        public total;
        constructor(

          private productService: MyApp.Services.ProductService
        ) {

        }
        public calculateTax(){
        let num = parseInt(this.price);
           this.total = this.productService.calculateTax(num);
        }
    }
    angular.module('app').controller('HomeController', HomeController);
  }
