"use strict";

/**
 * Initialize db service with the mongodb connection
 * @example
    db: {
        uri: 'mongodb://127.0.0.1/app?auto_reconnect=true',
        options: { safe: true }
    }
 */

module.exports = function (config, libraries, services) {
    var mongoskin = libraries.mongoskin;
    services.db = mongoskin.db(config.uri, config.options);
};
