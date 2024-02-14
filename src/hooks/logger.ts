import { Injectable } from "@angular/core";

@Injectable()
export class Logger {

    private _prefix = ''

    set prefix(prefix: string) {
        this._prefix = prefix + ' : '
    }

    log(input: string) {
        console.log(this._prefix + input)
    }
}