import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  apiUrl = environment.url + '/register/';

  constructor(private http: HttpClient) {}

  postRegisterForm(body): Observable<any> {
    return this.http.post<any>(this.apiUrl, body);
  }
}
