var fs = require('fs');

module.exports = function () {
    var config = {};
    
    config = {
        mode: 'local',
        port: 3000,
        authenticationScheme: 'local',
        mongo: {
            host: '127.0.0.1',
            port: 27017
        }
    };
    return config;

};
