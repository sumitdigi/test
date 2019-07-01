var mongoose = require('mongoose');
require('../model/registrationModel.js');
var registrationModel = mongoose.model('registrationModel');

const bcrypt = require('bcrypt-nodejs');

exports.saveRegistration = function(req, res) {
    var hashPassword = bcrypt.hashSync(req.body.password);
    delete req.body.password;
    req.body.password = hashPassword;
    var registrationData = new registrationModel(req.body);
    registrationData.save(function(err, result) {
        if (result) {
            res.status(200).json({ message: "Data has been created" })
        }
    });
};

exports.getUserList = function(req, res) {
    registrationModel.find({}, function(err, result) {
        res.status(200).json({ result: result });
    })
}

exports.getUserData = function(req, res) {
    registrationModel.findOne({ _id: req.query.id }, function(err, result) {
        res.status(200).json({ result: result });
    })
}

exports.updateRegistration = function(req, res) {
    registrationModel.updateOne({ _id: req.body._id }, {
        $set: req.body
    }, function(updateResult, updateErr) {
        res.status(201).json({ message: "Successfully Updated" })
    })
}

exports.login = function(req, res) {
    console.log(req.body);
}

exports.deleteUser = function(req, res) {
    console.log(req.query);
    // registrationModel.deleteOne({ _id: req.query.id }, function(err, deleteResult) {
    //     res.status(200).json({ message: 'User has been delete' });
    // })
}