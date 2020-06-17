import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule, } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatDialogModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        MatSidenavModule
    ],
    entryComponents: [],
    exports: [
        CommonModule,
        MatDialogModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        MatSidenavModule
    ]
})
export class SharedModule { }