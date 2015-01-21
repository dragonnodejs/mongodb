"use strict";

/**
 * Initialize collection service to define collections with indexes
 * @example
    collection: {}
 */

module.exports = function (config, libraries, services) {
    var db = services.db;

    /**
     * Define collection with indexes
     * @example
        var collection = services.collection;
        var examples = collection('examples', [
            [{ 'example': 1 }, { sparse: true, unique: true }]
        ]);
     */
    var collection = function (name, indexes) {
        db.bind(name);
        for (var key in indexes) {
            var index = indexes[key];
            db[name].ensureIndex(index[0], index[1], function () {});
        }
        return db[name];
    };

    services.collection = collection;
};
