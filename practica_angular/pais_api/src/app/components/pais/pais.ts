import { Component, OnInit, signal } from '@angular/core';

import { ApiService } from '../../services/api';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.html',
})
export class Pais implements OnInit {

  paises = signal<any[]>([]);

  constructor(private apiService: ApiService) {}

  ngOnInit() {

    this.apiService.getPaises().subscribe((data) => {

      this.paises.set(data);

    });

  }

  getIdiomas(languages: any) {

    return Object.values(languages);

  }

}