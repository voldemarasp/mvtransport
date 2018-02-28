import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import { HttpHeaders } from '@angular/common/http'; 

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
  })
};

@Injectable()
export class SubmitProvider {
  formSent: boolean;
  configUrl = 'http://app.valdema.lt/api/';
  
  constructor(public http: HttpClient) {
    this.formSent = false;
  }
  
  sendByPost(forma) {
    return this.http.post("http://app.valdema.lt/mail/", forma, httpOptions).toPromise();
  }
  
  getDaysFromProvider() {
    return this.http.get(this.configUrl).map(
      (response: Response) => {
        return response;
      }
    )
  }
  
}