import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from '../interfaces/Request';
@Injectable({
  providedIn: 'root'
})
export class CuitService {
  API_ENDPOINT = 'http://localhost:4000/challenge/'
  constructor(private http: HttpClient) { }

  getCuit(id)
  {
  		return this.http.get<Request>(this.API_ENDPOINT+'getCuit/'+id);
  }
}
