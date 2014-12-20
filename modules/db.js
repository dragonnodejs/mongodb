"use strict";

/**
 * Initialize db service with the mongodb connection
 * @example
    db: {
        uri: '',
        options: { safe: true }
    }
 */

module.exports = function (config, libraries, services) {
    var mongoskin = libraries.mongoskin;
    services.db = mongoskin.db(config.uri, config.options);
};
