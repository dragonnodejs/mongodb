"use strict";

// Bundle with services to develop applications with mongodb

module.exports = function (config, _, services) {
    config = {
        npm: __dirname + '/node_modules/',
        libraries: {
            nodejs: {},
            npm: { mongoskin: 'mongoskin' }
        },
        directory: __dirname + '/modules/',
        modules: {
            npm: {},
            directory: config
        }
    };
    require('dragonnodejs')(config, services);
};
