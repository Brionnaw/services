var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(productService) {
                this.productService = productService;
            }
            HomeController.prototype.calculateTax = function () {
                var num = parseInt(this.price);
                this.total = this.productService.calculateTax(num);
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('app').controller('HomeController', HomeController);
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
