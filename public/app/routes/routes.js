firstApp.config(function($stateProvider) {
    $stateProvider
        .state('home', {
            url: '',
            abstract: true,
            templateUrl: '/partials/home.html'
        })
        .state('home.main', {
            url: '/',
            templateUrl: '/partials/home_main.html',
            controller: 'homeMainController',
            resolve: {
                getUserList: ['$http', '$q', '$stateParams', getUserList],

            }
        })
        .state('home.login', {
            url: '/login',
            templateUrl: '/partials/login.html',
            controller: 'loginController'
        })
        .state('home.registration', {
            url: '/registration',
            templateUrl: '/partials/registartion.html',
            controller: 'registrationController'
        })
        .state('home.editRegistration', {
            url: '/edit-user/:id',
            templateUrl: '/partials/edit_registration.html',
            controller: 'editRegistationController',
            resolve: {
                getUserData: ['$http', '$q', '$stateParams', getUserData]
            }
        })
});


function getUserList($http, $q) {
    var deferred = $q.defer();
    $http.get('/getUserList').then(function(data) {
        deferred.resolve(data);
    });
    return deferred.promise;
}

function getUserData($http, $q, $stateParams) {
    console.log($stateParams);
    var deferred = $q.defer();
    $http.get('/getUserData?id=' + $stateParams.id).then(function(data) {
        deferred.resolve(data);
    });
    return deferred.promise;
}