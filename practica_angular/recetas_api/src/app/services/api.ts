import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getTags() {
    return this.http.get<string[]>(
      'https://dummyjson.com/recipes/tags'
    );
  }

  getRecetasPorTag(tag: string) {
    return this.http.get<any>(
      `https://dummyjson.com/recipes/tag/${tag}`
    );
  }

}