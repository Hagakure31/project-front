import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DialogFormData } from 'src/dialogFormData';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReferentialConfigDiagitemService {
  apiUrl = environment.url + '/referential_ecu_diagitems/';

  constructor(private http: HttpClient) {}

  postFormData(body): Observable<DialogFormData[]> {
    return this.http.post<any>(this.apiUrl, body);
  }
}
