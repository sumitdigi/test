firstApp.controller('registrationController', ['$scope', '$state', 'mainService', function($scope, $state, mainService) {

    $scope.saveRegistration = function(registrationData) {
        mainService.saveRegistration(registrationData)
            .then(function(response) {
                $state.go('home.main');
            })
            .catch(function(error) {

            })
    }
}])

firstApp.controller('homeMainController', ['$scope', '$state', 'getUserList', 'mainService', function($scope, $state, getUserList, mainService) {
    $scope.userList = getUserList.data.result;

    $scope.deleteUser = function(id) {
        var userId = $.param({
            id: id.id
        });
        mainService.deleteUser(userId)
            .then(function(response) {
                $state.reload('home.main');
            })
            .catch(function(error) {

            })
    }

}]);

firstApp.controller('editRegistationController', ['$scope', 'getUserData', 'mainService', '$state', function($scope, getUserData, mainService, $state) {

    console.log(getUserData);
    $scope.editRegistrationData = getUserData.data.result;

    $scope.updateRegistration = function(data) {
        mainService.updateRegistration(data)
            .then(function(response) {
                $state.go('home.main');
            })
            .catch(function(error) {

            })
    }
}]);

firstApp.controller('loginController', ['$scope', '$state', 'mainService', function($scope, $state, mainService) {


    $scope.login = function(data) {
        mainService.login(data)
            .then(function(response) {

            })
            .catch(function(error) {

            });
    }
}]);