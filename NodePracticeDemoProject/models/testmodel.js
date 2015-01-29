var mongoose = require('mongoose');
var passportlocalmongoose = require('passport-local-mongoose');

var testSchema = new mongoose.Schema({
    test1: String,
    test2: String   
});

testSchema.plugin(passportlocalmongoose);
module.exports = mongoose.model('testmodel', testSchema);
module.exports.Schema = testSchema;