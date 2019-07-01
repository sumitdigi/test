module.exports = function(app) {
    var mainController = require('../controller/main');
    app.post('/saveRegistration', mainController.saveRegistration);
    app.get('/getUserList', mainController.getUserList);
    app.get('/getUserData', mainController.getUserData);
    app.put('/updateRegistration', mainController.updateRegistration);
    app.post('/login', mainController.login);
    app.delete('/deleteUser', mainController.deleteUser);
};