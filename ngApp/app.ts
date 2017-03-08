namespace secure {

    angular.module('secure', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
        .state('login', {
            url: '/',
            templateUrl: '/ngApp/views/login.html',
            controller: secure.Controllers.LoginController,
            controllerAs: 'vm'
        })
        .state('register', {
            url: '/register',
            templateUrl: '/ngApp/views/register.html',
            controller: secure.Controllers.RegisterController,
            controllerAs: 'vm'
        })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
