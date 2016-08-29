'use strict';

const util = require('util');

function KanaError(message) {
    Error.call(this);
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.message = message || '';
}

util.inherits(KanaError, Error);

module.exports = KanaError;