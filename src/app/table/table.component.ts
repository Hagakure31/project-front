import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { tableData } from 'src/tableData';
import { TableDataService } from '../service/part/tableData.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
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
  ];

  constructor(private tableDataService: TableDataService) {}

  tableData: tableData[];

  createRow(data) {
    this.tableData = [...this.tableData, data];
  }

  ngOnInit(): void {
    this.tableDataService.getTableData().subscribe((tableData) => {
      this.tableData = tableData;
    });
  }
}
