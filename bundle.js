"use strict";
/*global module:false */
/*global __dirname:false */

// Bundle with services to develop applications with MongoDB

module.exports = function (config, _, services) {
    config = {
        npm: __dirname + '/node_modules/',
        libraries: {
            npm: {
                mongoskin: 'mongoskin',
                underscore: 'underscore'
            }
        },
        directory: __dirname + '/modules/',
        modules: {
            directory: config
        }
    };
    require('dragonnodejs')(config, services);
};
