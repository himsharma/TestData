
var testm = require("../models/testmodel");
var Array = require("node-array");
var records = [];
module.exports = {
    
    testget: function (req, res, next) {
       
        res.render('TestpageUpdate',
        {
            Test1: req.query.Test1 ,
          
        });
    },    
  
    testupdate: function (req, res) {
        
        records.push(test1);
        records.push(test2);
        
        res.render('TestpageUpdate',
        {
            Test1: records[0] ,
            Test2: records[1]
        });
    }
};

