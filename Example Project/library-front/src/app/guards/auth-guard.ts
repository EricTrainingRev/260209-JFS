import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const httpClient = inject(HttpClient)
  let isValid = false;
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${userService.getAuthToken()}`
  });
  httpClient.post("http://localhost:8080/auth",{},{headers: headers, observe:"response"}).subscribe({
      next: response =>{
        if(response.status === 202){
          isValid = true;
        }
      },
      error: error => console.error(error)
    })

  return isValid;
};
