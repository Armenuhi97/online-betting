import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-contacts-view',
    templateUrl: 'contacts.view.html',
    styleUrls: ['contacts.view.scss']
})
export class ContactsViewComponent implements OnInit, OnDestroy {
    public contactForm: FormGroup;
    constructor(private _title: Title, private _fb: FormBuilder) { }

    ngOnInit() {
        this._title.setTitle('Контакты');
        this._initForm()
    }
    private _initForm() {
        this.contactForm = this._fb.group({
            name: [null, Validators.required],
            email: [null, [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/)]],
            message: [null, Validators.required]
        })
    }
    ngOnDestroy() { }
}
