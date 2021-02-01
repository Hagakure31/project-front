import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Part } from 'src/part';

@Injectable({
  providedIn: 'root',
})
export class PartService {
  apiUrl = environment.url + '/parts/';
  apiRoyaltyPartNr = this.apiUrl + 'parts_nr/';
  apiPartDescriptions = this.apiUrl + 'part_descriptions';

  constructor(private http: HttpClient) {}
  getParts(): Observable<Part[]> {
    return this.http.get<Part[]>(this.apiUrl);
  }

  getRoyaltyPartNumbers(): Observable<string[]> {
    return this.http.get<string[]>(this.apiRoyaltyPartNr);
  }

  getPartDescriptions(selectedRoyaltyPartNr): Observable<any> {
    const params = new HttpParams().append('part_nr', selectedRoyaltyPartNr);
    return this.http.get<any>(this.apiPartDescriptions, {
      params: params,
    });
  }
}
