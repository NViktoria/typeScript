/* eslint-disable no-underscore-dangle */

import { timeout } from '../decorators';

abstract class ReferenceItem {
    // title: string;
    // year: number;
    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating a new ReferenceItem...');
    //     this.title = newTitle;
    //     this.year = newYear;
    // };
    #id: number;
    static department: string = 'something';
    private _publisher: string;

    get publisher(): string {
        return this._publisher.toUpperCase();
    };

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    getID(): number {
        return this.#id;
    }

    constructor(
        public title: string,
        protected year: number,
        id: number
    ) {
        this.#id = id;
        console.log('Creating a new ReferenceItem...');
    };

    // @timeout(2000)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(ReferenceItem.department);
        console.log(Object.getPrototypeOf(this).constructor.department);
    }

    abstract printCitation(): void;
}

export { ReferenceItem };