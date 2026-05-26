import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = 'https://open.er-api.com/v6/latest';

  constructor(private http: HttpClient) {}

  getTasas(base: string) {
    return this.http.get<any>(`${this.url}/${base}`);
  }
}