import { Component, OnInit, OnDestroy } from "@angular/core";
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'about-us-view',
    templateUrl: 'about-us.view.html',
    styleUrls: ['about-us.view.scss']
})
export class AboutUsView implements OnInit, OnDestroy {
    constructor(private _title: Title) { }
    ngOnInit() { 
        this._title.setTitle('О нас')
    }

    ngOnDestroy() { }
}