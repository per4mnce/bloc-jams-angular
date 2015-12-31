(function () {
    console.log("app.js start");
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('landing', {
                url: '/',
                templateUrl: '/templates/landing.html'
            })
            .state('album', {
                url: '/album',
                templateUrl: '/templates/album.html'
            })
            .state('collection', {
                url: '/collection',
                templateUrl: '/templates/collection.html'
            });
    }

    angular
        .module('blocJams', ['ui.router'])
        .config(config);
    
    console.log("app.js end");
})();
