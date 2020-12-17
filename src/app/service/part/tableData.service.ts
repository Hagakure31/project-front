import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tableData } from 'src/tableData';

@Injectable({
  providedIn: 'root',
})
export class TableDataService {
  apiUrl = environment.url + '/referential_ecu_diagitems/';

  constructor(private http: HttpClient) {}
  getTableData(): Observable<tableData[]> {
    return this.http.get<tableData[]>(this.apiUrl);
  }
}
