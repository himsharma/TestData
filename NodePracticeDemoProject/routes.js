app = module.parent.exports.app;
var Main = require('./routes/Main');
var Testpage = require('./routes/Testpage');
var TestpageUpdate = require('./routes/TestpageUpdate');



//define routes
app.all('/', function (req, res, next) {
    Main.index(req, res, next);
});
app.get('/TestPage', Testpage.testget);

app.post('/TestPage', function (req, res) {  
    Testpage.testsave(req, res);  
});
app.get('/TestPageUpdate', TestpageUpdate.testget);

app.post('/TestPageUpdate', function (req, res) {
    TestpageUpdate.testupdate(req, res);
});




