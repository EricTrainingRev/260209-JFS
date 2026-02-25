import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private authToken = "";
  
  constructor(private httpClient: HttpClient, private router: Router){}

  registerUser(username: string, password: string){
    // any as the expected response data is fine for prototyping, long term an interface would be a better solution
    this.httpClient.post<{id:string, username: string, password: string}>("http://localhost:8080/patron",{username, password}).subscribe({
      next: response => alert(`account registered with username ${response.username}`),
      error: error => alert("something went wrong registering, please try again")
    });
  }

  login(username: string, password: string){
    this.httpClient.post<{token: string}>("http://localhost:8080/login",{username,password}, {observe:"response"}).subscribe({
      next: response => {
        if(response.status === 200){
          if(!response.body){
            throw new Error("There was a problem logging in, please try again");
          }
          this.authToken = response.body.token;
          this.router.navigate(["home"]);
        } else {
          console.log("Login failed");
        }
      },
      error: error => console.error(error)
    });
  }

  getAuthToken(){
    return this.authToken;
  }

}
