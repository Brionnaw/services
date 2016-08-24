
    namespace MyApp.Services {
      export class ProductService {
        public calculateTax(price:number) {
          let tax = price * 0.08;
          let total = price + tax;
          return total;
        }
      }
      angular.module('app').service('productService', ProductService);
    }
//
