import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getPaises() {
    return this.http.get<any[]>(
      'https://restcountries.com/v3.1/all?fields=name,flags,languages'
    );
  }

}