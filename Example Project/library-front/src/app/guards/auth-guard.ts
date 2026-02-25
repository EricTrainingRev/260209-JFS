import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const httpClient = inject(HttpClient)
  const router = inject(Router)
  let isValid = false;
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${userService.getAuthToken()}`
  });
  return httpClient.post("http://localhost:8080/auth",{},{headers: headers, observe:"response"}).pipe(
    map(response => {
      isValid = response.status === 202;
      if(!isValid){
        router.navigate(["login"])
        return false;
      }
      return isValid;
    }),
    catchError(()=>{
      router.navigate(['login'])
      return of(false)
    })
  );
};
