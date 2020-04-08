import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  

  constructor(private http: HttpClient) { }

  getMusic(){
    return this.http.get<any[]>('/api/angularcrud/list.php');
  }

  
}
