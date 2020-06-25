import { Component, OnInit, OnDestroy } from "@angular/core";
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'contacts-view',
    templateUrl: 'contacts.view.html',
    styleUrls: ['contacts.view.scss']
})
export class ContactsView implements OnInit, OnDestroy {
    constructor(private _title: Title) { }
    ngOnInit() { 
        this._title.setTitle('Контакты')
    }

    ngOnDestroy() { }
}