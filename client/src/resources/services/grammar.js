import {noView, inject} from 'aurelia-framework';
import {ObserverLocator} from 'aurelia-binding';

@noView
@inject(ObserverLocator)
export class GrammarService {
    constructor(ObserverLocator) {
        this._stack = ['distal', 'stem'];

        this.stackObserver = ObserverLocator
            .getArrayObserver(this._stack)
            .subscribe(function (val) {
                console.log('observed change')
                console.log(val);
            });
        console.log('pushing distal');
        this._stack.push('distal');
        console.log('pushing stem');
        this._stack.push('stem');
        console.log(this._stack);
    }

    get stack() {
        return this._stack;
    }
}

