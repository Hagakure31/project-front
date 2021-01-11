import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Puc_Configuration_Data } from 'src/puc_configuration_data';

@Injectable({
  providedIn: 'root',
})
export class PucConfigurationDataService {
  apiUrl = environment.url + '/puc_configuration_data/';
  apiEcuNames = this.apiUrl + 'ecu_names/';

  constructor(private http: HttpClient) {}
  getPucConfigurationData(): Observable<Puc_Configuration_Data[]> {
    return this.http.get<Puc_Configuration_Data[]>(this.apiUrl);
  }

  getEcuNames(): Observable<string[]> {
    return this.http.get<string[]>(this.apiEcuNames);
  }
}
