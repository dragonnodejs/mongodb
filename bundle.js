'use strict';

// Bundle with services to develop applications with MongoDB

module.exports = (config, _, services) => {
    config = {
        libraries: {
            mongoskin: require('mongoskin')
        },
        directory: __dirname + '/',
        modules: config
    };
    require('dragonnodejs')(config, services);
};
