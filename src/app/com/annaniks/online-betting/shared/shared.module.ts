import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule, } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatDialogModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        MatSidenavModule,
        MatExpansionModule
    ],
    entryComponents: [],
    exports: [
        CommonModule,
        MatDialogModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        MatSidenavModule,
        MatExpansionModule
    ]
})
export class SharedModule { }