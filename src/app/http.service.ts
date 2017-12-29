import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {

  postUrl: string = "http://localhost:8808/meta/images";

  constructor(private http: HttpClient) { }

  setHeaders() {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json')

    return headers;
  }

  listImages() {
    return this.http.get(this.postUrl, {
      headers: this.setHeaders()
    });
  }
}
