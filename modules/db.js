"use strict";
/*global module:false */

/**
 * Initialize db service with the MongoDB connection and some helper for ObjectId and bind collections with indexes
 * @example
    db: {
        uri: 'mongodb://127.0.0.1/app?auto_reconnect=true',
        options: { safe: true }
    }
 */

module.exports = function (config, libraries, services) {
    var mongoskin = libraries.mongoskin,
        _ = libraries.underscore;

    var db = mongoskin.db(config.uri, config.options);
    db.toObjectID = mongoskin.helper.toObjectID;

    /**
     * Bind the collections and ensure the needed indexes
     * @example
        var db = services.db;
        db.use({
            examples: [{ example: 1 }, { unique: true }]
        });
     */
    db.use = function (collections) {
        _.each(collections, function (indexes, name) {
            db.bind(name);
            _.each(indexes, function (index) {
                db[name].ensureIndex(index[0], index[1], function () {});
            });
        });
    };

    services.db = db;
};
