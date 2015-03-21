'use strict';

// Bundle with services to develop applications with MongoDB

module.exports = function (config, _, services) {
    config = {
        libraries: {
            mongoskin: require('mongoskin'),
            underscore: require('underscore')
        },
        directory: __dirname + '/modules/',
        modules: {
            directory: config
        }
    };
    require('dragonnodejs')(config, services);
};
