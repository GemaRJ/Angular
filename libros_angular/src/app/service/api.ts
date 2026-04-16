import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'https://stephen-king-api.onrender.com/api/books';

  constructor(private http: HttpClient) {}

  getLibros(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}

