import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GethoodsService {
  api_link:string='http://localhost:8000/';

  url = 'http://127.0.0.1:8000/api/hood/'
  update_url ='http://127.0.0.1:8000/api/update/hood/'
  
//   constructor(private http:HttpClient) {

//    }

//    fetchHoodApi(): Observable<Hood[]>{
//     return this.http.get<Hood[]>(this.url);
//   }
//   create(hood: any) {
//     return this.http.post(this.url, hood);
//   }

//   update(id: any, hood: Hood) {
//     return this.http.put(`${this.update_url}${id}/`, hood);
//   }


}