'use strict';

const util = require('util');

function InvalidArgumentError(message) {
    Error.call(this);
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.message = message || '';
}

util.inherits(InvalidArgumentError, Error);

module.exports = InvalidArgumentError;