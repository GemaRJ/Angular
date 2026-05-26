import {
Component,
OnInit,
signal
} from '@angular/core';

import { ApiService } from '../../services/api';

@Component({
selector: 'app-listado',
templateUrl: './listado.html'
})
export class Listado implements OnInit {

lista = signal<any[]>([]);

constructor(private apiService: ApiService) {}

ngOnInit(): void {

this.apiService.getEquipos().subscribe((data: any) => {

this.lista.set(data.teams);

});

}

}

