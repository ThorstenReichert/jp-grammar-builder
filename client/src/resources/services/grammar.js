import {noView, computedFrom, inject} from 'aurelia-framework';
import {ObserverLocator, BindingEngine, observable} from 'aurelia-binding';

function range(length) {
    let res = [];
    for (let i = 0; i < length; i++) {
        res.push(i);
    }
    return res;
}

class GrammarItem {
    constructor(notify) {
        this.notify = notify;
    }

    @observable({changeHandler: 'idChanged'}) id = '';
    idChanged(newValue, oldValue) {
        if (typeof this.notify === 'function') {
            this.notify();
        }
    }

    empty() {
        return this.id === '' || !this.id;
    }
}

@noView
export class GrammarService {
    constructor() {
        this.stack = [new GrammarItem(this.clean.bind(this))];
    }

    get indexSet() {
        return range(length);
    }

    clean() {
        let newStack = [];

        let i = 0;
        for (; i < this.stack.length; i++) {
            if (this.stack[i].empty()) {
                break;
            }
            newStack.push(this.stack[i]);
        }
        newStack.push(new GrammarItem(this.clean.bind(this)));
        this.stack = newStack;
    }
}

