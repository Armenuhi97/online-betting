import { Injectable } from "@angular/core";

@Injectable()

export class MainService {
    private _isAuthorizated: boolean = false;
    public changeAuthorizated(value: boolean) {
        this._isAuthorizated = value
    }
    get isAuthorizated() {
        return this._isAuthorizated
    }
}