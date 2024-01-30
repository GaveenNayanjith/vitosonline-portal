import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASIC_URL="http://localhost:8081/"

@Injectable({
  providedIn: 'root'
})
export class HomeServicesService {

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<any> {
    return this.http.get<[]>(BASIC_URL + `/api/pizza/get-all-cat`)
  }

  getAllPizzaByCategory(categoryId:number): Observable<any> {
    return this.http.get<[]>(BASIC_URL + `/api/pizza/${categoryId}/get-all-pizza`)
  }

}
