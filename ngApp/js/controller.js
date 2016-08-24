var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController() {
            }
            HomeController.prototype.test = function () {
                console.log(this.food);
            };
            ;
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('app').controller('HomeController', HomeController);
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
