'use strict';

/**
 * Bind collections with indexes to the db service
 * @example
    ['modules/collections', [
        ['examples', [
            [{ example: 1 }, { unique: true }]
        ]]
    ]]
 */

module.exports = (config, libraries, services) => {
    let db = services.db;

    for (let collection of config) {
        db.bind(collection[0]);
        for (let index of collection[1]) {
            db[collection[0]].ensureIndex(index[0], index[1], () => {});
        }
    }
};
