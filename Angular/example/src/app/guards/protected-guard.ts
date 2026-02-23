import { inject } from '@angular/core';
import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { Auth } from '../service/auth';

/*
  Route Guards are how you control user navigation in Angular. You have three options for
  how to resolve your guards:
  return true => navigation continues
  return false => navigation is canceled
  return URLTree => user is redirected to the new route
*/
export const protectedGuard: CanActivateFn = (route, state) => {
  // use inject to access the Router or any services you make outside of your components
  const router = inject(Router);
  // route provides details about the navigation, such as path params and query params
  console.log(route.toString());
  // state lets you get a snapshot of the whole navigation request
  console.log(state.url.toString())
  /*
    a quick way to manage a redirect is to use the router.parseURL method. return this value
    to tell Angular where to redirect the request
    return router.parseUrl("outletOne");
  */
 
  /*
    A common option for building route guards is to store required state information in one or
    more services and then inject those services into your guards to perform any data validation
    necessary
  */
  const authService = inject(Auth);
  return authService.checkAccess();

};
