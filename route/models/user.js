const mongoose = require('mongoose');

var constactSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    number: {
        type: String
    },
    tac: {
        type: checked
    }
});

module.exports = mongoose.model('users', constactSchema);
