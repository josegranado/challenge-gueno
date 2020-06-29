import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestUser } from '../interfaces/RequestUser';
@Injectable({
  providedIn: 'root'
})
export class UserService {
	API_ENDPOINT = 'http://localhost:4000/challenge/'
  constructor(
  		private http:HttpClient
  	) { }
  getUser(cuit)
  {
  		return this.http.get<RequestUser>(this.API_ENDPOINT+'getUserData/'+cuit);
  }
  setUser(name:string, surname:string, birthday:string, confidence:string, cuit:number)
  {
  	return this.http.post(this.API_ENDPOINT+'/setUserData/'+cuit,{ name, surname, birthday, confidence });
  }
}
