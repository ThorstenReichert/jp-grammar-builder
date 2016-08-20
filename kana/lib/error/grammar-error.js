'use strict';

const util = require('util');

function GrammarError(message) {
    Error.call(this);
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.message = message || '';
}

util.inherits(GrammarError, Error);

module.exports = GrammarError;