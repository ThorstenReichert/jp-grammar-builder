'use strict';

module.exports = function (k, m) {
    if (m[k.toString()]) {
        return m[k.toString()];
    } else {
        throw new Error('grammar#map: no match found for ' + k.toString());
    }
};