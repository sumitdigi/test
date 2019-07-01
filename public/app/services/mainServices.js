(function() {
    'use strict';

    firstApp.factory('mainService', Service);

    function Service($http, $q) {
        var service = {};
        service.saveRegistration = saveRegistration;
        service.updateRegistration = updateRegistration
        service.login = login;
        service.deleteUser = deleteUser;

        return service;

        function saveRegistration(data) {
            return $http.post('/saveRegistration', data).then(handleSuccess, handleError);
        }

        function updateRegistration(data) {
            return $http.put('/updateRegistration', data).then(handleSuccess, handleError);
        }

        function login(data) {
            return $http.post('/login', data).then(handleSuccess, handleError);
        }

        function deleteUser(id) {
            return $http.delete('/deleteUser?' + id).then(handleSuccess, handleError);
        }

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(res) {
            return $q.reject(res.data);
        }
    }
})();