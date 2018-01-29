import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {

  postUrl: string = "http://localhost:8808/meta/images";

  constructor(private http: HttpClient) { }

  setHeaders() {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json')

    return headers;
  }

  public get(url: string): Observable<any> {
    return this.http.get(url);
  }

  public post(url: string, body: any): Observable<any> {
    return this.http.post(url, body);
  }
}
