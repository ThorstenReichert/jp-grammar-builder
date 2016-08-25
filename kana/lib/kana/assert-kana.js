'use strict';

const Kana = require('../kana').class;
const KanaError = require('../error/kana-error');

/**
 * Checks if argument is instance of Kana
 *
 * @param {*} obj
 * @throws {KanaError}
 */

module.exports = function (obj) {
    if (!(obj instanceof Kana)) {
        throw new KanaError('Object is not instance of Kana');
    }
};