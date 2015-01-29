
var testm = require("../models/testmodel");
var Array = require("node-array");
var records = [];
module.exports = {
    
    testget: function (req, res, next) {
        res.render('Testpage');
    },
    
    testsave: function (req, res) {
        
        var test1 = req.body.test1;
        var test2 = req.body.test2;
        
        records.push(test1);
        records.push(test2);
        
        res.render('Testpage',
        {
            Test1: records[0] ,
            Test2: records[1]
        });
        res.redirect("/TestPageUpdate");
    }   
};

