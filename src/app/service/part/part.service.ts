import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Part } from 'src/part';

@Injectable({
  providedIn: 'root',
})
export class PartService {
  apiUrl = environment.url + '/part/';

  constructor(private http: HttpClient) {}
  getParts(): Observable<Part[]> {
    return this.http.get<Part[]>(this.apiUrl);

  }
}
