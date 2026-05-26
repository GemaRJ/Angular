import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Api {

  http = inject(HttpClient);

  getMonedas() {
    return this.http.get<any>('https://api.frankfurter.app/latest?from=EUR');
  }

}