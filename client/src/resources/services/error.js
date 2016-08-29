import {noView, computedFrom} from 'aurelia-framework';

@noView
export class ErrorService {
    constructor() {
        this._message = null;
        this._code = null;
    }

    clear() {
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
        this._message = value;
    }
}

