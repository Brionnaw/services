var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var ProductService = (function () {
            function ProductService() {
            }
            ProductService.prototype.calculateTax = function (price) {
                var tax = price * 0.08;
                var total = price + tax;
                return total;
            };
            return ProductService;
        }());
        Services.ProductService = ProductService;
        angular.module('app').service('productService', ProductService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
