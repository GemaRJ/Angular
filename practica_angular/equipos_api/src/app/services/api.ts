import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})
export class ApiService {

http = inject(HttpClient);

getEquipos() {

return this.http.get<any>(
'https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Spanish%20La%20Liga'
);

}

}