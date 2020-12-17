import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Part } from 'src/part';
import { PartService } from './service/part/part.service';
import { share } from 'rxjs/operators';
import { tableData } from 'src/tableData';
import { TableDataService } from './service/part/tableData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayedColumns: string[] = [
    'ecu_name',
    'config_diagitem',
    'option_valuewrite',
    'option_text',
    'royalty_part_nr',
    'part_description_fr',
    'part_description_en',
    'royalty_mtc_scr',
    'comment',
    // 'symbol',
    // 'data5',
    // 'data6',
    // 'data7',
    // 'data8',
  ];

  constructor(private tableDataService: TableDataService) {}
  tableData: Observable<tableData[]>;
  ngOnInit(): void {
    this.tableData = this.tableDataService.getTableData().pipe(share());
  }
}
