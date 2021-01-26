import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Puc_Configuration_Data } from 'src/puc_configuration_data';

@Injectable({
  providedIn: 'root',
})
export class PucConfigurationDataService {
  apiUrl = environment.url + '/puc_configuration_data/';
  apiEcuNames = this.apiUrl + 'ecu_names/';
  apiConfigDiagitems = this.apiUrl + 'config_diagitems';
  apiOptionValueWrite = this.apiUrl + 'option_valuewrite';

  constructor(private http: HttpClient) {}
  getPucConfigurationData(): Observable<Puc_Configuration_Data[]> {
    return this.http.get<Puc_Configuration_Data[]>(this.apiUrl);
  }

  getEcuNames(): Observable<string[]> {
    return this.http.get<string[]>(this.apiEcuNames);
  }

  getConfigDiagitems(selectedEcu): Observable<string[]> {
    const params = new HttpParams().append('ecu_name', selectedEcu);
    return this.http.get<string[]>(this.apiConfigDiagitems, { params: params });
  }

  getOptionValuewrite(selectedEcu, selectedDiagitem): Observable<string[]> {
    const params = new HttpParams()
      .append('ecu_name', selectedEcu)
      .append('config_diagitem', selectedDiagitem);
    return this.http.get<string[]>(this.apiOptionValueWrite, {
      params: params,
    });
  }

  // getConfigDiagitems(selectedEcu): Observable<string[]> {
  //   return this.http.get<string[]>(this.)
  // }
}
