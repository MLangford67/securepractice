var secure;
(function (secure) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($http) {
                this.$http = $http;
            }
            HomeController.prototype.postUser = function () {
                this.$http.post('/usersRoutes/api/Register', this.newUser).then(function (result) {
                    console.log(result);
                })
                    .catch(function (err) {
                    console.log(err);
                });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AboutController = (function () {
            function AboutController() {
                this.message = 'Hello from the about page!';
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
    })(Controllers = secure.Controllers || (secure.Controllers = {}));
})(secure || (secure = {}));
