import { Component, Input } from "@angular/core";
import { Team } from '../../models/model';

@Component({
    selector: 'app-table',
    templateUrl: 'table.component.html',
    styleUrls: ['table.component.scss']
})
export class TableComponent {
    public tables: Team[] = []
    @Input('tables')
    set setTable($event: Team[]) {
        if ($event) {
            this.tables = $event;
        }
    }
}