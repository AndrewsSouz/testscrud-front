import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { User } from '../../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  url = `http://localhost:8080/users`;
  users: User[] = [];

  //Injetando HttpCLient
  constructor(private httpClient: HttpClient) { }

  // headers
  httpOptions = {
    headers: new HttpHeaders({
       'Content-Type':'application/json',
       'Access-Control-Allow-Origin':'*'
      })
  }

  getUsers():Observable<User[]>{
      return this.httpClient.get<User[]>(this.url,this.httpOptions)
  }

}
