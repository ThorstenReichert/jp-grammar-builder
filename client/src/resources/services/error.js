import {noView, computedFrom, LogManager} from 'aurelia-framework';

const log = LogManager.getLogger('ErrorService');

@noView
export class ErrorService {
    constructor() {
        this._message = null;
        this._code = null;
    }

    clear() {
        log.debug('clearing all errors');
        this.message = null;
        this.code = null;
    }

    @computedFrom('_message')
    get hasError() {
        return !!this.message;
    }

    @computedFrom('_message')
    get message() {
        return this._message;
    }

    set message(value) {
        if (value) {
            log.debug('setting error', value);
        }
        this._message = value;
    }
}

