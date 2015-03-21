'use strict';

/**
 * Initialize db service with the MongoDB connection and the toObjectID converter
 * @example
    db: {
        uri: 'mongodb://127.0.0.1/app?auto_reconnect=true',
        options: { safe: true }
    }
 */

module.exports = function (config, libraries, services) {
    var mongoskin = libraries.mongoskin;

    var db = mongoskin.db(config.uri, config.options);
    db.toObjectID = mongoskin.helper.toObjectID;

    services.db = db;
};
