import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule,  } from '@angular/forms';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatDialogModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule
    ],
    entryComponents: [],
    exports: [
        CommonModule,
        MatDialogModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class SharedModule { }