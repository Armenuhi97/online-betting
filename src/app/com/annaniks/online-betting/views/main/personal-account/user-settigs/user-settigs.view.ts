import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'user-settigs-view',
    templateUrl: 'user-settigs.view.html',
    styleUrls: ['user-settigs.view.scss']
})
export class UserSettingsView {
    public settingsGroup: FormGroup;
    constructor(private _fb: FormBuilder) { }
    ngOnInit() {
        this._validate()
    }
    private _validate(): void {
        this.settingsGroup = this._fb.group({
            name: [null, Validators.required],
            email: [null, [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/)]],
            password:[null]
        })
    }
    public save(){}
    
    ngOnDestroy(){}
}