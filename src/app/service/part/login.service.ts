import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiUrl = environment.url + '/auth/';

  constructor(private http: HttpClient) {}

  postLoginForm(body): Observable<any> {
    return this.http.post<any>(this.apiUrl, body);
  }
}
