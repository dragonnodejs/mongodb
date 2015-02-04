"use strict";

/**
 * Initialize db service with the MongoDB connection and some helper for ObjectId and bind collections with indexes
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

    /**
     * Bind the collections and ensure the needed indexes
     * @example
        var db = services.db;
        db.use({
            examples: [{ example: 1 }, { unique: true }]
        });
     */
    db.use = function (collections) {
        for (var name in collections) {
            var indexes = collections[name];
            db.bind(name);
            for (var key in indexes) {
                var index = indexes[key];
                db[name].ensureIndex(index[0], index[1], function () {});
            }
        }
    };

    services.db = db;
};
