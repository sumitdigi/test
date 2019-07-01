var mongoose = require('mongoose');

var schema = mongoose.Schema;

var registrationSchema = new schema({
    fullName: { type: String },
    emailAddress: { type: String },
    mobileNo: { type: String },
    password: { type: String },
    created_at: { type: Date, default: Date.now }
});

exports.registrationModel = mongoose.model('registrationModel', registrationSchema);