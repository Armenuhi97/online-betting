import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule, } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { BettingCardComponent } from '../components';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
    declarations: [BettingCardComponent],
    imports: [
        CommonModule,
        MatDialogModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        MatSidenavModule,
        MatExpansionModule,
        DropdownModule
    ],
    entryComponents: [],
    exports: [
        CommonModule,
        MatDialogModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        MatSidenavModule,
        MatExpansionModule,
        BettingCardComponent,
        DropdownModule
    ]
})
export class SharedModule { }