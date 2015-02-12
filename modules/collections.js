"use strict";
/*global module:false */

/**
 * Bind collections with indexes to the db service
 * @example
    collections: {
        examples: [
            [{ example: 1 }, { unique: true }]
        ]
    }
 */

module.exports = function (config, libraries, services) {
    var db = services.db,
        _ = libraries.underscore;

    _.each(config, function (indexes, name) {
        db.bind(name);
        _.each(indexes, function (index) {
            db[name].ensureIndex(index[0], index[1], function () {});
        });
    });
};
