import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-table',
    templateUrl: 'table.component.html',
    styleUrls: ['table.component.scss']
})
export class TableComponent {
    public tables = []
    @Input('tables')
    set setTable($event) {
        if ($event) {
            this.tables = $event;
            console.log(this.tables);
        }

    }
}