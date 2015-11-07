'use strict';

/**
 * Initialize db service with the MongoDB connection and the toObjectID converter
 * @example
    ['modules/db', {
        uri: process.env.MONGOLAB_URI || 'mongodb://127.0.0.1/app?auto_reconnect=true',
        options: { safe: true }
    }]
 */

module.exports = (config, libraries, services) => {
    let mongoskin = libraries.mongoskin;

    let db = mongoskin.db(config.uri, config.options);
    db.toObjectID = mongoskin.helper.toObjectID;

    services.db = db;
};
