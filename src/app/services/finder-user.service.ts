import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinderUserService {



  constructor(private http: HttpClient) {

  }

  getUser(user_name:string){
    return this.http.get(`https://api.github.com/users/${user_name}`);
  }

  getRepo(user_name:string){
    return this.http.get(`https://api.github.com/users/${user_name}/repos`);
  }
}
